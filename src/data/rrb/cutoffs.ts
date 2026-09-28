export interface CutoffRecord {
  id: string;
  exam: string;
  stage: string;
  rrb: string;
  post: string;
  ur: number;
  obc: number;
  sc: number;
  st: number;
  ews: number;
  esm: number;
  year: string;
  sourceNote: string;
}

export const CUTOFFS_DATA: CutoffRecord[] = [
  // NTPC CBT-1 Normalized Cutoffs (Out of 100)
  {
    id: 'CUT-NTPC-CDG-CBT1',
    exam: 'RRB NTPC',
    stage: 'CBT-1 (Normalized Marks / 100)',
    rrb: 'RRB Chandigarh',
    post: 'Station Master (Level 6 Shortlist)',
    ur: 74.28,
    obc: 68.92,
    sc: 64.15,
    st: 59.80,
    ews: 67.41,
    esm: 40.12,
    year: 'CEN 01/2019 Cycle',
    sourceNote: 'Official RRB Chandigarh CBT-1 Cutoff Notification',
  },
  {
    id: 'CUT-NTPC-MUM-CBT1',
    exam: 'RRB NTPC',
    stage: 'CBT-1 (Normalized Marks / 100)',
    rrb: 'RRB Mumbai',
    post: 'Goods Guard / Train Manager (Level 5)',
    ur: 67.54,
    obc: 63.22,
    sc: 57.80,
    st: 48.90,
    ews: 56.12,
    esm: 40.05,
    year: 'CEN 01/2019 Cycle',
    sourceNote: 'Official RRB Mumbai CBT-1 Cutoff Sheet',
  },
  {
    id: 'CUT-NTPC-SEC-CBT1',
    exam: 'RRB NTPC',
    stage: 'CBT-1 (Normalized Marks / 100)',
    rrb: 'RRB Secunderabad',
    post: 'Commercial cum Ticket Clerk (Level 3)',
    ur: 78.45,
    obc: 74.10,
    sc: 66.85,
    st: 64.30,
    ews: 72.50,
    esm: 42.18,
    year: 'CEN 01/2019 Cycle',
    sourceNote: 'Official RRB Secunderabad Notice',
  },
  {
    id: 'CUT-NTPC-ALD-CBT1',
    exam: 'RRB NTPC',
    stage: 'CBT-1 (Normalized Marks / 100)',
    rrb: 'RRB Prayagraj (Allahabad)',
    post: 'Junior Clerk cum Typist (Level 2)',
    ur: 80.12,
    obc: 76.54,
    sc: 70.21,
    st: 62.45,
    ews: 75.30,
    esm: 41.50,
    year: 'CEN 01/2019 Cycle',
    sourceNote: 'Official RRB Prayagraj Score Publication',
  },

  // Group D Percentile / Normalized Cutoffs
  {
    id: 'CUT-GRPD-NR-PET',
    exam: 'RRB Group D',
    stage: 'CBT Shortlist for PET (Normalized / Percentile)',
    rrb: 'Northern Railway (Chandigarh)',
    post: 'Level 1 Track Maintainer & Assistant',
    ur: 70.98,
    obc: 64.77,
    sc: 60.08,
    st: 50.18,
    ews: 57.75,
    esm: 40.01,
    year: 'CEN RRC 01/2019',
    sourceNote: 'Official RRC Northern Railway PET Cutoff Declaration',
  },
  {
    id: 'CUT-GRPD-WR-PET',
    exam: 'RRB Group D',
    stage: 'CBT Shortlist for PET (Normalized / Percentile)',
    rrb: 'Western Railway (Ahmedabad)',
    post: 'Level 1 Workshop & Pointsman',
    ur: 62.67,
    obc: 58.43,
    sc: 50.87,
    st: 49.18,
    ews: 51.66,
    esm: 40.00,
    year: 'CEN RRC 01/2019',
    sourceNote: 'Official RRC Western Railway PET Cutoff Declaration',
  },

  // RRB JE CBT-1 Screening
  {
    id: 'CUT-JE-SEC-CBT1',
    exam: 'RRB JE',
    stage: 'CBT-1 Screening (Normalized / 100)',
    rrb: 'RRB Secunderabad',
    post: 'JE Civil Engineering (CBT-2 Qualifying)',
    ur: 65.40,
    obc: 61.20,
    sc: 54.30,
    st: 51.10,
    ews: 58.70,
    esm: 40.00,
    year: 'CEN 03/2018 / 2019',
    sourceNote: 'Official RRB Secunderabad JE Result Notice',
  },
  {
    id: 'CUT-JE-KOL-CBT1',
    exam: 'RRB JE',
    stage: 'CBT-1 Screening (Normalized / 100)',
    rrb: 'RRB Kolkata',
    post: 'JE Mechanical & Electrical',
    ur: 68.80,
    obc: 63.50,
    sc: 56.40,
    st: 50.20,
    ews: 60.10,
    esm: 40.00,
    year: 'CEN 03/2018 / 2019',
    sourceNote: 'Official RRB Kolkata JE Result Notice',
  },
];
