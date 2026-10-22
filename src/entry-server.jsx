import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { getAllSeoRoutes, getSeoMetadata } from './config/seo';

export const routes = getAllSeoRoutes();

export const renderRoute = (route) => ({
  markup: renderToString(
    <StaticRouter location={route}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StaticRouter>,
  ),
  metadata: getSeoMetadata(route),
});