import type { ErrorNote, MockTestResult } from '../types';

export const getStoredErrorNotes = (): ErrorNote[] => {
  try {
    const data = localStorage.getItem('rrb_error_notes');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveErrorNote = (note: ErrorNote): void => {
  try {
    const existing = getStoredErrorNotes();
    const updated = [note, ...existing.filter(n => n.questionId !== note.questionId)];
    localStorage.setItem('rrb_error_notes', JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save error note', err);
  }
};

export const removeErrorNote = (questionId: string): void => {
  try {
    const existing = getStoredErrorNotes();
    const filtered = existing.filter(n => n.questionId !== questionId);
    localStorage.setItem('rrb_error_notes', JSON.stringify(filtered));
  } catch (err) {
    console.error('Failed to remove error note', err);
  }
};

export const getStoredMockResults = (): MockTestResult[] => {
  try {
    const data = localStorage.getItem('rrb_mock_results');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveMockResult = (result: MockTestResult): void => {
  try {
    const existing = getStoredMockResults();
    const updated = [result, ...existing];
    localStorage.setItem('rrb_mock_results', JSON.stringify(updated.slice(0, 50)));
  } catch (err) {
    console.error('Failed to save mock result', err);
  }
};

export interface PETLog {
  date: string;
  runTimeSeconds: number;
  distanceMeters: number;
  weightPassed: boolean;
  notes: string;
}

export const getPETLogs = (): PETLog[] => {
  try {
    const data = localStorage.getItem('rrb_pet_logs');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const savePETLog = (log: PETLog) => {
  try {
    const existing = getPETLogs();
    localStorage.setItem('rrb_pet_logs', JSON.stringify([log, ...existing]));
  } catch (err) {
    console.error('Failed to save PET log', err);
  }
};

export const getRoadmapProgress = (): number[] => {
  try {
    const data = localStorage.getItem('rrb_roadmap_progress');
    return data ? JSON.parse(data) : [0];
  } catch {
    return [0];
  }
};

export const toggleRoadmapLevel = (level: number): number[] => {
  try {
    const current = getRoadmapProgress();
    const exists = current.includes(level);
    const updated = exists ? current.filter(l => l !== level) : [...current, level];
    localStorage.setItem('rrb_roadmap_progress', JSON.stringify(updated));
    return updated;
  } catch {
    return [0];
  }
};
