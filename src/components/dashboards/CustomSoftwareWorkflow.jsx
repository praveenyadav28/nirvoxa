import React, { useState } from 'react';
import {
  Layers,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Shield,
  ArrowRight,
  Server,
  Network,
  Zap,
  Code2,
} from 'lucide-react';

export const CustomSoftwareWorkflow = () => {
  const [activeLayer, setActiveLayer] = useState('all');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl text-slate-100 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-white text-base">Custom Software Architecture Blueprint</h4>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-brand-blue/20 text-brand-cyan border border-brand-cyan/30">
                Tailored Architecture
              </span>
            </div>
            <p className="text-xs text-slate-400">Modular Microservices, Scalable Cloud Data & External API Connectors</p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveLayer('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeLayer === 'all' ? 'bg-brand-blue text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Unified Flow
          </button>
          <button
            onClick={() => setActiveLayer('api')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeLayer === 'api' ? 'bg-brand-blue text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Integrations
          </button>
        </div>
      </div>

      {/* Visual Architecture Diagram */}
      <div className="space-y-4">
        {/* Tier 1: Client Interfaces */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-brand-cyan tracking-wider uppercase flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Frontend & Client Applications
            </span>
            <span className="text-[10px] text-slate-500">Responsive & Cross-Platform</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-center">
              <Globe className="w-5 h-5 text-brand-cyan mx-auto mb-1.5" />
              <div className="font-semibold text-xs text-white">React.js Web Portal</div>
              <div className="text-[11px] text-slate-400">Desktop & Tablet Dashboard</div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-center">
              <Smartphone className="w-5 h-5 text-brand-blue mx-auto mb-1.5" />
              <div className="font-semibold text-xs text-white">Flutter Mobile Apps</div>
              <div className="text-[11px] text-slate-400">iOS & Android Field Staff Apps</div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-center">
              <Shield className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
              <div className="font-semibold text-xs text-white">Admin Operations Desk</div>
              <div className="text-[11px] text-slate-400">Role-Based Executive Control</div>
            </div>
          </div>
        </div>

        {/* Connector Arrow */}
        <div className="flex justify-center -my-2">
          <div className="bg-slate-800 text-brand-cyan p-1 rounded-full border border-slate-700">
            <Zap className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Tier 2: API Gateway & Integration Middleware */}
        <div className="bg-slate-950/70 border border-brand-blue/30 rounded-xl p-4 shadow-inner">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-brand-blue tracking-wider uppercase flex items-center gap-1.5">
              <Network className="w-3.5 h-3.5" /> Secure API Gateway & Event Bus
            </span>
            <span className="text-[10px] text-brand-cyan font-mono">JWT / OAuth2 / Webhooks</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-center">
              <div className="font-semibold text-white">Rate Limiter</div>
              <span className="text-[10px] text-slate-500">DDoS Protection</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-center">
              <div className="font-semibold text-white">Auth & RBAC</div>
              <span className="text-[10px] text-slate-500">Granular Roles</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-center">
              <div className="font-semibold text-white">BullMQ Worker</div>
              <span className="text-[10px] text-slate-500">Async Jobs</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-center">
              <div className="font-semibold text-white">Audit Logger</div>
              <span className="text-[10px] text-slate-500">Immutable Trails</span>
            </div>
          </div>
        </div>

        {/* Tier 3: Core Business Services & Integrations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4">
            <span className="text-xs font-bold text-white tracking-wider uppercase flex items-center gap-1.5 mb-2">
              <Cpu className="w-3.5 h-3.5 text-brand-cyan" /> Core Business Services
            </span>
            <ul className="text-xs space-y-1.5 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                Custom Invoicing & GST Tax Calculators
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                Real-Time Multi-Warehouse Stock Ledger
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                Automated Approval & Exception Pipelines
              </li>
            </ul>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4">
            <span className="text-xs font-bold text-white tracking-wider uppercase flex items-center gap-1.5 mb-2">
              <Server className="w-3.5 h-3.5 text-brand-blue" /> External System Connectors
            </span>
            <ul className="text-xs space-y-1.5 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Payment Gateways (Razorpay / Stripe / UPI)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Tally / ERP / Accounting Synchronization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                WhatsApp Business API & SMS Gateways
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <Code2 className="w-3.5 h-3.5 text-brand-blue" />
          Built with clean modular architecture, API-first design & enterprise database integrity
        </span>
        <span className="font-mono text-slate-400">Architecture Concept</span>
      </div>
    </div>
  );
};
