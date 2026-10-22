import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Wrench,
  Boxes,
  FlaskConical,
  Building2,
  Car,
  Stethoscope,
  Briefcase,
  Layers,
  Globe,
  Smartphone,
  Cpu,
  RefreshCw,
  Code2,
  HelpCircle,
  BookOpen,
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { productsData } from '../../config/products';
import { customSolutionsData } from '../../config/customSolutions';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Mobile submenu expansion state
  const [mobileExpanded, setMobileExpanded] = useState({
    products: false,
    customSolutions: false,
    services: false,
    company: false,
  });

  const toggleMobileSubmenu = (menu) => {
    setMobileExpanded((prev) => ({
      products: menu === 'products' && !prev.products,
      customSolutions: menu === 'customSolutions' && !prev.customSolutions,
      services: menu === 'services' && !prev.services,
      company: false,
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileExpanded({
      products: false,
      customSolutions: false,
      services: false,
      company: false,
    });
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 ${mobileMenuOpen ? 'z-50' : 'z-40'} transition-all duration-300 ${scrolled
          ? 'bg-white/95 dark:bg-brand-navy-deep/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-brand-navy-border py-3.5'
          : 'bg-white/85 dark:bg-brand-navy-deep/85 backdrop-blur-sm border-b border-slate-200/40 dark:border-slate-800/60 py-4.5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Logo className="h-9 sm:h-10" showTagline={false} />
            </div>

            {/* Desktop Navigation: Spacious & Clean 5 Menu Items */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold">
              {/* 1. Products Dropdown (SaaS Products) */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 py-1 transition-colors ${activeDropdown === 'products' || location.pathname.startsWith('/products')
                    ? 'text-brand-blue dark:text-brand-cyan'
                    : 'text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan'
                    }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {/* Products Mega Menu */}
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[740px] mt-2 bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 animate-fadeIn">
                    <div className="col-span-8">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-brand-navy-border">
                        <span className="text-xs font-bold tracking-wider uppercase text-brand-blue dark:text-brand-cyan">
                          Ready-to-Deploy SaaS Software
                        </span>
                        <Link
                          to="/products"
                          className="text-xs text-slate-500 hover:text-brand-blue dark:hover:text-brand-cyan flex items-center gap-1 font-semibold"
                        >
                          Browse All 10 Products <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {productsData.slice(0, 6).map((p) => (
                          <Link
                            key={p.id}
                            to={`/products/${p.slug}`}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-brand-navy-surface transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                              {p.icon === 'Wrench' && <Wrench className="w-4 h-4" />}
                              {p.icon === 'Boxes' && <Boxes className="w-4 h-4" />}
                              {p.icon === 'FlaskConical' && <FlaskConical className="w-4 h-4" />}
                              {p.icon === 'Building2' && <Building2 className="w-4 h-4" />}
                              {p.icon === 'Car' && <Car className="w-4 h-4" />}
                              {p.icon === 'Stethoscope' && <Stethoscope className="w-4 h-4" />}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan">
                                {p.shortName}
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                                {p.tagline}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Demo Card */}
                    <div className="col-span-4 bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-brand-navy-surface dark:to-slate-900 p-5 rounded-xl border border-slate-100 dark:border-brand-navy-border flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-blue/10 dark:bg-brand-cyan/20 text-brand-blue dark:text-brand-cyan">
                          Interactive Demo
                        </span>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-2.5">
                          Test Drive the Software
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          Explore job cards, inventory tracking, and billing dashboards in real-time.
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800">
                        <Button
                          size="sm"
                          variant="glow"
                          className="w-full"
                          to="/book-a-demo"
                        >
                          Request Demo Tour
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Custom Software Solutions (Distinct Menu for Bespoke Dev) */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('customSolutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 py-1 transition-colors ${activeDropdown === 'customSolutions' || location.pathname.startsWith('/custom-software-solutions')
                    ? 'text-brand-blue dark:text-brand-cyan'
                    : 'text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan'
                    }`}
                >
                  <span>Custom Solutions</span>
                  <span className="text-[10px] bg-brand-cyan/20 text-brand-cyan px-1.5 py-0.2 rounded font-bold uppercase">
                    Bespoke
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'customSolutions' ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {activeDropdown === 'customSolutions' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] mt-2 bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 animate-fadeIn">
                    <div className="col-span-8">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-brand-navy-border">
                        <span className="text-xs font-bold tracking-wider uppercase text-brand-cyan">
                          Tailored Software Built Around Your Business
                        </span>
                        <Link
                          to="/custom-software-solutions"
                          className="text-xs text-slate-500 hover:text-brand-cyan flex items-center gap-1 font-semibold"
                        >
                          All Custom Capabilities <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {customSolutionsData.slice(0, 6).map((item) => (
                          <Link
                            key={item.id}
                            to={`/custom-software-solutions/${item.slug}`}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-brand-navy-surface transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-brand-cyan flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                              {item.icon === 'Building' && <Briefcase className="w-4 h-4" />}
                              {item.icon === 'Briefcase' && <Briefcase className="w-4 h-4" />}
                              {item.icon === 'Globe' && <Globe className="w-4 h-4" />}
                              {item.icon === 'Smartphone' && <Smartphone className="w-4 h-4" />}
                              {item.icon === 'Layers' && <Layers className="w-4 h-4" />}
                              {item.icon === 'Network' && <Cpu className="w-4 h-4" />}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan">
                                {item.title}
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                                {item.tagline}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-4 bg-gradient-to-br from-brand-navy-surface to-slate-950 p-5 rounded-xl border border-brand-navy-border flex flex-col justify-between text-white">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-cyan/20 text-brand-cyan">
                          Tailor-Made
                        </span>
                        <h4 className="font-bold text-white text-sm mt-2">
                          Your Process Is Unique
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          Replace spreadsheets and rigid tools with purpose-built systems.
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800">
                        <Button
                          size="sm"
                          to="/custom-software-solutions"
                          variant="glow"
                          className="w-full"
                        >
                          Discuss Custom Project
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 py-1 transition-colors ${activeDropdown === 'services' || location.pathname.startsWith('/services')
                    ? 'text-brand-blue dark:text-brand-cyan'
                    : 'text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan'
                    }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 w-64 mt-2 bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl shadow-xl p-3 animate-fadeIn">
                    <Link
                      to="/services"
                      className="block px-3 py-2 text-xs font-bold text-brand-blue dark:text-brand-cyan hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg mb-1"
                    >
                      All Services Overview →
                    </Link>
                    <div className="border-t border-slate-100 dark:border-brand-navy-border my-1" />
                    <Link
                      to="/services/software-development"
                      className="block px-3 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg"
                    >
                      Custom Software Engineering
                    </Link>
                    <Link
                      to="/services/web-development"
                      className="block px-3 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg"
                    >
                      Web Applications (SPAs)
                    </Link>
                    <Link
                      to="/services/flutter-development"
                      className="block px-3 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg"
                    >
                      Flutter Mobile App Dev
                    </Link>
                    <Link
                      to="/services/ui-ux-design"
                      className="block px-3 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg"
                    >
                      UI/UX Design & Prototyping
                    </Link>
                    <Link
                      to="/services/cloud-devops"
                      className="block px-3 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg"
                    >
                      Cloud & DevOps
                    </Link>
                    <Link
                      to="/services/maintenance-support"
                      className="block px-3 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg"
                    >
                      SLA Maintenance & Support
                    </Link>
                  </div>
                )}
              </div>

              {/* 4. Company & Resources Combined Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 py-1 transition-colors ${activeDropdown === 'company' ||
                    location.pathname === '/about' ||
                    location.pathname === '/industries' ||
                    location.pathname === '/portfolio' ||
                    location.pathname === '/blog' ||
                    location.pathname === '/faq'
                    ? 'text-brand-blue dark:text-brand-cyan'
                    : 'text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan'
                    }`}
                >
                  <span>Company</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 w-60 mt-2 bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl shadow-xl p-3 animate-fadeIn">
                    <Link
                      to="/about"
                      className="block px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg"
                    >
                      About Nirvoxa
                    </Link>
                    <Link
                      to="/industries"
                      className="block px-3 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg"
                    >
                      Industries Served
                    </Link>
                    <Link
                      to="/portfolio"
                      className="block px-3 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg"
                    >
                      Architecture Showcases
                    </Link>
                    <Link
                      to="/blog"
                      className="block px-3 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg"
                    >
                      Tech & SaaS Blog
                    </Link>
                    <Link
                      to="/faq"
                      className="block px-3 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg"
                    >
                      Frequently Asked Questions
                    </Link>
                    <Link
                      to="/careers"
                      className="block px-3 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-brand-navy-surface rounded-lg"
                    >
                      Careers & Culture
                    </Link>
                  </div>
                )}
              </div>

              {/* 5. Contact */}
              <Link
                to="/contact"
                className={`py-1 transition-colors ${location.pathname === '/contact'
                  ? 'text-brand-blue dark:text-brand-cyan'
                  : 'text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan'
                  }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Area: Uncluttered & Spacious */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-brand-navy-card transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              {/* Primary Action Button */}
              <Button
                size="sm"
                variant="glow"
                to="/book-a-demo"
                className="hidden sm:inline-flex font-bold px-4 py-2"
              >
                Book a Demo
              </Button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-brand-navy-border text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-brand-navy-card transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

      </header>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-slate-950/40"
          />
          <div
            id="mobile-navigation"
            className="absolute right-0 top-12 bottom-0 flex w-[min(88vw,24rem)] flex-col border-l border-slate-200 bg-white p-5 pt-5 shadow-2xl animate-fadeIn dark:border-brand-navy-border dark:bg-brand-navy-deep sm:top-16 sm:p-6"
          >
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-brand-navy-border">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue dark:bg-brand-cyan/10 dark:text-brand-cyan">
                <Layers className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-blue dark:text-brand-cyan">Explore</p>
                <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">Products, services & company</p>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-4">
              <div className="flex flex-col gap-3 pb-2">
                {/* Products Accordion */}
                <div className={`rounded-xl border p-2 transition-colors ${mobileExpanded.products ? 'border-brand-blue/40 bg-brand-blue/[0.04] dark:border-brand-cyan/30 dark:bg-brand-cyan/[0.04]' : 'border-slate-200 dark:border-brand-navy-border'}`}>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('products')}
                    aria-expanded={mobileExpanded.products}
                    aria-controls="mobile-products-links"
                    className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-left text-sm font-bold text-slate-900 dark:text-white"
                  >
                    <span className="flex items-center gap-2.5"><Boxes className="h-4 w-4 text-brand-blue dark:text-brand-cyan" /> SaaS Products (10)</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileExpanded.products ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {mobileExpanded.products && (
                    <div id="mobile-products-links" className="mt-2 space-y-1 border-t border-slate-200 px-1 pt-2 dark:border-brand-navy-border">
                      <Link
                        to="/products"
                        className="flex min-h-11 items-center justify-between rounded-lg bg-brand-blue/10 px-3 py-2.5 text-sm font-bold text-brand-blue transition-colors hover:bg-brand-blue/15 dark:bg-brand-cyan/10 dark:text-brand-cyan"
                      >
                        View All Products Hub →
                        <ChevronRight className="h-4 w-4 shrink-0" />
                      </Link>
                      {productsData.map((p) => (
                        <Link
                          key={p.id}
                          to={`/products/${p.slug}`}
                          className="flex min-h-11 items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm leading-5 text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-blue dark:text-slate-300 dark:hover:bg-brand-navy-card dark:hover:text-brand-cyan"
                        >
                          {p.name}
                          <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Custom Solutions Accordion */}
                <div className={`rounded-xl border p-2 transition-colors ${mobileExpanded.customSolutions ? 'border-brand-cyan/40 bg-brand-cyan/[0.04]' : 'border-slate-200 dark:border-brand-navy-border'}`}>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('customSolutions')}
                    aria-expanded={mobileExpanded.customSolutions}
                    aria-controls="mobile-custom-links"
                    className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-left text-sm font-bold text-brand-cyan"
                  >
                    <span className="flex items-center gap-2.5"><Code2 className="h-4 w-4" /> Custom Software Solutions</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileExpanded.customSolutions ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {mobileExpanded.customSolutions && (
                    <div id="mobile-custom-links" className="mt-2 space-y-1 border-t border-slate-200 px-1 pt-2 dark:border-brand-navy-border">
                      <Link
                        to="/custom-software-solutions"
                        className="flex min-h-11 items-center justify-between rounded-lg bg-brand-cyan/10 px-3 py-2.5 text-sm font-bold text-brand-cyan transition-colors hover:bg-brand-cyan/15"
                      >
                        All Custom Capabilities →
                        <ChevronRight className="h-4 w-4 shrink-0" />
                      </Link>
                      {customSolutionsData.map((cs) => (
                        <Link
                          key={cs.id}
                          to={`/custom-software-solutions/${cs.slug}`}
                          className="flex min-h-11 items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm leading-5 text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-blue dark:text-slate-300 dark:hover:bg-brand-navy-card dark:hover:text-brand-cyan"
                        >
                          {cs.title}
                          <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Services Accordion */}
                <div className={`rounded-xl border p-2 transition-colors ${mobileExpanded.services ? 'border-brand-blue/40 bg-brand-blue/[0.04] dark:border-brand-cyan/30 dark:bg-brand-cyan/[0.04]' : 'border-slate-200 dark:border-brand-navy-border'}`}>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('services')}
                    aria-expanded={mobileExpanded.services}
                    aria-controls="mobile-services-links"
                    className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-left text-sm font-bold text-slate-900 dark:text-white"
                  >
                    <span className="flex items-center gap-2.5"><Briefcase className="h-4 w-4 text-brand-blue dark:text-brand-cyan" /> Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileExpanded.services ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {mobileExpanded.services && (
                    <div id="mobile-services-links" className="mt-2 space-y-1 border-t border-slate-200 px-1 pt-2 dark:border-brand-navy-border">
                      <Link to="/services" className="flex min-h-11 items-center justify-between rounded-lg bg-brand-blue/10 px-3 py-2.5 text-sm font-bold text-brand-blue transition-colors hover:bg-brand-blue/15 dark:bg-brand-cyan/10 dark:text-brand-cyan">All Services <ChevronRight className="h-4 w-4 shrink-0" /></Link>
                      <Link to="/services/software-development" className="flex min-h-11 items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-brand-navy-card">Software Development <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" /></Link>
                      <Link to="/services/web-development" className="flex min-h-11 items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-brand-navy-card">Web Development <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" /></Link>
                      <Link to="/services/flutter-development" className="flex min-h-11 items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-brand-navy-card">Flutter Mobile Apps <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" /></Link>
                      <Link to="/services/ui-ux-design" className="flex min-h-11 items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-brand-navy-card">UI/UX Design <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" /></Link>
                      <Link to="/services/cloud-devops" className="flex min-h-11 items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-brand-navy-card">Cloud & DevOps <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" /></Link>
                    </div>
                  )}
                </div>

                {/* Direct Links */}
                <div className="border-t border-slate-200 pt-3 dark:border-brand-navy-border">
                  <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Company</p>
                  <div className="grid grid-cols-2 gap-1">
                    <Link to="/about" className="rounded-lg px-2 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-brand-navy-card">About Us</Link>
                    <Link to="/industries" className="rounded-lg px-2 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-brand-navy-card">Industries</Link>
                    <Link to="/portfolio" className="rounded-lg px-2 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-brand-navy-card">Showcases</Link>
                    <Link to="/blog" className="rounded-lg px-2 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-brand-navy-card">Blog</Link>
                    <Link to="/faq" className="rounded-lg px-2 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-brand-navy-card">FAQ</Link>
                    <Link to="/contact" className="rounded-lg px-2 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-brand-navy-card">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 dark:border-brand-navy-border">
              <Button variant="glow" className="w-full" to="/book-a-demo">
                Book a Product Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
