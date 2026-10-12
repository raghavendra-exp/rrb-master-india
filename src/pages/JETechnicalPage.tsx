import React, { useState } from 'react';
import {
  Wrench,
  BookOpen,
  Calculator,
  PlayCircle,
  Building2,
  Zap,
  Cpu,
  Laptop,
  Leaf,
  Layers,
  Sparkles,
  Image as ImageIcon,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';

interface DisciplineData {
  id: string;
  name: string;
  hindiName: string;
  category: 'core' | 'allied';
  marks: string;
  icon: any;
  topics: string[];
  keyFormulas: string[];
  summary: string;
  asciiTree?: string;
}

const DISCIPLINES: DisciplineData[] = [
  {
    id: 'civil',
    name: 'Civil & Allied Engineering',
    hindiName: 'सिविल एवं संबद्ध इंजीनियरिंग',
    category: 'core',
    marks: '100 Marks (CBT-2)',
    icon: Building2,
    topics: [
      'Building Materials: Stone properties, brick testing, lime, cement composition & NDT techniques',
      'Concrete Technology: Water-cement ratio, workability, concrete mix design (IS: 456)',
      'Surveying: Principles, chain & compass, leveling, contouring, theodolite, curves, Total Station, GPS & GIS',
      'Mechanics of Materials & Geotechnical: Stress-strain, Hooke’s law, SFD/BMD, column slenderness ratio',
      'Soil Mechanics: Index properties, Atterberg limits, compaction, Mohr-Coulomb shear strength (τ = c + σ tan φ)',
      'Structural Engineering: RCC limit state method (LSM), beams, slabs, columns, footings, prestressed concrete',
      'Steel Structures: Bolted & welded connections, tension/compression members, plate girders, roof trusses',
      'Hydraulics & Water Resources: Fluid kinematics, Bernoulli’s theorem, venturimeter, open channels, duty-delta',
      'Railway Engineering: Permanent Way (P-Way), 60 kg/m UIC-60 rails, PSC sleepers, ballast, super-elevation, cant deficiency',
      'Environmental Engineering: Water quality, treatment plants, sewage activated sludge process, air pollution',
    ],
    keyFormulas: [
      'Euler Column Buckling: P_cr = (π²EI) / (L_eff)²',
      'Beam Bending Equation: M / I = σ / y = E / R',
      'Shear Stress in Beams: τ = (V × A × ȳ) / (I × b)',
      'Mohr-Coulomb Failure: τ = c + σ·tan(φ)',
      'Railway Super-elevation (BG): e = (G × V²) / (127 × R)',
      'Irrigation Duty-Delta: Δ = (8.64 × B) / D (metres)',
    ],
    summary: 'The primary technical discipline for Railway P-Way maintenance, track inspections, bridge engineering, and railway infrastructure.',
    asciiTree: `                          CIVIL ENGINEERING TREE (100 MARKS)
                                     │
       ┌─────────────────────────────┼─────────────────────────────┐
       ▼                             ▼                             ▼
 BUILDING MATERIALS            SURVEYING & GEOTECH          STRUCTURAL DESIGN
• Concrete mix design         • Theodolite, total station   • Slenderness ratios
• Bricks, lime testing        • Shear strength properties   • Prestressed concrete
• W/C ratio, IS:456           • Mohr-Coulomb failure        • Highway & P-Way tracks`,
  },
  {
    id: 'mechanical',
    name: 'Mechanical & Allied Engineering',
    hindiName: 'मैकेनिकल एवं संबद्ध इंजीनियरिंग',
    category: 'core',
    marks: '100 Marks (CBT-2)',
    icon: Wrench,
    topics: [
      'Engineering Mechanics & SOM: FBD, equilibrium, friction, trusses, Mohr’s circle, torsion of circular shafts',
      'Theory of Machines & Machine Design: Kinematic pairs, inversions, flywheels, governors, cams, gear trains',
      'Machine Design: Cotter/knuckle joints, riveted & welded joints, shafts, keys, couplings, spur gears, screw jacks',
      'Fluid Mechanics & Machinery: Fluid statics, boundary layer, Darcy-Weisbach head loss, Pelton, Francis & Kaplan turbines',
      'Thermodynamics: First & second laws, entropy, air standard cycles (Otto, Diesel, Dual, Brayton), Rankine cycle',
      'Heat Transfer: Conduction, composite walls, fins, free/forced convection, Stefan-Boltzmann radiation law',
      'IC Engines: SI & CI combustion, knocking, fuel injection, indicated/brake power, mechanical & thermal efficiencies',
      'Refrigeration & Air Conditioning: Vapor Compression Refrigeration System (VCRS), refrigerants, psychrometry',
      'Production & Manufacturing: Casting patterns & gating, welding (TIG, MIG, resistance), Merchant circle, Taylor tool life',
      'Metrology: Limits, fits, tolerances, linear & angular measurements, interferometry',
    ],
    keyFormulas: [
      'Taylor Tool Life Equation: VTⁿ = C',
      'Torsion Equation: T / J = τ / r = Gθ / L',
      'Thin Cylinder Hoop Stress: σ_h = pd / (2t)  |  Longitudinal: σ_l = pd / (4t)',
      'Carnot Efficiency: η = 1 - (T_L / T_H)  |  Otto Efficiency: η = 1 - [1 / r^(γ - 1)]',
      'Stefan-Boltzmann Radiation: E = ε × σ × A × T⁴',
      'Turbine Specific Speed: N_s = (N√P) / H^(5/4)',
    ],
    summary: 'Essential for Rolling Stock (Carriage & Wagon), locomotive maintenance sheds, air brake systems, and railway workshop manufacturing.',
  },
  {
    id: 'electrical',
    name: 'Electrical & Allied Engineering',
    hindiName: 'इलेक्ट्रिकल एवं संबद्ध इंजीनियरिंग',
    category: 'core',
    marks: '100 Marks (CBT-2)',
    icon: Zap,
    topics: [
      'Circuit Law & Networks: Mesh & nodal analysis, Thevenin’s, Norton’s, Superposition, Maximum Power Transfer (MPTT)',
      'Magnetic Circuits: Flux, mmf, reluctance, Faraday’s laws, self & mutual inductance, hysteresis, eddy currents',
      'DC Machines: Construction, armature windings, EMF & torque equations, speed control methods, starters',
      'Transformers: Equivalent circuit, losses, efficiency, voltage regulation, autotransformers, 3-phase connections',
      'Induction Motors: 3-phase rotating magnetic field (RMF), slip-torque characteristics, circle diagram, starters, 1-phase motors',
      'Synchronous Machines: Alternator EMF equation, voltage regulation (EMF, MMF, ZPF), synchronous motor V-curves',
      'Power Systems: Hydro/thermal/nuclear generation, transmission parameters (R, L, C), corona effect, cables, fault analysis',
      'Switchgear & Protection: Circuit breakers, protective relays, earthing standards',
      'Measurements & Instrumentation: PMMC, Moving Iron (MI), dynamometer wattmeter, CRO, transducers (LVDT, thermocouples)',
      'Power Electronics & Drives: SCR, TRIAC, MOSFET, IGBT, rectifiers, inverters, choppers, cycloconverters, drive speed control',
    ],
    keyFormulas: [
      'Synchronous Speed: N_s = (120 × f) / P  |  Slip: s = (N_s - N) / N_s',
      'Transformer EMF: E = 4.44 × f × N × Φ_m',
      'Max Power Transfer Theorem: P_max = V_th² / (4R_th)',
      'Ohm’s Law & Power: P = VI = I²R = V²/R',
      'Induction Motor Rotor Frequency: f_r = s × f',
    ],
    summary: 'Governs electrified railway traction (25 kV AC OHE catenary), locomotive traction motors, substations, and passenger coach lighting.',
  },
  {
    id: 'electronics',
    name: 'Electronics, IT & Signal & Telecom',
    hindiName: 'इलेक्ट्रॉनिक्स, आईटी एवं दूरसंचार (S&T)',
    category: 'core',
    marks: '100 Marks (CBT-2)',
    icon: Cpu,
    topics: [
      'Semiconductor Devices: P-N junction diodes, zener diodes, clippers, clampers, BJT & MOSFET biasing, small-signal models',
      'Operational Amplifiers: Inverting/non-inverting op-amps, integrators, differentiators, active filters, oscillators',
      'Digital Electronics: Boolean algebra, De Morgan’s laws, K-map minimization (up to 4 variables), MUX, decoders, adders',
      'Sequential Circuits: Flip-flops (SR, JK, D, T), synchronous/asynchronous counters, shift registers',
      'Microprocessors: 8085 and 8086 architecture, assembly language programming, memory & peripheral interfacing (8255, 8253)',
      'Signal & Communication: Fourier & Laplace transforms, AM, FM, PM generation & detection',
      'Digital Communication: Nyquist sampling theorem (f_s ≥ 2f_max), quantization, PCM, Delta Modulation, ASK, FSK, PSK, QAM',
      'Electronic Measurements: Two-port networks (Z, Y, ABCD, h), bridges (Maxwell, Hay, Schering, Wien), digital meters',
      'Information Technology: Data structures (stacks, queues, trees), OOP C++/Java, OS process scheduling, OSI 7-layer model',
      'Railway S&T: Kavach Automatic Train Protection (SIL-4), Electronic Interlocking (EI), Multi-Section Digital Axle Counters (MSDAC)',
    ],
    keyFormulas: [
      'Nyquist Sampling Theorem: f_s ≥ 2 × f_max',
      'Op-Amp Inverting Gain: A_v = -R_f / R_in  |  Non-Inverting: A_v = 1 + (R_f / R_in)',
      'De Morgan’s Laws: (A + B)’ = A’ · B’  |  (A · B)’ = A’ + B’',
      'Transistor Current Relation: I_E = I_B + I_C  |  α = β / (1 + β)',
      'Kavach Safety Integrity Protocol: SIL-4 (< 1 error in 10,000 years)',
    ],
    summary: 'The critical nervous system of Indian Railways: Kavach train collision avoidance, automatic signaling, electronic interlocking, and telecommunications.',
    asciiTree: `                        ELECTRONICS & TELECOM TREE (100 MARKS)
                                     │
       ┌─────────────────────────────┼─────────────────────────────┐
       ▼                             ▼                             ▼
SEMICONDUCTOR CIRCUITS        DIGITAL & SYSTEMS             COMMUNICATION SYSTEMS
• BJT, MOSFET biasing         • 8085/8086 microprocessors   • Sampling & Quantization
• Op-Amp parameters           • Logic gate minimization     • PCM, ASK, FSK, PSK
• Filters & Oscillators       • Flip-Flops & Counters       • Kavach SIL-4 Protocol`,
  },
  {
    id: 'computers_it',
    name: 'Basics of Computers & IT Applications',
    hindiName: 'कंप्यूटर एवं सूचना प्रौद्योगिकी के मूल तत्व',
    category: 'allied',
    marks: '15 Marks (All Branches in CBT-2)',
    icon: Laptop,
    topics: [
      'Hardware Architecture: CPU processing subunits (ALU, Control Unit), L1/L2/L3 cache memory, RAM, ROM, PROM, EPROM, NVMe SSDs',
      'Operating Systems: Single vs multi-user OS, kernel functions, Windows vs Linux commands (grep, ls, chmod, sudo)',
      'Productivity Software: MS Office deep formulas (Excel VLOOKUP, XLOOKUP, data tables, charts, pivot tables)',
      'Networking Infrastructure: LAN, WAN, MAN, network topologies (Star, Mesh, Ring, Bus), data transmission pipelines',
      'IP Protocols: IPv4 (32-bit, dotted-decimal, Subnet Masks) vs IPv6 (128-bit hexadecimal)',
      'Cybersecurity & Web: Encryption basics, firewalls, malware profiles (Trojan horse, self-replicating Worms, Ransomware)',
    ],
    keyFormulas: [
      'OSI 7 Layers (Bottom-Up): Physical -> Data Link -> Network -> Transport -> Session -> Presentation -> Application',
      'IPv4: 32 bits (4 octets)  |  IPv6: 128 bits (8 groups of 4 hex digits)',
      'Storage Hierarchy: CPU Registers > L1 Cache > L2 Cache > L3 Cache > RAM > SSD / NVMe > HDD',
    ],
    summary: 'Mandatory scoring allied module for all engineering candidates in CBT-2. Covers computing infrastructure and railway IT operations.',
  },
  {
    id: 'environment_pollution',
    name: 'Environment & Pollution Control',
    hindiName: 'पर्यावरण एवं प्रदूषण नियंत्रण',
    category: 'allied',
    marks: '10 Marks (All Branches in CBT-2)',
    icon: Leaf,
    topics: [
      'Ecosystem Dynamics: Biosphere structure, biotic/abiotic factors, carbon & nitrogen biogeochemical cycles, ecological succession',
      'Air Pollution Control: PM2.5 & PM10 parameters, Electrostatic Precipitators (ESP removes 99%+ fly ash), Wet Scrubbers (SO₂ removal)',
      'Water Pollution Testing: Biochemical Oxygen Demand (BOD), Chemical Oxygen Demand (COD), Eutrophication mechanisms',
      'Industrial Wastewater: Primary, secondary (Activated Sludge Process), and tertiary effluent treatment plant workflows',
      'Solid & Hazardous Waste: E-waste, biomedical waste, sanitary landfills, incineration, pyrolysis, composting',
      'Global Climate Treaties: Greenhouse effect, Global Warming Potential (GWP), Acid rain (H₂SO₄ & HNO₃), Ozone depletion by CFCs (Dobson unit)',
      'International Accords: Montreal Protocol (1987 ODS phaseout), Kyoto Protocol (1997 Carbon credits), Paris Agreement (2015)',
    ],
    keyFormulas: [
      'BOD = (DO_initial - DO_final) × Dilution Factor',
      'Ozone Layer Measurement: 1 Dobson Unit (DU) = 0.01 mm thickness at STP',
      'Acid Rain Chemical Pathway: SO₂ + H₂O → H₂SO₃  |  2SO₂ + O₂ + 2H₂O → 2H₂SO₄',
      'Minamata Disease = Methylmercury (Hg)  |  Itai-Itai Disease = Cadmium (Cd)',
    ],
    summary: 'Mandatory allied module for all engineering disciplines in CBT-2. Focuses on environmental compliance, railway green initiatives, and pollution abatement.',
  },
];

export const JETechnicalPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('civil');
  const [showImageModal, setShowImageModal] = useState<boolean>(false);

  const activeData = DISCIPLINES.find((d) => d.id === selectedDiscipline) || DISCIPLINES[0];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'विशेष दक्षता' : 'Specialized Labs' },
          { label: language === 'hi' ? 'आरआरबी जेई तकनीकी हब एवं पाठ्यक्रम' : 'RRB JE Technical Engineering Hub' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white shadow-2xl relative overflow-hidden border border-purple-900/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-500/40">
              <Wrench className="w-3.5 h-3.5" />
              RRB JE CBT-2 150 Marks Comprehensive Engine
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <Sparkles className="w-3 h-3" />
              100 Technical + 50 Allied Marks
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
            {language === 'hi'
              ? 'आरआरबी जेई तकनीकी संकाय हब (CEN 04/2026 & 03/2024)'
              : 'RRB JE Technical Engineering Hub (CEN 04/2026 & 03/2024)'}
          </h1>

          <p className="text-xs sm:text-sm text-purple-200 max-w-3xl leading-relaxed">
            {language === 'hi'
              ? 'सिविल, मैकेनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स/एसएंडटी की 100 अंकों की तकनीकी शाखाएं एवं अनिवार्य संबद्ध विषय (कंप्यूटर 15 अंक एवं पर्यावरण नियंत्रण 10 अंक)।'
              : 'Mapped directly to the official 150-mark syllabus of RRB JE CBT-2. Core 100-mark engineering specializations alongside the mandatory allied modules (Basics of Computers 15M & Environment Control 10M).'}
          </p>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => setShowImageModal(true)}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-white/10"
            >
              <ImageIcon className="w-3.5 h-3.5 text-amber-300" />
              <span>{language === 'hi' ? 'प्रयोगशाला एवं फील्ड आरेख देखें' : 'View Engineering Laboratory Schematic'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Engineering Laboratory Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden p-2 border border-slate-700 shadow-2xl">
            <img
              src="./assets/rrb_science_engineering_lab.jpg"
              alt="Engineering Laboratory Schematic"
              className="w-full max-h-[85vh] object-contain rounded-2xl"
            />
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 text-white font-bold text-xs hover:bg-black/90 cursor-pointer"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

      {/* Discipline Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {DISCIPLINES.map((d) => {
          const Icon = d.icon;
          const isSelected = selectedDiscipline === d.id;
          return (
            <button
              key={d.id}
              onClick={() => setSelectedDiscipline(d.id)}
              className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-purple-600'}`} />
                <span className="text-xs font-bold truncate">{d.name.split(' ')[0]}</span>
              </div>
              <span className={`text-[10px] block font-mono font-medium ${isSelected ? 'text-purple-100' : 'text-slate-400'}`}>
                {d.marks}
              </span>
            </button>
          );
        })}
      </div>

      {/* Discipline Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Topics & Curriculum */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-mono">
                  {activeData.category === 'core' ? '100 Marks Engineering Core' : 'Mandatory Allied Module'}
                </span>
                <span className="text-[10px] font-bold text-slate-400 font-mono">
                  {activeData.marks}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {activeData.name} ({activeData.hindiName})
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800">
            {activeData.summary}
          </p>

          {/* ASCII Branch Architecture Diagram if present */}
          {activeData.asciiTree && (
            <div className="p-4 rounded-2xl bg-slate-950 text-emerald-400 font-mono text-[11px] overflow-x-auto border border-slate-800 shadow-inner space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 block pb-1 border-b border-slate-800">
                Official Engineering Discipline Tree
              </span>
              <pre className="whitespace-pre leading-relaxed font-mono">
                {activeData.asciiTree}
              </pre>
            </div>
          )}

          {/* Topics List */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-purple-600" />
              <span>Official Diploma Syllabus Modules ({activeData.topics.length} Chapters)</span>
            </h3>

            <div className="space-y-2 text-xs">
              {activeData.topics.map((top, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 font-medium flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{top}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Key Formulas & Direct Drill */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Calculator className="w-4 h-4 text-purple-600" />
                <span>Technical Formulas & Governing Laws</span>
              </h3>
              <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 font-mono">
                {activeData.keyFormulas.length} Formulas
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              {activeData.keyFormulas.map((form, fIdx) => (
                <div
                  key={fIdx}
                  className="p-3 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/50 font-mono font-semibold text-purple-950 dark:text-purple-200"
                >
                  {form}
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('questions')}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/30 transition-all cursor-pointer"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Practice {activeData.name.split(' ')[0]} Technical MCQs</span>
            </button>
          </div>

          {/* Quick Cross-Reference Card */}
          <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
            <span className="font-bold text-slate-800 dark:text-slate-200 block flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Need the complete cross-exam comparison?</span>
            </span>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              Compare RRB JE eligibility, marking scheme, and CBT-1 screening cutoff thresholds against NTPC Graduate and Group D in the Cross-Tier Matrix.
            </p>
            <button
              onClick={() => onNavigate('syllabus')}
              className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline pt-1 inline-block cursor-pointer"
            >
              Go to Full Syllabus & Cross-Tier Matrix →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
