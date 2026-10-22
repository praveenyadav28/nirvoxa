import React, { useState } from 'react';
import {
  Wrench,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  User,
  Car,
  DollarSign,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

export const WorkshopDashboard = () => {
  const [activeTab, setActiveTab] = useState('bays');

  const bays = [
    {
      id: 'BAY-01',
      vehicle: 'Honda City i-VTEC (MH 02 CZ 4412)',
      advisor: 'Rahul Sharma',
      mechanic: 'Vikram Singh',
      task: 'Periodic Major 40,000 KM Service & Brake Pad Replacement',
      status: 'In Progress',
      progress: 68,
      statusColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      estimate: '₹8,450',
      timeElapsed: '1h 45m',
    },
    {
      id: 'BAY-02',
      vehicle: 'Hyundai Creta 1.5 SX (DL 08 BK 9021)',
      advisor: 'Amit Verma',
      mechanic: 'Sunil Kumar',
      task: 'AC Condenser Cleaning & Clutch Assembly Overhaul',
      status: 'Awaiting Spares',
      progress: 40,
      statusColor: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
      estimate: '₹14,200',
      timeElapsed: '2h 10m',
    },
    {
      id: 'BAY-03',
      vehicle: 'Tata Nexon EV (KA 01 MR 7810)',
      advisor: 'Rahul Sharma',
      mechanic: 'Deepak Patel',
      task: 'General Electrical Diagnostic & Wheel Alignment',
      status: 'Quality Check',
      progress: 95,
      statusColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      estimate: '₹3,200',
      timeElapsed: '45m',
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl text-slate-100 font-sans">
      {/* Top Bar with Demo Identifier */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold">
            <Wrench className="w-5 h-5 text-brand-cyan" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-white text-base">Workshop Operating System</h4>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-brand-blue/20 text-brand-cyan border border-brand-cyan/30">
                Live Interactive Mockup
              </span>
            </div>
            <p className="text-xs text-slate-400">Bay Operations & Digital Job Card Control Room</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('bays')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'bays' ? 'bg-brand-blue text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
          >
            Active Service Bays (3)
          </button>
          <button
            onClick={() => setActiveTab('invoice')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'invoice' ? 'bg-brand-blue text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
          >
            Sample GST Job Invoice
          </button>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Vehicles In-Shop Today</span>
          <div className="text-xl font-extrabold text-white mt-1">18 Vehicles</div>
          <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
            <TrendingUp className="w-3 h-3" /> +14% vs avg
          </span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Active Job Cards</span>
          <div className="text-xl font-extrabold text-cyan-400 mt-1">11 In-Bay</div>
          <span className="text-[10px] text-slate-400">4 Ready for Delivery</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Spares Requisitioned</span>
          <div className="text-xl font-extrabold text-white mt-1">₹42,850</div>
          <span className="text-[10px] text-emerald-400">Job-linked parts</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Daily Revenue Run-Rate</span>
          <div className="text-xl font-extrabold text-emerald-400 mt-1">₹68,400</div>
          <span className="text-[10px] text-slate-400">GST itemized</span>
        </div>
      </div>

      {/* Main Tab Content */}
      {activeTab === 'bays' ? (
        <div className="space-y-3">
          {bays.map((bay) => (
            <div
              key={bay.id}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-xl p-4 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-navy-border text-slate-200">
                    {bay.id}
                  </span>
                  <span className="font-semibold text-sm text-white flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-brand-cyan" />
                    {bay.vehicle}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border ${bay.statusColor} font-medium`}>
                    {bay.status}
                  </span>
                  <span className="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded">
                    {bay.estimate}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-3">{bay.task}</p>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800 rounded-full h-1.5 mb-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-brand-blue to-brand-cyan h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${bay.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-slate-500" /> Advisor: {bay.advisor}
                  </span>
                  <span className="flex items-center gap-1">
                    <Wrench className="w-3 h-3 text-slate-500" /> Mechanic: {bay.mechanic}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-3 h-3" /> {bay.timeElapsed}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Sample GST Job Card / Invoice Preview */
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 text-xs text-slate-300">
          <div className="flex justify-between items-start border-b border-slate-800 pb-3 mb-3">
            <div>
              <h5 className="font-bold text-white text-sm">TAX INVOICE / JOB CARD #JC-2026-0891</h5>
              <p className="text-[11px] text-slate-400">GSTIN: 27AABCN1234F1Z6 | HSN/SAC Billing</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold text-[10px]">
                PAID VIA UPI
              </span>
              <p className="text-[11px] text-slate-400 mt-1">Date: 20-Oct-2026</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4 text-[11px] bg-slate-900/50 p-2.5 rounded-lg">
            <div>
              <span className="text-slate-500 block">Customer</span>
              <strong className="text-white">Rajesh Khanna</strong> (+91 98200 XXXXX)
            </div>
            <div>
              <span className="text-slate-500 block">Vehicle</span>
              <strong className="text-white">Honda City i-VTEC</strong> | 42,150 KM
            </div>
          </div>

          <table className="w-full text-left mb-3">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] text-slate-400 uppercase">
                <th className="py-1">Description</th>
                <th className="py-1 text-center">Type</th>
                <th className="py-1 text-right">Taxable</th>
                <th className="py-1 text-right">GST (18%)</th>
                <th className="py-1 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 text-[11px]">
              <tr>
                <td className="py-1.5 text-white">Full Synthetic Engine Oil 0W-20 (3.5L)</td>
                <td className="py-1.5 text-center text-slate-400">Part</td>
                <td className="py-1.5 text-right">₹2,800.00</td>
                <td className="py-1.5 text-right">₹504.00</td>
                <td className="py-1.5 text-right font-medium text-white">₹3,304.00</td>
              </tr>
              <tr>
                <td className="py-1.5 text-white">OEM Ceramic Front Brake Pads</td>
                <td className="py-1.5 text-center text-slate-400">Part</td>
                <td className="py-1.5 text-right">₹3,200.00</td>
                <td className="py-1.5 text-right">₹576.00</td>
                <td className="py-1.5 text-right font-medium text-white">₹3,776.00</td>
              </tr>
              <tr>
                <td className="py-1.5 text-white">Periodic Service Labor & Caliper Greasing</td>
                <td className="py-1.5 text-center text-slate-400">Labor</td>
                <td className="py-1.5 text-right">₹1,161.02</td>
                <td className="py-1.5 text-right">₹208.98</td>
                <td className="py-1.5 text-right font-medium text-white">₹1,370.00</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-sm font-bold">
            <span className="text-slate-400 text-xs">Total Bill Amount (Incl. GST)</span>
            <span className="text-emerald-400 text-base">₹8,450.00</span>
          </div>
        </div>
      )}

      {/* Footer Notice */}
      <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
          Auto-synced with parts inventory & WhatsApp customer updates
        </span>
        <span className="font-mono text-slate-400">Demonstration Interface</span>
      </div>
    </div>
  );
};
