import React, { useState } from 'react';
import {
  FlaskConical,
  Activity,
  FileCheck,
  Send,
  AlertCircle,
  QrCode,
  CheckCircle2,
  Clock,
  User,
} from 'lucide-react';

export const LabDashboard = () => {
  const [activeTab, setActiveTab] = useState('accession');

  const labSamples = [
    {
      barcode: 'NX-LAB-89102',
      patient: 'Suresh Patil (48y / M)',
      tests: 'Complete Blood Count (CBC) + HbA1c',
      specimen: 'EDTA Whole Blood',
      collectedAt: '08:45 AM',
      status: 'Doctor Review Pending',
      flag: 'Abnormal (High HbA1c)',
      flagType: 'warning',
      turnaround: 'In Target (45m left)',
    },
    {
      barcode: 'NX-LAB-89103',
      patient: 'Meera Deshmukh (32y / F)',
      tests: 'Lipid Profile (Cholesterol / HDL / LDL)',
      specimen: 'Serum / SST Tube',
      collectedAt: '09:15 AM',
      status: 'Processing in Analyzer',
      flag: 'Routine',
      flagType: 'normal',
      turnaround: 'Testing (1h 10m left)',
    },
    {
      barcode: 'NX-LAB-89098',
      patient: 'Ananya Roy (24y / F)',
      tests: 'Thyroid Stimulating Hormone (TSH)',
      specimen: 'Serum Gel',
      collectedAt: '07:30 AM',
      status: 'Report Dispatched',
      flag: 'Normal',
      flagType: 'success',
      turnaround: 'Delivered via WhatsApp',
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl text-slate-100 font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold">
            <FlaskConical className="w-5 h-5 text-brand-cyan" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-white text-base">LabFlow LIMS Diagnostic Hub</h4>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-brand-blue/20 text-brand-cyan border border-brand-cyan/30">
                Interactive Preview
              </span>
            </div>
            <p className="text-xs text-slate-400">Barcode Accessioning, Range Validation & Automated Dispatch</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('accession')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'accession' ? 'bg-brand-blue text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
          >
            Accession Queue (3)
          </button>
          <button
            onClick={() => setActiveTab('report')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'report' ? 'bg-brand-blue text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
          >
            Digital Verified Report
          </button>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Samples Accessioned</span>
          <div className="text-xl font-extrabold text-white mt-1">118 Samples</div>
          <span className="text-[10px] text-brand-cyan font-medium">Barcode workflow</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Avg Turnaround Time</span>
          <div className="text-xl font-extrabold text-emerald-400 mt-1">2h 15m</div>
          <span className="text-[10px] text-slate-400">Within Standard SLA</span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Pathologist Pending</span>
          <div className="text-xl font-extrabold text-amber-400 mt-1">4 Reports</div>
          <span className="text-[10px] text-amber-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> Critical delta flag
          </span>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400">Reports Dispatched</span>
          <div className="text-xl font-extrabold text-brand-cyan mt-1">96 Reports</div>
          <span className="text-[10px] text-slate-400">WhatsApp & Web QR</span>
        </div>
      </div>

      {activeTab === 'accession' ? (
        <div className="space-y-3">
          {labSamples.map((sample) => (
            <div
              key={sample.barcode}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-xl p-4 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-blue/20 text-brand-cyan border border-brand-blue/30">
                    {sample.barcode}
                  </span>
                  <span className="font-semibold text-sm text-white">{sample.patient}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${sample.flagType === 'warning'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : sample.flagType === 'success'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      }`}
                  >
                    {sample.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 mb-2">
                <div>
                  <span className="text-slate-500">Test: </span>
                  <span className="font-medium text-slate-200">{sample.tests}</span>
                </div>
                <div>
                  <span className="text-slate-500">Specimen: </span>
                  <span className="font-medium text-slate-200">{sample.specimen}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-850">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" /> Collected: {sample.collectedAt}
                </span>
                <span className="text-slate-400 font-medium">{sample.turnaround}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Report Snapshot */
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-xs text-slate-300">
          <div className="flex justify-between items-start border-b border-slate-800 pb-3 mb-3">
            <div>
              <h5 className="font-bold text-white text-sm">CLINICAL PATHOLOGY REPORT</h5>
              <p className="text-[11px] text-slate-400">Barcode: NX-LAB-89102 | Patient: Suresh Patil (48/M)</p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
              <QrCode className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] text-emerald-400 font-bold">DIGITALLY VERIFIED</span>
            </div>
          </div>

          <table className="w-full text-left mb-4">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] text-slate-400 uppercase">
                <th className="py-1.5">Investigation</th>
                <th className="py-1.5 text-center">Observed Result</th>
                <th className="py-1.5 text-center">Biological Reference</th>
                <th className="py-1.5 text-right">Flag</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 text-[11px]">
              <tr>
                <td className="py-1.5 text-white">Hemoglobin (Hb)</td>
                <td className="py-1.5 text-center font-bold text-white">14.2 g/dL</td>
                <td className="py-1.5 text-center text-slate-400">13.0 - 17.0 g/dL</td>
                <td className="py-1.5 text-right text-emerald-400 font-medium">Normal</td>
              </tr>
              <tr className="bg-amber-500/5">
                <td className="py-1.5 text-white font-medium">Glycosylated Hemoglobin (HbA1c)</td>
                <td className="py-1.5 text-center font-extrabold text-amber-400">8.4 %</td>
                <td className="py-1.5 text-center text-slate-400">&lt; 5.7 % (Normal)</td>
                <td className="py-1.5 text-right text-amber-400 font-bold">High (Uncontrolled)</td>
              </tr>
              <tr>
                <td className="py-1.5 text-white">Estimated Average Glucose (eAG)</td>
                <td className="py-1.5 text-center font-bold text-white">194 mg/dL</td>
                <td className="py-1.5 text-center text-slate-400">&lt; 117 mg/dL</td>
                <td className="py-1.5 text-right text-amber-400 font-medium">Elevated</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-between items-center pt-3 border-t border-slate-800 text-[11px]">
            <span className="text-slate-500">Validated by: Dr. V. Menon, MD (Pathologist)</span>
            <span className="text-cyan-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> PDF dispatched to WhatsApp (+91 98200 XXXXX)
            </span>
          </div>
        </div>
      )}

      {/* Footer Notice */}
      <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-500">
        <span>Dual-stage validation: Technician Data Entry + Pathologist Sign-Off</span>
        <span className="font-mono text-slate-400">Demonstration Interface</span>
      </div>
    </div>
  );
};
