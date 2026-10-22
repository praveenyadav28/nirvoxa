import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Globe,
  Smartphone,
  Layers,
  Cpu,
  RefreshCw,
  Building,
  Briefcase,
  Network,
  Zap,
  Check,
  ChevronRight,
  Database,
  Server,
  Terminal,
  HelpCircle,
  Workflow,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { customSolutionsData } from '../../config/customSolutions';
import { CustomSoftwareWorkflow } from '../../components/dashboards/CustomSoftwareWorkflow';
import { ProjectInquiryForm } from '../../components/forms/ProjectInquiryForm';
import { portfolioData } from '../../config/portfolio';

export const CustomSolutionsIndexPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const techStack = [
    { category: 'Frontend', items: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5 / CSS3'] },
    { category: 'Mobile', items: ['Flutter', 'Dart', 'React Native', 'Android (Java/Kotlin)', 'iOS (Swift)'] },
    { category: 'Backend & APIs', items: ['Node.js', 'Express.js', 'Python', 'RESTful APIs', 'GraphQL', 'Webhooks'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis Caching', 'SQLite'] },
    { category: 'Cloud & DevOps', items: ['AWS Cloud', 'Docker Containers', 'CI/CD Pipelines', 'Linux VPS', 'Automated Backups'] },
    { category: 'Business Integrations', items: ['Tally / ERP Sync', 'Razorpay / Stripe', 'WhatsApp Business API', 'GST Invoicing Portals'] },
  ];

  const engagementModels = [
    {
      title: 'Fixed-Scope Project',
      tagline: 'Defined requirements, milestones, and a scoped budget',
      desc: 'Useful for well-defined software modules, MVPs, and specific integration tools. Scope, acceptance criteria, schedule, and commercial terms are documented for approval before work begins.',
      features: ['Written Scope', 'Agreed Milestones', 'Acceptance Criteria', 'Support Terms Defined Upfront'],
    },
    {
      title: 'Milestone-Based Development',
      tagline: 'Iterative 2-week sprints with adaptive scope evolution',
      desc: 'Ideal for complete business management systems and multi-module software platforms where features mature progressively through real operational feedback.',
      features: ['Bi-Weekly Sprint Demos', 'Flexible Backlog Re-prioritization', 'Continuous Staging Deployment', 'Phased Milestone Invoicing'],
    },
    {
      title: 'Dedicated Engineering Retainer',
      tagline: 'Continuous software evolution, maintenance & dedicated capacity',
      desc: 'Designed for enterprises requiring an ongoing engineering team to continuously develop new capabilities, optimize performance, and maintain mission-critical uptime.',
      features: ['Dedicated Technical Leads', 'Strict SLA Response Guarantees', 'Continuous Security Audits', 'Direct Slack / Teams Integration'],
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-4 sm:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Custom Software Solutions', to: '/custom-software-solutions' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6">
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>Bespoke Engineering & Tailored Business Systems</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Software Built Around{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-brand-blue">
                  Your Business.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Every business works differently. Nirvoxa designs and develops custom software solutions tailored to your workflows, business goals, and growth plans — helping you streamline operations, connect systems, and turn complex processes into simpler digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <Button
                  size="lg"
                  href="#project-inquiry"
                  variant="glow"
                  icon={ArrowRight}
                  className="w-full sm:w-auto"
                >
                  Discuss Your Project
                </Button>
                <Button
                  size="lg"
                  href="#capabilities"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Explore Our Capabilities
                </Button>
              </div>

              {/* Guarantees Strip */}
              <div className="pt-6 border-t border-slate-200 dark:border-brand-navy-border/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Workflow</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Mapped to your needs</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Agreed IP</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Source Code Terms</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Hosting</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Agreed per project</div>
                </div>
              </div>
            </div>

            {/* Hero Right: Live Architecture Diagram Preview */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-3xl blur-xl opacity-20 dark:opacity-30" />
                <div className="relative z-10">
                  <CustomSoftwareWorkflow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Go Custom?"
          title="Your Business Is Unique."
          highlightText="Your Software Should Be Too."
          subtitle="Off-the-shelf software forces your staff to change how they work to fit someone else's template. We build the software around your authentic process."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Tailored Business Workflows',
              desc: 'Every approval rule, job step, and report matches your real-world operating procedures with zero unnecessary compromise.',
              icon: Workflow,
            },
            {
              title: 'Eliminate Disconnected Tools',
              desc: 'Replace five different uncoordinated tools, manual spreadsheets, and paper registers with one unified, searchable database.',
              icon: Layers,
            },
            {
              title: 'Integration With Existing Systems',
              desc: 'Connect seamlessly with Tally, payment gateways, WhatsApp Business, SMS gateways, barcode hardware, and legacy ERPs.',
              icon: Network,
            },
            {
              title: 'Scalable Architecture',
              desc: 'Built on modular microservices and clean relational databases that accommodate multi-branch expansion effortlessly.',
              icon: Server,
            },
            {
              title: 'Granular Role Governance',
              desc: 'Ensure staff only see data relevant to their role with strict row-level security and tamper-evident audit trails.',
              icon: ShieldCheck,
            },
            {
              title: 'Actionable Executive Analytics',
              desc: 'Custom KPI dashboards designed specifically around the metrics your management team looks at every morning.',
              icon: Cpu,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 shadow-sm hover:border-brand-cyan/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-brand-cyan/20 text-cyan-600 dark:text-brand-cyan flex items-center justify-center font-bold mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CAPABILITIES CATALOG (8 DEDICATED OFFERINGS) */}
      <section id="capabilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Bespoke Capabilities"
          title="Custom Software Offerings"
          highlightText="Engineered for Growth"
          subtitle="Explore the dedicated solutions we architect and deliver for scaling enterprises."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customSolutionsData.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-brand-cyan/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-brand-cyan flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    {item.icon === 'Building' && <Building className="w-5 h-5" />}
                    {item.icon === 'Briefcase' && <Briefcase className="w-5 h-5" />}
                    {item.icon === 'Globe' && <Globe className="w-5 h-5" />}
                    {item.icon === 'Smartphone' && <Smartphone className="w-5 h-5" />}
                    {item.icon === 'Layers' && <Layers className="w-5 h-5" />}
                    {item.icon === 'Network' && <Network className="w-5 h-5" />}
                    {item.icon === 'Cpu' && <Cpu className="w-5 h-5" />}
                    {item.icon === 'RefreshCw' && <RefreshCw className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-brand-navy-border/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Key Features:
                  </span>
                  <div className="space-y-1 text-[11px] text-slate-700 dark:text-slate-300">
                    {item.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 line-clamp-1">
                        <Check className="w-3 h-3 text-brand-cyan shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-brand-navy-border flex items-center justify-between">
                <Link
                  to={`/custom-software-solutions/${item.slug}`}
                  className="text-xs font-bold text-brand-cyan hover:underline flex items-center gap-1"
                >
                  Explore Solution <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="text-xs text-slate-500 hover:text-white"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR SEVEN-STAGE DEVELOPMENT METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Proven Delivery Process"
          title="From Initial Consultation"
          highlightText="To Long-Term Support"
          subtitle="A disciplined 7-stage software development lifecycle ensuring absolute transparency, predictable delivery, and zero unexpected surprises."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Discovery & Consultation', desc: 'Understand business challenges, user journeys, existing systems, and measurable success criteria.' },
            { step: '02', title: 'Requirement Architecture', desc: 'Document comprehensive workflow specs, database schemas, role matrices, and security models.' },
            { step: '03', title: 'UI/UX Design & Prototyping', desc: 'Design clickable, responsive Figma prototypes to validate usability before code is written.' },
            { step: '04', title: 'Iterative Engineering', desc: 'Build the agreed modules in bi-weekly agile sprints with staging previews after each milestone.' },
            { step: '05', title: 'Rigorous Quality Assurance', desc: 'Automated and manual testing of business logic, permissions, edge cases, and performance.' },
            { step: '06', title: 'Deployment & Staff Training', desc: 'Assisted cloud rollout, zero data-loss migration, and recorded onboarding training sessions.' },
            { step: '07', title: 'SLA Maintenance & Support', desc: 'Ongoing technical retainers, emergency monitoring, security patches, and periodic enhancements.' },
          ].map((s) => (
            <div
              key={s.step}
              className="bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-5 rounded-2xl relative"
            >
              <span className="text-3xl font-extrabold text-brand-cyan/20 font-mono block mb-2">
                {s.step}
              </span>
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                {s.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TECHNOLOGY CAPABILITY MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Capabilities"
          title="Modern, Enterprise-Grade"
          highlightText="Technology Stack"
          subtitle="We select battle-tested, high-performance technologies that are reliable, well-documented, and easy to maintain."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.category}
              className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 shadow-sm"
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-cyan mb-3">
                {tech.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. COMPARISON: TAILORED SOLUTION VS EXISTING SAAS PRODUCT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-3xl p-8 sm:p-12 shadow-xl">
          <SectionHeading
            badge="Strategic Decision Guide"
            title="Tailored Software vs Existing SaaS Product"
            highlightText="Which Is Right For You?"
            subtitle="Understand the trade-offs between deploying our ready-made SaaS platform vs commissioning bespoke custom development."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-brand-blue dark:text-brand-cyan">
                  Option 1
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-2">
                  Ready-Made Nirvoxa SaaS
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Best when your business can comfortably adopt established industry best practices.
                </p>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Fast go-live in 3 to 10 days</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Predictable subscription pricing</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Managed hosting & automatic updates</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Zero custom development risk</li>
                </ul>
              </div>
              <div className="pt-6">
                <Button to="/products" variant="secondary" className="w-full">
                  Explore SaaS Products
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-b from-brand-cyan/10 to-brand-blue/10 dark:from-brand-cyan/20 dark:to-brand-navy-surface border-2 border-brand-cyan p-6 rounded-2xl flex flex-col justify-between shadow-lg relative">
              <div className="absolute -top-3 right-6 bg-brand-cyan text-brand-navy font-bold text-[10px] uppercase px-3 py-0.5 rounded-full">
                Most Popular for Growth
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-cyan/20 text-brand-cyan">
                  Option 2
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-2">
                  Customized SaaS Implementation
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Deploy a mature Nirvoxa SaaS core with custom API connectors, unique invoice formats, or specialized mobile tools.
                </p>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-cyan" /> Proven core platform stability</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-cyan" /> Tailored custom integrations (Tally / ERP)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-cyan" /> Lower cost than starting from scratch</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-cyan" /> Rapid 3 to 6-week delivery window</li>
                </ul>
              </div>
              <div className="pt-6">
                <Button href="#project-inquiry" variant="glow" className="w-full">
                  Request Hybrid Estimate
                </Button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  Option 3
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-2">
                  Custom Software Built to Scope
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  For novel business models, proprietary workflows, and organizations requiring dedicated source code ownership.
                </p>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Fully custom data schemas & UX</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Agreed intellectual property ownership</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Dedicated on-premise or cloud VPS hosting</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Built exactly to your specification</li>
                </ul>
              </div>
              <div className="pt-6">
                <Button href="#project-inquiry" variant="secondary" className="w-full">
                  Scope Custom Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMMERCIAL ENGAGEMENT MODELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Transparent Engagement"
          title="Predictable Commercial Models"
          highlightText="Without Hidden Surprises"
          subtitle="Choose the engagement framework that best matches your governance model, budget cycle, and operational priorities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementModels.map((em, i) => (
            <div
              key={i}
              className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {em.title}
                </h4>
                <div className="text-xs font-semibold text-brand-cyan mb-3">
                  {em.tagline}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {em.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-brand-navy-border/60">
                  {em.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Button href="#project-inquiry" variant="secondary" size="sm" className="w-full">
                  Request {em.title} Scope
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. INTERACTIVE PROJECT REQUIREMENT FORM EMBEDDED */}
      <section id="project-inquiry" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive Discovery"
          title="Tell Us What You Want To Build"
          highlightText="Get a Realistic Technical Estimate"
          subtitle="Complete the 4-step project inquiry form below. Our lead software architect will review your operational requirements and schedule a discovery consultation."
        />

        <ProjectInquiryForm />
      </section>

      {/* 9. FAQ FOR CUSTOM SOFTWARE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Custom Software FAQs"
          title="Frequently Asked Questions on"
          highlightText="Bespoke Development"
          subtitle="Answers to common questions regarding source code rights, maintenance, deployment, and data migration."
        />

        <div className="space-y-3">
          {[
            {
              q: 'Can you customize an existing Nirvoxa SaaS product?',
              a: 'Yes. A significant portion of our clients adopt a hybrid model: we take our mature SaaS foundation (such as Workshop OS or Inventory IQ) and build custom modules, specialized API webhooks to their accounting software, or distinct mobile interfaces for their field staff.',
            },
            {
              q: 'Who owns the intellectual property and source code?',
              a: 'For custom software development engagements, the intellectual property rights and code licensing terms are explicitly documented in your Master Services Agreement (MSA). You typically receive full ownership of custom-developed code and assets upon final milestone completion.',
            },
            {
              q: 'Can you migrate data from spreadsheets or existing legacy software?',
              a: 'Yes. Data migration is a standard part of our delivery lifecycle. We provide structured import templates, sanitize duplicate records, and run validation scripts to verify data integrity before cutting over.',
            },
            {
              q: 'How are ongoing hosting, security patches, and maintenance handled?',
              a: 'You can choose between hosting on Nirvoxa-managed cloud infrastructure (AWS/DigitalOcean) or deploying on your own corporate private cloud or on-premise servers. We offer SLA-backed monthly retainers for uptime monitoring, library updates, and ongoing enhancements.',
            },
            {
              q: 'Can you develop both responsive web dashboards and mobile apps?',
              a: 'Yes. Our team develops cross-platform mobile apps for iOS and Android using Google Flutter and React Native, perfectly synchronized with backend React web administration portals.',
            },
          ].map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-brand-cyan transition-transform duration-200 ${isOpen ? 'rotate-90' : ''
                      }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-brand-navy-border/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-navy-surface via-slate-900 to-brand-navy-deep p-8 sm:p-14 text-center text-white border border-brand-navy-border shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Have a Business Challenge? Let's Build the Right Solution.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tell us how your business works, where the bottlenecks are, and what you want to improve. Our team can help define a practical software solution for your requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Button
                size="lg"
                href="#project-inquiry"
                variant="glow"
              >
                Discuss Your Project
              </Button>
              <Button
                size="lg"
                to="/contact"
                variant="secondary"
              >
                Book an Architecture Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
