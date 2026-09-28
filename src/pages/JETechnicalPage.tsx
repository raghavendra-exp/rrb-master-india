import React, { useState } from 'react';
import { Wrench, BookOpen, Calculator, PlayCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';

interface DisciplineData {
  id: string;
  name: string;
  hindiName: string;
  topics: string[];
  keyFormulas: string[];
  summary: string;
}

const DISCIPLINES: DisciplineData[] = [
  {
    id: 'civil',
    name: 'Civil Engineering',
    hindiName: 'सिविल इंजीनियरिंग',
    topics: [
      'Engineering Mechanics & Strength of Materials (SOM)',
      'Building Materials & Concrete Technology (IS: 456)',
      'Surveying & Levelling (Compass, Theodolite, Total Station)',
      'Soil Mechanics & Geotechnical Engineering',
      'Hydraulics, Fluid Mechanics & Irrigation',
      'Railway Permanent Way (P-Way), Sleeper Density & Track Curves',
      'Design of Reinforced Concrete (RCC) & Steel Structures',
      'Estimation, Costing & Valuation',
    ],
    keyFormulas: [
      'Bending Equation: M / I = σ / y = E / R',
      'Shear Stress in Beams: τ = (V × A × ȳ) / (I × b)',
      'Slump Cone Dimensions: 10 cm top × 20 cm bottom × 30 cm height',
      'Sleeper Density in Indian Railways: M + 7 to M + 8 per rail length',
    ],
    summary: 'Essential core discipline for P-Way maintenance, bridge inspections, and railway civil infrastructure projects.',
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    hindiName: 'मैकेनिकल इंजीनियरिंग',
    topics: [
      'Engineering Mechanics & Theory of Machines (TOM)',
      'Thermodynamics & Heat Engines (Otto, Diesel, Dual Cycles)',
      'Refrigeration & Air Conditioning in Railway Coaches',
      'Fluid Mechanics & Hydraulic Machinery (Pumps & Turbines)',
      'Production Engineering, Welding & Machine Tools',
      'Strength of Materials (Torsion & Bending)',
      'Carriage & Wagon (C&W) Maintenance, Air Brake Systems',
    ],
    keyFormulas: [
      'Carnot Efficiency: η = 1 - (T_L / T_H)',
      'Torsion Equation: T / J = τ / r = Gθ / L',
      'Air Brake Train Pipe Pressure: 5.0 kg/cm²; Feed Pipe: 6.0 kg/cm²',
      'Continuity Equation: A₁V₁ = A₂V₂ (for incompressible fluid)',
    ],
    summary: 'Focuses on diesel/electric rolling stock maintenance, coach bogies, wheelsets, and workshop manufacturing.',
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    hindiName: 'इलेक्ट्रिकल इंजीनियरिंग',
    topics: [
      'Basic Electrical Concepts & Circuit Laws (KVL, KCL, Thevenin)',
      'Electrical Machines (Transformers, DC Motors, 3-Phase Induction)',
      'Generation, Transmission & Distribution of Electrical Power',
      'Electric Traction: 25 kV AC Single Phase OHE Systems',
      'Electrical Measurements & Measuring Instruments (PMMC, MI)',
      'Switchgear & Protection (Relays, Circuit Breakers, Earthing)',
    ],
    keyFormulas: [
      'Ohm’s Law & Power: P = VI = I²R = V²/R',
      'Transformer Ratio: V₁/V₂ = N₁/N₂ = I₂/I₁',
      'Synchronous Speed: N_s = 120f / P',
      'Traction Voltage: 25,000 V AC at 50 Hz Single Phase',
    ],
    summary: 'Covers electrified train propulsion, overhead catenary lines, substation transformers, and coach train lighting.',
  },
  {
    id: 'electronics',
    name: 'Electronics & Telecommunication',
    hindiName: 'इलेक्ट्रॉनिक्स एवं दूरसंचार (S&T)',
    topics: [
      'Semiconductor Physics & Electronic Devices (Diodes, BJTs, MOSFETs)',
      'Digital Electronics (Boolean Algebra, Logic Gates, Multiplexers, Flip-Flops)',
      'Kavach Automatic Train Protection & Radio Frequency Identification (RFID)',
      'Electronic Interlocking (EI) & Axle Counter Signalling Systems',
      'Optical Fiber Communication (OFC) & VHF/UHF Wireless Networks',
      'Microprocessors (8085/8086) & Microcontrollers',
    ],
    keyFormulas: [
      'Transistor Current Relation: I_E = I_B + I_C',
      'Nyquist Sampling Theorem: f_s ≥ 2 × f_max',
      'Boolean De Morgan’s Laws: (A + B)’ = A’ · B’ and (A · B)’ = A’ + B’',
      'Kavach SIL-4 Certified Safety Integrity Protocol',
    ],
    summary: 'Vital for railway signal interlocking, automatic train protection (Kavach), and telecommunications networks.',
  },
  {
    id: 'cs_it',
    name: 'Computer Science & IT',
    hindiName: 'कंप्यूटर साइंस एवं आईटी',
    topics: [
      'Programming Fundamentals (C, C++, Java, Python Basics)',
      'Data Structures & Algorithms (Arrays, Linked Lists, Trees, Graphs, Sorting)',
      'Database Management Systems (SQL Queries, Normalization, ACID Properties)',
      'Operating Systems (Processes, Threads, CPU Scheduling, Deadlocks, Memory)',
      'Computer Networks (OSI 7 Layers, TCP/IP, Routing Protocols, IP Addressing)',
      'Cybersecurity, Cryptography & Cloud Computing Basics',
    ],
    keyFormulas: [
      'Binary Subnetting & IPv4 Class Ranges (Class A, B, C)',
      'Time Complexities: Binary Search O(log n), Merge Sort O(n log n)',
      'Relational Algebra: Selection (σ), Projection (π), Join (⨝)',
    ],
    summary: 'Manages PRS/UTS passenger ticketing networks, freight tracking (FOIS), and server architectures in zonal IT cells.',
  },
];

export const JETechnicalPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('civil');

  const activeData = DISCIPLINES.find((d) => d.id === selectedDiscipline) || DISCIPLINES[0];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'विशेष दक्षता' : 'Specialized Labs' },
          { label: language === 'hi' ? 'आरआरबी जेई तकनीकी हब' : 'RRB JE Technical Hub' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5" />
          RRB JE CBT-2 100 Technical Marks Engine
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'आरआरबी जेई तकनीकी संकाय हब' : 'RRB JE Technical Engineering Hub'}
        </h1>
        <p className="text-xs sm:text-sm text-purple-200 max-w-2xl leading-relaxed">
          {language === 'hi'
            ? 'सिविल, मैकेनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स और आईटी इंजीनियरिंग के लिए आधिकारिक डिप्लोमा आधारित पाठ्यक्रम, मुख्य सूत्र और तकनीकी प्रश्न।'
            : 'Mapped directly to the official 100-mark technical syllabus of RRB JE CBT-2. Core concepts, formulas, and technical PYQs.'}
        </p>
      </div>

      {/* Discipline Selector Tabs */}
      <div className="flex gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto scrollbar-none">
        {DISCIPLINES.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDiscipline(d.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
              selectedDiscipline === d.id
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      {/* Discipline Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Topics & Overview */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
              {activeData.name} ({activeData.hindiName})
            </h2>
            <p className="text-xs text-slate-500 mt-1">{activeData.summary}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-purple-600" />
              <span>Official Syllabus Modules (CEN 03/2024 CBT-2)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {activeData.topics.map((top, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 font-medium flex items-start gap-2"
                >
                  <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-600 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{top}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Key Formulas & Direct Drill */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="w-4 h-4 text-purple-600" />
              <span>Key Technical Formulas & Constants</span>
            </h3>

            <div className="space-y-2 text-xs">
              {activeData.keyFormulas.map((form, fIdx) => (
                <div
                  key={fIdx}
                  className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/50 font-mono font-semibold text-purple-900 dark:text-purple-300"
                >
                  {form}
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('questions')}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Practice Technical MCQs</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
