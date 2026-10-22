import React, { useState } from 'react';
import {
  Car,
  FileText,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Users,
} from 'lucide-react';

export const ShowroomDashboard = () => {
  const [activeTab, setActiveTab] = useState('pipeline');

  const leads = [
    {
      id: 'LEAD-1042',
      customer: 'Vikrant Saxena',
      model: 'Mahindra Scorpio-N Z8L Diesel 4x4 (Black)',
      stage: 'Test Drive Scheduled',
      time: 'Today 4:30 PM',
      advisor: 'Gaurav Mehta',
      statusColor: 'bg-brand-blue/20 text-brand-cyan border-brand-blue/30',
      budget: '₹26.5 Lakhs',
    },
    {
      id: 'LEAD-1039',
      customer: 'Pooja Iyer',
      model: 'Hyundai Verna 1.5 Turbo DCT (White)',
      stage: 'Quotation Shared',
      time: 'Bank Finance Pending',
      advisor: 'Neha Sharma',
      statusColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      budget: '₹19.2 Lakhs',
    },
    {
      id: 'LEAD-1033',
      customer: 'Rajesh Agarwal',
      model: 'Toyota Innova Hycross ZX (Bronze)',
      stage: 'Booking Confirmed (Chassis Allotted)',
      time: 'Delivery on Friday',
      advisor: 'Gaurav Mehta',
      statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      budget: '₹34.8 Lakhs',
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl text-slate-100 font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold">
            <Car className="w-5 h-5 text-brand-cyan" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-white text-base">Showroom Pro Dealership Desk</h4>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-brand-blue/20 text-brand-cyan border border-brand-cyan/30">
                Interactive Preview
              </span>
            </div>
            <p className="text-xs text-slate-400">VIN Yard Stock, Test Drive Scheduling & On-Road Quotations</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'pipeline' ? 'bg-brand-blue text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Hot Lead Pipeline (3)
          </button>
          <button
            onClick={() => setActiveTab('quote')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'quote' ? 'bg-brand-blue text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sample On-Road Quote
          </button>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Yard Physical Stock</span>
          <div className="text-xl font-extrabold text-white mt-1">36 Vehicles</div>
          <span className="text-[10px] text-brand-cyan">Chassis/VIN Mapped</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Test Drives Today</span>
          <div className="text-xl font-extrabold text-emerald-400 mt-1">9 Scheduled</div>
          <span className="text-[10px] text-emerald-400 font-medium">Digital DL Verified</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Bookings Month-to-Date</span>
          <div className="text-xl font-extrabold text-brand-cyan mt-1">28 Units</div>
          <span className="text-[10px] text-slate-400">Target: 35 Units</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Pipeline Pipeline Value</span>
          <div className="text-xl font-extrabold text-white mt-1">₹4.2 Cr</div>
          <span className="text-[10px] text-slate-400">Active Opportunities</span>
        </div>
      </div>

      {activeTab === 'pipeline' ? (
        <div className="space-y-3">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-xl p-4 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-200">
                    {lead.id}
                  </span>
                  <span className="font-semibold text-sm text-white">{lead.customer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${lead.statusColor}`}>
                    {lead.stage}
                  </span>
                  <span className="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded">
                    {lead.budget}
                  </span>
                </div>
              </div>

              <div className="text-xs text-brand-cyan font-medium mb-2">{lead.model}</div>

              <div className="flex justify-between items-center text-[11px] text-slate-400 pt-2 border-t border-slate-850">
                <span className="flex items-center gap-1 text-slate-400">
                  <Users className="w-3.5 h-3.5 text-slate-500" /> Consultant: {lead.advisor}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" /> {lead.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Quotation Builder Snapshot */
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-xs text-slate-300">
          <div className="flex justify-between items-start border-b border-slate-800 pb-3 mb-3">
            <div>
              <h5 className="font-bold text-white text-sm">OFFICIAL ON-ROAD PRICE BREAKDOWN</h5>
              <p className="text-[11px] text-slate-400">Vehicle: Mahindra Scorpio-N Z8L Diesel 4x4 (Black)</p>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-brand-blue/20 text-brand-cyan border border-brand-cyan/30">
              QUOTE #QU-2026-901
            </span>
          </div>

          <div className="space-y-2 mb-3">
            <div className="flex justify-between py-1 border-b border-slate-850">
              <span className="text-slate-400">Ex-Showroom Price</span>
              <span className="text-white font-semibold">₹21,85,000</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-850">
              <span className="text-slate-400">RTO Registration & Road Tax</span>
              <span className="text-white font-semibold">₹2,84,050</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-850">
              <span className="text-slate-400">Comprehensive Zero-Dep Insurance (1+3 Yrs)</span>
              <span className="text-white font-semibold">₹92,400</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-850">
              <span className="text-slate-400">TCS (Tax Collected at Source 1%)</span>
              <span className="text-white font-semibold">₹21,850</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-850">
              <span className="text-slate-400">Essential Accessory Kit & Fastag</span>
              <span className="text-white font-semibold">₹28,500</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-sm font-bold">
            <span className="text-slate-400 text-xs">Total On-Road Estimate</span>
            <span className="text-emerald-400 text-base">₹26,11,800</span>
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
          Supports yard inventory aging, loan EMI calculators & trade-in valuations
        </span>
        <span className="font-mono text-slate-400">Demonstration Interface</span>
      </div>
    </div>
  );
};
