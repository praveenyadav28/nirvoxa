import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = process.cwd();
const outputRoot = path.join(projectRoot, 'dist');
const serverEntry = path.join(projectRoot, '.prerender', 'entry-server.js');
const { routes, renderRoute } = await import(pathToFileURL(serverEntry).href);
const template = await readFile(path.join(outputRoot, 'index.html'), 'utf8');

const escapeHtml = (value = '') => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}[character]));

const escapeXml = (value = '') => escapeHtml(value);

const renderHead = (metadata) => `
    <title>${escapeHtml(metadata.title.endsWith('Nirvoxa IT Solutions') ? metadata.title : `${metadata.title} | Nirvoxa IT Solutions`)}</title>
    <meta name="description" content="${escapeHtml(metadata.description)}" />
    <meta name="robots" content="${escapeHtml(metadata.robots)}" />
    <link rel="canonical" href="${escapeHtml(metadata.canonical)}" />
    <meta property="og:type" content="${escapeHtml(metadata.type)}" />
    <meta property="og:url" content="${escapeHtml(metadata.canonical)}" />
    <meta property="og:title" content="${escapeHtml(metadata.title)}" />
    <meta property="og:description" content="${escapeHtml(metadata.description)}" />
    <meta property="og:image" content="${escapeHtml(metadata.image)}" />
    <meta property="og:image:alt" content="Nirvoxa IT Solutions logo" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(metadata.title)}" />
    <meta name="twitter:description" content="${escapeHtml(metadata.description)}" />
    <meta name="twitter:image" content="${escapeHtml(metadata.image)}" />
`;

const sitemapEntries = [];

for (const route of routes) {
  const { markup, metadata } = renderRoute(route);
  const html = template
    .replace('<!-- SEO_METADATA -->', renderHead(metadata))
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  const outputFile = route === '/'
    ? path.join(outputRoot, 'index.html')
    : path.join(outputRoot, `${route.slice(1)}.html`);

  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, html);
  if (metadata.robots === 'index,follow' && metadata.canonical === `${new URL(metadata.canonical).origin}${route}`) {
    sitemapEntries.push(`  <url><loc>${escapeXml(metadata.canonical)}</loc></url>`);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>\n`;
await writeFile(path.join(outputRoot, 'sitemap.xml'), sitemap);
await rm(path.join(projectRoot, '.prerender'), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes and generated sitemap.xml`);