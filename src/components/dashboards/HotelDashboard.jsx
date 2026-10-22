import React, { useState } from 'react';
import {
  Building2,
  Users,
  Bed,
  CheckCircle,
  Clock,
  Key,
  ShieldCheck,
  Calendar,
} from 'lucide-react';

export const HotelDashboard = () => {
  const [mode, setMode] = useState('hotel'); // 'hotel' or 'hostel'

  const hotelRooms = [
    { room: '101', type: 'Deluxe King', guest: 'Dr. Anand Kulkarni', status: 'Occupied', checkOut: 'Tomorrow 11 AM', rate: '₹3,500/night', statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    { room: '102', type: 'Executive Suite', guest: 'Priya Nambiar', status: 'Reserved', checkOut: 'Arrival Today 3 PM', rate: '₹5,200/night', statusColor: 'bg-brand-blue/20 text-brand-cyan border-brand-blue/30' },
    { room: '103', type: 'Standard Double', guest: 'Vacant', status: 'Ready (Clean)', checkOut: 'Instant Check-In', rate: '₹2,800/night', statusColor: 'bg-slate-800 text-slate-300 border-slate-700' },
    { room: '104', type: 'Deluxe Twin', guest: 'Housekeeping', status: 'Cleaning In-Progress', checkOut: 'Available in 20m', rate: '₹3,500/night', statusColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  ];

  const hostelBeds = [
    { bed: 'Room 201 - Bed A', resident: 'Aakash Verma (IIT Tech)', dues: 'Paid (₹8,500/mo)', status: 'Occupied', statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    { bed: 'Room 201 - Bed B', resident: 'Rohit Sharma (Software Intern)', dues: 'Paid (₹8,500/mo)', status: 'Occupied', statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    { bed: 'Room 202 - Bed A', resident: 'Tanmay Bhatt (MBA Student)', dues: 'Due in 3 Days', status: 'Occupied', statusColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    { bed: 'Room 202 - Bed B', resident: 'Vacant Bed', dues: 'Available', status: 'Vacant Available', statusColor: 'bg-slate-800 text-slate-300 border-slate-700' },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl text-slate-100 font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-brand-cyan flex items-center justify-center font-bold">
            <Building2 className="w-5 h-5 text-brand-cyan" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-white text-base">StayHub PMS & Hostel Matrix</h4>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-brand-cyan border border-brand-cyan/30">
                Dual Operational Mode
              </span>
            </div>
            <p className="text-xs text-slate-400">Hotel Room Folios & Student Hostel Bed Allotment</p>
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setMode('hotel')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              mode === 'hotel' ? 'bg-brand-blue text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Key className="w-3.5 h-3.5" /> Hotel Rooms Mode
          </button>
          <button
            onClick={() => setMode('hostel')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              mode === 'hostel' ? 'bg-brand-blue text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Bed className="w-3.5 h-3.5" /> Hostel Beds Mode
          </button>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Total Capacity</span>
          <div className="text-xl font-extrabold text-white mt-1">48 Units</div>
          <span className="text-[10px] text-brand-cyan">Wing A & Wing B</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Current Occupancy</span>
          <div className="text-xl font-extrabold text-emerald-400 mt-1">87.5%</div>
          <span className="text-[10px] text-emerald-400 font-medium">42/48 Occupied</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Check-Ins Today</span>
          <div className="text-xl font-extrabold text-brand-cyan mt-1">8 Expected</div>
          <span className="text-[10px] text-slate-400">5 Already In</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Monthly Dues Cleared</span>
          <div className="text-xl font-extrabold text-white mt-1">94%</div>
          <span className="text-[10px] text-slate-400">UPI Auto-Reconciled</span>
        </div>
      </div>

      {/* Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {mode === 'hotel'
          ? hotelRooms.map((r) => (
              <div
                key={r.room}
                className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-xl p-4 transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-white text-sm">
                      {r.room}
                    </span>
                    <div>
                      <h5 className="font-semibold text-white text-xs">{r.type}</h5>
                      <span className="text-[10px] text-slate-400">{r.rate}</span>
                    </div>
                  </div>
                  <span className={`text-[11px] px-2.5 py-0.5 rounded-full border font-medium ${r.statusColor}`}>
                    {r.status}
                  </span>
                </div>

                <div className="mt-2 text-xs text-slate-300">
                  <span className="text-slate-500">Guest: </span>
                  <span className="font-medium text-white">{r.guest}</span>
                </div>

                <div className="flex justify-between items-center text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-850">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" /> {r.checkOut}
                  </span>
                  <button className="text-[11px] text-brand-cyan hover:underline">View Folio</button>
                </div>
              </div>
            ))
          : hostelBeds.map((b) => (
              <div
                key={b.bed}
                className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-xl p-4 transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-brand-cyan flex items-center justify-center font-bold text-xs">
                      <Bed className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white text-xs">{b.bed}</h5>
                      <span className="text-[10px] text-slate-400">{b.dues}</span>
                    </div>
                  </div>
                  <span className={`text-[11px] px-2.5 py-0.5 rounded-full border font-medium ${b.statusColor}`}>
                    {b.status}
                  </span>
                </div>

                <div className="mt-2 text-xs text-slate-300">
                  <span className="text-slate-500">Resident: </span>
                  <span className="font-medium text-white">{b.resident}</span>
                </div>

                <div className="flex justify-between items-center text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-850">
                  <span>KYC Verified & Signed</span>
                  <button className="text-[11px] text-brand-cyan hover:underline">Rent Ledger</button>
                </div>
              </div>
            ))}
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
          Supports Aadhaar/Passport photo ID capture, meal charges & WhatsApp receipts
        </span>
        <span className="font-mono text-slate-400">Demonstration Interface</span>
      </div>
    </div>
  );
};
