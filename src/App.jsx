import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';

// Pages
import { HomePage } from './pages/Home/HomePage';
import { ProductsIndexPage } from './pages/Products/ProductsIndexPage';
import { ProductDetailPage } from './pages/Products/ProductDetailPage';

import { CustomSolutionsIndexPage } from './pages/CustomSolutions/CustomSolutionsIndexPage';
import { CustomSolutionDetailPage } from './pages/CustomSolutions/CustomSolutionDetailPage';

import { ServicesIndexPage } from './pages/Services/ServicesIndexPage';
import { ServiceDetailPage } from './pages/Services/ServiceDetailPage';

import { IndustriesPage } from './pages/Solutions/IndustriesPage';
import { AboutPage } from './pages/About/AboutPage';
import { CareersPage } from './pages/Careers/CareersPage';
import { PortfolioIndexPage } from './pages/Portfolio/PortfolioIndexPage';
import { PortfolioDetailPage } from './pages/Portfolio/PortfolioDetailPage';
import { BlogIndexPage } from './pages/Blog/BlogIndexPage';
import { BlogDetailPage } from './pages/Blog/BlogDetailPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { BookDemoPage } from './pages/Demo/BookDemoPage';
import { FAQPage } from './pages/FAQ/FAQPage';

// Legal Pages
import { PrivacyPolicyPage } from './pages/Legal/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/Legal/TermsConditionsPage';
import { CookiePolicyPage } from './pages/Legal/CookiePolicyPage';
import { RefundCancellationPage } from './pages/Legal/RefundCancellationPage';

// Not Found
import { NotFoundPage } from './pages/NotFound/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* Homepage */}
        <Route index element={<HomePage />} />

        {/* Products Routes */}
        <Route path="products" element={<ProductsIndexPage />} />
        <Route path="products/:slug" element={<ProductDetailPage />} />

        {/* Custom Software Solutions Routes (Dedicated Section) */}
        <Route path="custom-software-solutions" element={<CustomSolutionsIndexPage />} />
        <Route path="custom-software-solutions/:slug" element={<CustomSolutionDetailPage />} />

        {/* Services Routes */}
        <Route path="services" element={<ServicesIndexPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />

        {/* Solutions & Industries */}
        <Route path="solutions" element={<IndustriesPage />} />
        <Route path="industries" element={<IndustriesPage />} />

        {/* Portfolio & Case Studies */}
        <Route path="portfolio" element={<PortfolioIndexPage />} />
        <Route path="portfolio/:slug" element={<PortfolioDetailPage />} />

        {/* Company & Resources */}
        <Route path="about" element={<AboutPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="blog" element={<BlogIndexPage />} />
        <Route path="blog/:slug" element={<BlogDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="book-a-demo" element={<BookDemoPage />} />
        <Route path="faq" element={<FAQPage />} />

        {/* Legal Pages */}
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-and-conditions" element={<TermsConditionsPage />} />
        <Route path="cookie-policy" element={<CookiePolicyPage />} />
        <Route path="refund-cancellation-policy" element={<RefundCancellationPage />} />

        {/* 404 & Fallback */}
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
