import React, { useState } from 'react';
import {
  Stethoscope,
  Activity,
  Bed,
  User,
  Clock,
  ShieldCheck,
  FileText,
  HeartPulse,
} from 'lucide-react';

export const HospitalDashboard = () => {
  const [activeTab, setActiveTab] = useState('opd');

  const opdQueue = [
    { token: '#T-102', patient: 'Kavita Joshi (36/F)', doctor: 'Dr. S. Roy (Cardiology - Room 4)', time: '09:30 AM', status: 'Consulting Now', statusClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    { token: '#T-103', patient: 'Harish Nair (52/M)', doctor: 'Dr. S. Roy (Cardiology - Room 4)', time: '09:45 AM', status: 'Next in Queue', statusClass: 'bg-brand-blue/20 text-brand-cyan border-brand-blue/30' },
    { token: '#T-104', patient: 'Sunita Reddy (29/F)', doctor: 'Dr. M. Chawla (General Medicine)', time: '10:00 AM', status: 'Vitals Checked (Waiting)', statusClass: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  ];

  const ipdWards = [
    { bed: 'ICU-Bed 02', patient: 'Ramanathan G. (64/M)', condition: 'Post-Op Stable', vitals: 'BP 125/82, SpO2 98%', doctor: 'Dr. K. Saxena', status: 'Occupied' },
    { bed: 'Ward A - Bed 05', patient: 'Alok Pandey (41/M)', condition: 'Under Observation', vitals: 'BP 118/76, SpO2 99%', doctor: 'Dr. S. Roy', status: 'Occupied' },
    { bed: 'Deluxe Suite 301', patient: 'Vacant Bed', condition: 'Sanitized & Ready', vitals: 'N/A', doctor: 'Available', status: 'Vacant' },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl text-slate-100 font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
            <Stethoscope className="w-5 h-5 text-brand-cyan" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-white text-base">CareCore HMS Clinical Operations</h4>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-brand-cyan border border-brand-cyan/30">
                Interactive Preview
              </span>
            </div>
            <p className="text-xs text-slate-400">OPD Queues, IPD Bed Management & Electronic Health Records</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('opd')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'opd' ? 'bg-brand-blue text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            OPD Doctor Queue (3)
          </button>
          <button
            onClick={() => setActiveTab('ipd')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'ipd' ? 'bg-brand-blue text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            IPD Inpatient Beds (3)
          </button>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">OPD Registrations Today</span>
          <div className="text-xl font-extrabold text-white mt-1">164 Patients</div>
          <span className="text-[10px] text-brand-cyan">UHID Generated</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Total IPD Occupancy</span>
          <div className="text-xl font-extrabold text-emerald-400 mt-1">82%</div>
          <span className="text-[10px] text-emerald-400 font-medium">41 / 50 Beds</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Active Doctors on Duty</span>
          <div className="text-xl font-extrabold text-brand-cyan mt-1">14 Doctors</div>
          <span className="text-[10px] text-slate-400">8 Specialties</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Pharmacy Orders Dispatched</span>
          <div className="text-xl font-extrabold text-white mt-1">128 Rx</div>
          <span className="text-[10px] text-slate-400">Direct Doctor Sync</span>
        </div>
      </div>

      {activeTab === 'opd' ? (
        <div className="space-y-3">
          {opdQueue.map((item) => (
            <div
              key={item.token}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-xl p-4 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-blue/20 text-brand-cyan border border-brand-blue/30">
                    {item.token}
                  </span>
                  <span className="font-semibold text-sm text-white">{item.patient}</span>
                </div>
                <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${item.statusClass}`}>
                  {item.status}
                </span>
              </div>

              <div className="text-xs text-slate-300 mb-2">
                <span className="text-slate-500">Consultant: </span>
                <span className="font-medium text-white">{item.doctor}</span>
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-400 pt-2 border-t border-slate-850">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" /> Appointment Slot: {item.time}
                </span>
                <span className="text-brand-cyan">View Patient History (UHID)</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {ipdWards.map((ward) => (
            <div
              key={ward.bed}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-xl p-4 transition-all"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-200">
                    {ward.bed}
                  </span>
                  <span className="font-semibold text-sm text-white">{ward.patient}</span>
                </div>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${
                    ward.status === 'Occupied'
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  {ward.status}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 mb-2">
                <div>
                  <span className="text-slate-500">Condition: </span>
                  <span className="font-medium text-slate-200">{ward.condition}</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
                  <span>{ward.vitals}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-400 pt-2 border-t border-slate-850">
                <span>Attending: {ward.doctor}</span>
                <span className="text-brand-cyan hover:underline cursor-pointer">Nurse Drug Chart</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
          Strict role-based privacy for clinical records & prescription auditing
        </span>
        <span className="font-mono text-slate-400">Demonstration Interface</span>
      </div>
    </div>
  );
};
