import React, { useState } from 'react';
import {
  Boxes,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownLeft,
  Search,
  Barcode,
  Layers,
  CheckCircle2,
  TrendingDown,
  Warehouse,
} from 'lucide-react';

export const InventoryDashboard = () => {
  const [selectedWarehouse, setSelectedWarehouse] = useState('central');

  const inventoryItems = [
    {
      sku: 'SKU-BRK-402',
      name: 'OEM Disc Brake Pads (Ceramic)',
      category: 'Braking Systems',
      stock: 14,
      reorderLevel: 25,
      batch: 'BT-2026-X8',
      expiry: 'N/A',
      location: 'Bin A-14',
      status: 'Low Stock',
      statusClass: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    },
    {
      sku: 'SKU-OIL-991',
      name: 'Synthetic Engine Oil 5W-30 (1L)',
      category: 'Lubricants',
      stock: 184,
      reorderLevel: 60,
      batch: 'BT-2026-M1',
      expiry: 'Nov 2028',
      location: 'Rack L-03',
      status: 'Optimal',
      statusClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    },
    {
      sku: 'SKU-FLT-210',
      name: 'High Flow Air Filter Element',
      category: 'Filtration',
      stock: 42,
      reorderLevel: 30,
      batch: 'BT-2026-Q4',
      expiry: 'N/A',
      location: 'Bin B-02',
      status: 'Optimal',
      statusClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    },
    {
      sku: 'SKU-SPK-774',
      name: 'Iridium Spark Plug Set (x4)',
      category: 'Ignition',
      stock: 8,
      reorderLevel: 20,
      batch: 'BT-2026-K9',
      expiry: 'N/A',
      location: 'Bin C-09',
      status: 'Critical Alert',
      statusClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl text-slate-100 font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
            <Boxes className="w-5 h-5 text-brand-cyan" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-white text-base">Inventory IQ Master Station</h4>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-brand-cyan border border-brand-cyan/30">
                Interactive Preview
              </span>
            </div>
            <p className="text-xs text-slate-400">Multi-Warehouse Stock Ledger & Automated Reorder Engine</p>
          </div>
        </div>

        {/* Warehouse Selector */}
        <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
          <Warehouse className="w-4 h-4 text-brand-cyan" />
          <select
            value={selectedWarehouse}
            onChange={(e) => setSelectedWarehouse(e.target.value)}
            className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
          >
            <option value="central" className="bg-slate-900">Main Distribution Hub (Navi Mumbai)</option>
            <option value="north" className="bg-slate-900">North Regional Depo (Delhi NCR)</option>
            <option value="south" className="bg-slate-900">South Depo (Bengaluru Hub)</option>
          </select>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Total Active SKUs</span>
          <div className="text-xl font-extrabold text-white mt-1">2,418 SKUs</div>
          <span className="text-[10px] text-emerald-400 font-medium">99.4% In-Stock Rate</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Stock Asset Valuation</span>
          <div className="text-xl font-extrabold text-brand-cyan mt-1">₹48.6 Lakhs</div>
          <span className="text-[10px] text-slate-400">FIFO Valuation</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Low Stock Triggers</span>
          <div className="text-xl font-extrabold text-rose-400 mt-1">6 Items</div>
          <span className="text-[10px] text-rose-400 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" /> Auto-PO Drafted
          </span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Dispatched Today</span>
          <div className="text-xl font-extrabold text-emerald-400 mt-1">142 Orders</div>
          <span className="text-[10px] text-slate-400">Barcode verified</span>
        </div>
      </div>

      {/* Live Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-[10px] text-slate-400 uppercase tracking-wider bg-slate-950/50">
              <th className="py-2.5 px-3">SKU & Item Name</th>
              <th className="py-2.5 px-2">Category</th>
              <th className="py-2.5 px-2">Bin / Location</th>
              <th className="py-2.5 px-2 text-center">Batch #</th>
              <th className="py-2.5 px-2 text-center">Current Qty</th>
              <th className="py-2.5 px-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-850">
            {inventoryItems.map((item) => (
              <tr key={item.sku} className="hover:bg-slate-850/50 transition-colors">
                <td className="py-2.5 px-3">
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                    <Barcode className="w-3 h-3" /> {item.sku}
                  </div>
                </td>
                <td className="py-2.5 px-2 text-slate-400">{item.category}</td>
                <td className="py-2.5 px-2 font-mono text-slate-300">{item.location}</td>
                <td className="py-2.5 px-2 text-center font-mono text-slate-400">{item.batch}</td>
                <td className="py-2.5 px-2 text-center">
                  <span className="font-bold text-white text-sm">{item.stock}</span>
                  <span className="text-[10px] text-slate-500 block">Min: {item.reorderLevel}</span>
                </td>
                <td className="py-2.5 px-3 text-right">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full border text-[11px] font-medium ${item.statusClass}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Supports wireless barcode guns, mobile camera QR scanner & thermal labels
        </span>
        <span className="font-mono text-slate-400">Real-time Stock Balancing</span>
      </div>
    </div>
  );
};
