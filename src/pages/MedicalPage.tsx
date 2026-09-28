import React from 'react';
import { HeartPulse, ShieldAlert, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { RAILWAY_MEDICAL_STANDARDS } from '../data/rrb/medical';

export const MedicalPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'चिकित्सा मानक' : 'Medical Standards' },
          { label: language === 'hi' ? 'भारतीय रेल चिकित्सा नियमावली' : 'Railway Medical Information' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950 via-slate-900 to-indigo-950 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider">
          <HeartPulse className="w-3.5 h-3.5" />
          Indian Railway Medical Manual (IRMM) Official Standards
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'रेलवे भर्ती चिकित्सा एवं दृष्टि मानक केंद्र' : 'Railway Medical & Visual Standards Center'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          {language === 'hi'
            ? 'A-1 से C-2 तक रेलवे की आधिकारिक चिकित्सा श्रेणियां, दूर दृष्टि, निकट दृष्टि, कलर विज़न और लेसिक सर्जरी नियम।'
            : 'Official visual acuity and physical fitness guidelines as prescribed in the Indian Railway Medical Manual.'}
        </p>
      </div>

      {/* Disclaimer Alert (Section 61) */}
      <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold">Important Medical Disclaimer:</p>
          <p className="text-[11px] leading-relaxed text-amber-800 dark:text-amber-400">
            This platform displays official guidelines from Railway recruitment notifications for educational awareness.
            We do NOT diagnose users or claim anyone is medically fit or unfit. Final medical examination is conducted solely
            by Railway Medical Authorities in Railway Hospitals prior to appointment.
          </p>
        </div>
      </div>

      {/* Medical Standards Cards */}
      <div className="space-y-4">
        {RAILWAY_MEDICAL_STANDARDS.map((med) => (
          <div
            key={med.category}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-black text-lg flex items-center justify-center">
                  {med.category}
                </span>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    Medical Category {med.category}
                  </h3>
                  <p className="text-xs text-slate-500">{t(med.generalFitness)}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                    med.lasikAllowed ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
                  }`}
                >
                  {med.lasikAllowed ? 'LASIK Permissible' : 'NO LASIK Allowed'}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                    med.colorVisionRequired ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  {med.colorVisionRequired ? 'Color Vision Mandatory' : 'Color Vision Optional'}
                </span>
              </div>
            </div>

            {/* Vision Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                  <Eye className="w-4 h-4 text-blue-600" />
                  <span>Distant Vision (दूर दृष्टि):</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">{t(med.distantVision)}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                  <Eye className="w-4 h-4 text-indigo-600" />
                  <span>Near Vision (निकट दृष्टि):</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">{t(med.nearVision)}</p>
              </div>
            </div>

            {/* Applicable Posts & Special Rules */}
            <div className="space-y-2 text-xs">
              <div className="text-slate-700 dark:text-slate-300">
                <strong>Applicable Railway Posts: </strong>
                {med.applicablePosts.map((p) => t(p)).join(', ')}
              </div>
              <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 text-[11px] text-blue-900 dark:text-blue-300 border border-blue-100 dark:border-blue-900/40">
                <strong>Conditions: </strong>
                {t(med.specialConditions)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
