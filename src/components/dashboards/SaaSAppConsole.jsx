import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  Boxes,
  FlaskConical,
  Building2,
  Car,
  Stethoscope,
  Search,
  Bell,
  User,
  Plus,
  Printer,
  Barcode,
  CheckCircle2,
  Clock,
  TrendingUp,
  FileText,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react';

export const SaaSAppConsole = () => {
  const [activeApp, setActiveApp] = useState('workshop');
  const [activeSubTab, setActiveSubTab] = useState('main'); // 'main' or 'invoice'/'report'

  const apps = [
    { id: 'workshop', productId: 'workshop-management', name: 'Workshop OS', icon: Wrench, tag: 'Automotive' },
    { id: 'inventory', productId: 'inventory-management', name: 'Inventory IQ', icon: Boxes, tag: 'Supply Chain' },
    { id: 'lab', productId: 'lab-management', name: 'LabFlow LIMS', icon: FlaskConical, tag: 'Diagnostic Labs' },
    { id: 'hotel', productId: 'hostel-hotel-management', name: 'StayHub PMS', icon: Building2, tag: 'Hotels & Hostels' },
    { id: 'showroom', productId: 'showroom-management', name: 'Showroom Pro', icon: Car, tag: 'Dealerships' },
    { id: 'hospital', productId: 'hospital-management', name: 'CareCore HMS', icon: Stethoscope, tag: 'Healthcare' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden transition-all text-slate-100 font-sans">
      {/* 1. SOFTWARE APP WINDOW CHROME BAR */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Window Controls & App Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-800 text-xs text-slate-400 font-mono">
            <span className="text-brand-cyan font-bold">Nirvoxa Cloud OS</span>
            <span>/</span>
            <span className="text-white capitalize">{activeApp}</span>
          </div>
        </div>

        {/* Global Search Bar (Makes it look like real enterprise software) */}
        <div className="hidden md:flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400 w-72">
          <Search className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-slate-500">Quick search (e.g. MH02-4412, SKU-402, Token #102)...</span>
          <kbd className="ml-auto text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-mono">⌘K</kbd>
        </div>

        {/* Branch & User Profile */}
        <div className="flex items-center gap-3 text-xs">
          <div className="hidden lg:flex items-center gap-1.5 bg-slate-800/60 px-2.5 py-1 rounded-md text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Main Branch: Mumbai</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-brand-blue flex items-center justify-center font-bold text-white text-xs">
            R
          </div>
        </div>
      </div>

      {/* 2. PRODUCT SWITCHER TABS (Clean Segmented Control) */}
      <div className="bg-slate-900/50 border-b border-slate-800 px-3 py-2 flex items-center gap-1 overflow-x-auto">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 shrink-0 hidden sm:inline">
          Test Drive Software:
        </span>
        {apps.map((app) => {
          const Icon = app.icon;
          const isActive = activeApp === app.id;
          return (
            <button
              key={app.id}
              onClick={() => {
                setActiveApp(app.id);
                setActiveSubTab('main');
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${isActive
                ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 scale-100'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{app.name}</span>
            </button>
          );
        })}
      </div>

      {/* 3. LIVE SOFTWARE VIEWPORT */}
      <div className="p-4 sm:p-6 bg-slate-950 min-h-[420px]">
        {/* ================= WORKSHOP OS VIEW ================= */}
        {activeApp === 'workshop' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-brand-cyan" />
                  Service Bay Control & Live Job Cards
                </h3>
                <p className="text-xs text-slate-400">
                  Real-time technician tracking, parts billing, and customer estimate approvals.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveSubTab(activeSubTab === 'main' ? 'invoice' : 'main')}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-brand-cyan border border-slate-700 flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  {activeSubTab === 'main' ? 'View GST Invoice Preview' : 'Back to Active Bays'}
                </button>
                <Link
                  to="/book-a-demo?product=workshop-management"
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-brand-blue hover:bg-brand-blue-hover text-white flex items-center gap-1 shadow"
                >
                  <Plus className="w-3.5 h-3.5" /> New Job Card
                </Link>
              </div>
            </div>

            {activeSubTab === 'main' ? (
              <>
                {/* Metric Summary */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400">Bays Occupied</span>
                    <div className="text-lg font-bold text-white mt-0.5">3 / 4 Bays</div>
                    <span className="text-[10px] text-emerald-400">75% Capacity</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400">Cars In Progress</span>
                    <div className="text-lg font-bold text-cyan-400 mt-0.5">8 Vehicles</div>
                    <span className="text-[10px] text-slate-400">2 Awaiting Spares</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400">Spares Requisitioned</span>
                    <div className="text-lg font-bold text-white mt-0.5">₹34,800</div>
                    <span className="text-[10px] text-emerald-400">Job-linked parts</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400">Daily Invoicing</span>
                    <div className="text-lg font-bold text-emerald-400 mt-0.5">₹62,450</div>
                    <span className="text-[10px] text-slate-400">GST Computed</span>
                  </div>
                </div>

                {/* Live Bays */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-brand-cyan">BAY-01 • Active</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">In Service</span>
                    </div>
                    <div className="font-semibold text-white text-sm">Honda City i-VTEC</div>
                    <p className="text-xs text-slate-400">Major 40K Service & Brake Replacement</p>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-cyan h-full w-[70%]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                      <span>Mech: Vikram S.</span>
                      <strong className="text-white">₹8,450</strong>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-brand-cyan">BAY-02 • Active</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">Awaiting Part</span>
                    </div>
                    <div className="font-semibold text-white text-sm">Hyundai Creta 1.5</div>
                    <p className="text-xs text-slate-400">Clutch Plate & AC Condenser Service</p>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full w-[40%]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                      <span>Mech: Sunil K.</span>
                      <strong className="text-white">₹14,200</strong>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-brand-cyan">BAY-03 • Final QC</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Ready</span>
                    </div>
                    <div className="font-semibold text-white text-sm">Tata Nexon EV</div>
                    <p className="text-xs text-slate-400">Electrical Diagnostic & Alignment</p>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[95%]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                      <span>Mech: Deepak P.</span>
                      <strong className="text-white">₹3,200</strong>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* GST Invoice Snapshot */
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <div>
                    <strong className="text-white text-sm">TAX INVOICE #INV-2026-8910</strong>
                    <div className="text-[11px] text-slate-400">Customer: Rajesh Khanna (Honda City)</div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                    PAID VIA UPI
                  </span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span>Engine Oil Synthetic 0W-20 (3.5L)</span>
                    <span className="text-white font-mono">₹2,800.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Front Brake Pads OEM Set</span>
                    <span className="text-white font-mono">₹3,200.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labor: Caliper Greasing & General Inspection</span>
                    <span className="text-white font-mono">₹1,161.02</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>CGST + SGST (18%)</span>
                    <span className="font-mono">₹1,288.98</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-sm">
                  <span className="text-white">Final Invoice Total:</span>
                  <span className="text-emerald-400">₹8,450.00</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= INVENTORY IQ VIEW ================= */}
        {activeApp === 'inventory' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Boxes className="w-4 h-4 text-brand-cyan" />
                  Live Stock Ledger & Reorder Engine
                </h3>
                <p className="text-xs text-slate-400">
                  Multi-warehouse bin locations, batch expiration alerts, and barcode dispatch.
                </p>
              </div>
              <span className="text-xs font-mono bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-brand-cyan">
                Warehouse: Central Depo (Mumbai)
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-[10px] text-slate-400 uppercase bg-slate-900/60">
                    <th className="py-2 px-3">SKU & Item Description</th>
                    <th className="py-2 px-2">Bin Location</th>
                    <th className="py-2 px-2 text-center">Batch #</th>
                    <th className="py-2 px-2 text-center">Available Stock</th>
                    <th className="py-2 px-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850">
                  <tr>
                    <td className="py-2.5 px-3">
                      <div className="font-semibold text-white">Ceramic Brake Pads (Front)</div>
                      <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                        <Barcode className="w-3 h-3" /> SKU-BRK-402
                      </span>
                    </td>
                    <td className="py-2.5 px-2 text-slate-300 font-mono">Rack A-14</td>
                    <td className="py-2.5 px-2 text-center font-mono text-slate-400">BT-2026-X8</td>
                    <td className="py-2.5 px-2 text-center font-bold text-white">14 Units</td>
                    <td className="py-2.5 px-3 text-right">
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-rose-500/20 text-rose-400 border border-rose-500/30">
                        Low Stock (Auto-PO)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3">
                      <div className="font-semibold text-white">Full Synthetic Engine Oil 5W-30</div>
                      <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                        <Barcode className="w-3 h-3" /> SKU-OIL-991
                      </span>
                    </td>
                    <td className="py-2.5 px-2 text-slate-300 font-mono">Pallet L-02</td>
                    <td className="py-2.5 px-2 text-center font-mono text-slate-400">BT-2026-M1</td>
                    <td className="py-2.5 px-2 text-center font-bold text-white">184 Cans</td>
                    <td className="py-2.5 px-3 text-right">
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Optimal
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3">
                      <div className="font-semibold text-white">Iridium Spark Plug (x4 Set)</div>
                      <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                        <Barcode className="w-3 h-3" /> SKU-SPK-774
                      </span>
                    </td>
                    <td className="py-2.5 px-2 text-slate-300 font-mono">Bin C-09</td>
                    <td className="py-2.5 px-2 text-center font-mono text-slate-400">BT-2026-K9</td>
                    <td className="py-2.5 px-2 text-center font-bold text-white">8 Sets</td>
                    <td className="py-2.5 px-3 text-right">
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        Reorder Triggered
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= LABFLOW LIMS VIEW ================= */}
        {activeApp === 'lab' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-brand-cyan" />
                  Diagnostic Specimen Accession Queue
                </h3>
                <p className="text-xs text-slate-400">
                  Barcode labeling, analyzer result input, and verified PDF delivery to patient WhatsApp.
                </p>
              </div>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-lg">
                ● Analyzer Link Active
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono font-bold text-cyan-400">#NX-LAB-89102</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">High HbA1c Flag</span>
                </div>
                <div className="font-semibold text-white text-sm">Suresh Patil (48y / M)</div>
                <div className="text-xs text-slate-400">Test: Complete Blood Count + HbA1c</div>
                <div className="text-xs text-slate-300 bg-slate-950 p-2 rounded border border-slate-850">
                  Observed HbA1c: <strong className="text-amber-400">8.4%</strong> (Ref: &lt; 5.7%)
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                  <span>Sign-off: Dr. V. Menon</span>
                  <span className="text-brand-cyan">Verified QR Attached</span>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono font-bold text-cyan-400">#NX-LAB-89103</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Dispatched</span>
                </div>
                <div className="font-semibold text-white text-sm">Meera Deshmukh (32y / F)</div>
                <div className="text-xs text-slate-400">Test: Lipid Profile + Thyroid TSH</div>
                <div className="text-xs text-slate-300 bg-slate-950 p-2 rounded border border-slate-850">
                  All parameters within normal biological reference range.
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                  <span>WhatsApp: Delivered</span>
                  <span className="text-emerald-400 font-bold">Workflow target</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= STAYHUB PMS VIEW ================= */}
        {activeApp === 'hotel' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand-cyan" />
                  Dual-Mode Property & Resident Matrix
                </h3>
                <p className="text-xs text-slate-400">
                  Switch between daily hotel room reservations and monthly student hostel bed allocation.
                </p>
              </div>
              <div className="text-xs text-white bg-brand-blue/20 border border-brand-cyan/30 px-3 py-1 rounded-lg">
                87.5% Occupancy Rate
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
                <div className="font-bold text-white text-sm">Room 101</div>
                <span className="text-[10px] text-slate-400">Deluxe King</span>
                <div className="mt-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 py-1 rounded">
                  Occupied (Dr. Kulkarni)
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
                <div className="font-bold text-white text-sm">Room 102</div>
                <span className="text-[10px] text-slate-400">Suite</span>
                <div className="mt-2 text-xs font-semibold text-cyan-400 bg-brand-blue/10 py-1 rounded">
                  Reserved (Check-in 3PM)
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
                <div className="font-bold text-white text-sm">Hostel Bed 201-A</div>
                <span className="text-[10px] text-slate-400">Bunk Bed (A. Verma)</span>
                <div className="mt-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 py-1 rounded">
                  Rent Paid (₹8,500/mo)
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
                <div className="font-bold text-white text-sm">Hostel Bed 201-B</div>
                <span className="text-[10px] text-slate-400">Bunk Bed (Available)</span>
                <div className="mt-2 text-xs font-semibold text-slate-300 bg-slate-800 py-1 rounded">
                  Vacant Ready
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SHOWROOM PRO VIEW ================= */}
        {activeApp === 'showroom' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Car className="w-4 h-4 text-brand-cyan" />
                  Dealership VIN Yard & On-Road Quote Generator
                </h3>
                <p className="text-xs text-slate-400">
                  Manage walk-in leads, book driving license test drives, and generate bank loan quotes.
                </p>
              </div>
              <span className="text-xs text-brand-cyan bg-brand-blue/20 border border-brand-cyan/30 px-3 py-1 rounded-lg">
                Yard Stock: 36 VIN Mapped
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <strong className="text-white">Mahindra Scorpio-N Z8L Diesel</strong>
                  <span className="text-[10px] bg-brand-blue/20 text-brand-cyan px-2 py-0.5 rounded">
                    Test Drive Today
                  </span>
                </div>
                <div className="text-xs text-slate-400">Customer: Vikrant Saxena • Consultant: Gaurav M.</div>
                <div className="flex justify-between text-xs pt-2 border-t border-slate-850">
                  <span className="text-slate-400">On-Road Quote:</span>
                  <strong className="text-emerald-400 font-mono">₹26,11,800 (RTO + Ins)</strong>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <strong className="text-white">Toyota Innova Hycross ZX</strong>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                    Booking Confirmed
                  </span>
                </div>
                <div className="text-xs text-slate-400">Customer: Rajesh Agarwal • Chassis Allocated</div>
                <div className="flex justify-between text-xs pt-2 border-t border-slate-850">
                  <span className="text-slate-400">Delivery Schedule:</span>
                  <strong className="text-white">Friday 11:30 AM (PDI Done)</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= CARECORE HMS VIEW ================= */}
        {activeApp === 'hospital' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-brand-cyan" />
                  CareCore HMS Clinical Operations
                </h3>
                <p className="text-xs text-slate-400">
                  Patient UHID registration, OPD doctor queues, and IPD inpatient bed charts.
                </p>
              </div>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-lg">
                OPD Active: 14 Doctors
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-cyan-400 font-bold">TOKEN #T-102</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">In Cabin</span>
                </div>
                <div className="font-semibold text-white text-xs">Kavita Joshi (36/F)</div>
                <div className="text-[11px] text-slate-400">Dr. S. Roy (Cardiology - Room 4)</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-cyan-400 font-bold">TOKEN #T-103</span>
                  <span className="text-[10px] bg-brand-blue/20 text-brand-cyan px-2 py-0.5 rounded">Next in Queue</span>
                </div>
                <div className="font-semibold text-white text-xs">Harish Nair (52/M)</div>
                <div className="text-[11px] text-slate-400">Dr. S. Roy (Cardiology - Room 4)</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white text-xs">ICU BED 02</span>
                  <span className="text-[10px] bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded">Critical Monitor</span>
                </div>
                <div className="font-semibold text-white text-xs">Ramanathan G. (64/M)</div>
                <div className="text-[11px] text-cyan-300 font-mono">BP 125/82 • SpO2 98%</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. CONSOLE ACTION FOOTER */}
      <div className="bg-slate-900 border-t border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Multi-Tenant Architecture • Role-Governed Access • GST-Ready Invoicing</span>
        </div>

        <Link
          to={`/book-a-demo?product=${apps.find((app) => app.id === activeApp)?.productId || 'workshop-management'}`}
          className="font-bold text-brand-cyan hover:underline flex items-center gap-1.5"
        >
          <span>Schedule Full Guided Screen-Share of this Platform</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
