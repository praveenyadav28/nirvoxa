import { companyConfig } from './company';
import { productsData } from './products';
import { customSolutionsData } from './customSolutions';
import { servicesData } from './services';
import { portfolioData } from './portfolio';
import { blogPostsData } from './blog';

const descriptionLimit = 160;
const socialImage = `${companyConfig.domain}${companyConfig.branding.logoLight}`;

const trimDescription = (text = '') => {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (normalized.length <= descriptionLimit) return normalized;
  return `${normalized.slice(0, descriptionLimit - 1).trimEnd()}…`;
};

const page = (title, description, path, options = {}) => ({
  title,
  description: trimDescription(description),
  canonical: `${companyConfig.domain}${path}`,
  image: socialImage,
  type: options.type || 'website',
  robots: options.robots || 'index,follow',
});

const staticPages = {
  '/': page(
    'Business Software & Custom App Development',
    'Nirvoxa IT Solutions builds industry-focused business software, custom web and mobile applications, and digital products shaped around real workflows.',
    '/',
  ),
  '/products': page(
    'Industry Business Management Software',
    'Explore Nirvoxa software for workshops, inventory, laboratories, hotels, showrooms, hospitals, education, retail, and restaurants.',
    '/products',
  ),
  '/custom-software-solutions': page(
    'Custom Software Solutions',
    'Plan custom business software, web applications, mobile apps, integrations, and workflow automation with Nirvoxa IT Solutions.',
    '/custom-software-solutions',
  ),
  '/services': page(
    'Software Development & IT Services',
    'Explore software engineering, web and mobile development, product design, cloud infrastructure, and maintenance services from Nirvoxa.',
    '/services',
  ),
  '/industries': page(
    'Business Software by Industry',
    'Explore software workflows for automotive, distribution, healthcare, hospitality, showrooms, education, retail, and food businesses.',
    '/industries',
  ),
  '/solutions': page(
    'Business Software by Industry',
    'Explore software workflows for automotive, distribution, healthcare, hospitality, showrooms, education, retail, and food businesses.',
    '/industries',
  ),
  '/about': page(
    'About Nirvoxa IT Solutions',
    'Learn about Nirvoxa IT Solutions and our approach to business software, custom applications, and practical digital products.',
    '/about',
  ),
  '/careers': page(
    'Careers at Nirvoxa IT Solutions',
    'Learn about the engineering values at Nirvoxa IT Solutions and get in touch about future opportunities.',
    '/careers',
  ),
  '/portfolio': page(
    'Software Concepts & Architecture Showcase',
    'Explore concept architecture and workflow demonstrations for business management software, inventory, healthcare, and hospitality.',
    '/portfolio',
  ),
  '/blog': page(
    'Business Software & Technology Insights',
    'Practical articles from Nirvoxa on business software, custom development, workshop operations, and inventory workflows.',
    '/blog',
  ),
  '/contact': page(
    'Contact Nirvoxa IT Solutions',
    'Contact Nirvoxa IT Solutions about industry software, custom applications, integrations, or a project requirement.',
    '/contact',
  ),
  '/book-a-demo': page(
    'Request a Product Walkthrough',
    'Choose a Nirvoxa business software product and prepare a walkthrough request for your workflows and team.',
    '/book-a-demo',
  ),
  '/faq': page(
    'Frequently Asked Questions',
    'Answers about Nirvoxa products, custom software projects, implementation, hosting, support, and pricing discussions.',
    '/faq',
  ),
  '/privacy-policy': page(
    'Privacy Policy',
    'Read how the Nirvoxa website handles theme preferences, email inquiries, and third-party website requests.',
    '/privacy-policy',
  ),
  '/terms-and-conditions': page(
    'Terms and Conditions',
    'Review the website terms summary for Nirvoxa IT Solutions. Project and commercial terms are confirmed in writing.',
    '/terms-and-conditions',
  ),
  '/cookie-policy': page(
    'Cookie and Local Storage Policy',
    'Learn how this website uses browser local storage for theme preferences and loads third-party fonts.',
    '/cookie-policy',
  ),
  '/refund-cancellation-policy': page(
    'Refund and Cancellation Policy',
    'Review the draft refund and cancellation information. Commercial terms are defined in the applicable written agreement.',
    '/refund-cancellation-policy',
  ),
  '/404': page(
    'Page Not Found',
    'The page you requested could not be found. Return to Nirvoxa IT Solutions or browse products and services.',
    '/404',
    { robots: 'noindex,follow' },
  ),
};

const dynamicPages = [
  ...productsData.map((product) => ({
    path: `/products/${product.slug}`,
    metadata: page(product.name, product.description, `/products/${product.slug}`),
  })),
  ...customSolutionsData.map((solution) => ({
    path: `/custom-software-solutions/${solution.slug}`,
    metadata: page(solution.title, solution.description, `/custom-software-solutions/${solution.slug}`),
  })),
  ...servicesData.map((service) => ({
    path: `/services/${service.slug}`,
    metadata: page(service.title, service.description, `/services/${service.slug}`),
  })),
  ...portfolioData.map((item) => ({
    path: `/portfolio/${item.slug}`,
    metadata: page(item.title, item.description, `/portfolio/${item.slug}`),
  })),
  ...blogPostsData.map((post) => ({
    path: `/blog/${post.slug}`,
    metadata: page(post.title, post.summary, `/blog/${post.slug}`, { type: 'article' }),
  })),
];

export const getAllSeoRoutes = () => [
  ...Object.keys(staticPages),
  ...dynamicPages.map(({ path }) => path),
];

export const getSeoMetadata = (pathname) => {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const dynamicPage = dynamicPages.find(({ path }) => path === normalizedPath);
  if (dynamicPage) return dynamicPage.metadata;

  return staticPages[normalizedPath] || page(
    'Page Not Found',
    'The page you requested could not be found.',
    '/404',
    { robots: 'noindex,follow' },
  );
};

export const applySeoMetadata = (metadata) => {
  document.title = metadata.title.endsWith(companyConfig.name)
    ? metadata.title
    : `${metadata.title} | ${companyConfig.name}`;

  const setMeta = (selector, attributes) => {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      document.head.appendChild(element);
    }
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  };

  setMeta('meta[name="description"]', { name: 'description', content: metadata.description });
  setMeta('meta[name="robots"]', { name: 'robots', content: metadata.robots });
  setMeta('meta[property="og:type"]', { property: 'og:type', content: metadata.type });
  setMeta('meta[property="og:url"]', { property: 'og:url', content: metadata.canonical });
  setMeta('meta[property="og:title"]', { property: 'og:title', content: document.title });
  setMeta('meta[property="og:description"]', { property: 'og:description', content: metadata.description });
  setMeta('meta[property="og:image"]', { property: 'og:image', content: metadata.image });
  setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: `${companyConfig.name} logo` });
  setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' });
  setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: document.title });
  setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: metadata.description });
  setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: metadata.image });

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = metadata.canonical;
};