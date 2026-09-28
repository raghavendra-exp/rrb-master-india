import React, { useState, useEffect } from 'react';
import { Activity, Play, Pause, RotateCcw, Save, ShieldAlert, Award, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Breadcrumb } from '../layout/Breadcrumb';
import { getPETLogs, savePETLog, type PETLog } from '../../utils/storage';

export const PETLab: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();

  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [stopwatchSeconds, setStopwatchSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [weightCompleted, setWeightCompleted] = useState<boolean>(true);
  const [customDistance, setCustomDistance] = useState<number>(1000);
  const [notes, setNotes] = useState<string>('');
  const [savedLogs, setSavedLogs] = useState<PETLog[]>(getPETLogs());

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = window.setInterval(() => {
        setStopwatchSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const targetRunningTime = gender === 'male' ? 255 : 340; // 4m 15s (255s) or 5m 40s (340s)
  const weightRequired = gender === 'male' ? 35 : 20;

  const isCurrentRunPassing = stopwatchSeconds > 0 && stopwatchSeconds <= targetRunningTime;

  const handleSaveLog = () => {
    if (stopwatchSeconds === 0) return;
    const newEntry = {
      date: new Date().toLocaleDateString(),
      runTimeSeconds: stopwatchSeconds,
      distanceMeters: customDistance,
      weightPassed: weightCompleted,
      notes: notes || 'Standard track practice',
    };
    savePETLog(newEntry);
    setSavedLogs(getPETLogs());
    setNotes('');
  };

  const handleResetStopwatch = () => {
    setIsRunning(false);
    setStopwatchSeconds(0);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${String(remaining).padStart(2, '0')}`;
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'विशेष दक्षता' : 'Specialized Labs' },
          { label: language === 'hi' ? 'ग्रुप डी शारीरिक दक्षता लैब (PET)' : 'Group D Physical Preparation Lab (PET)' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5" />
            Official CEN RRC 01/2019 & Level-1 PET Standards
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'hi' ? 'आरआरबी ग्रुप डी शारीरिक तैयारी लैब' : 'RRB Group D Physical Preparation Lab'}
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200 mt-1 max-w-xl">
            {language === 'hi'
              ? 'आधिकारिक अधिसूचना मानदंडों पर आधारित टाइमर, गति ट्रैकर और 35 किग्रा/20 किग्रा वजन वहन लॉग।'
              : 'Grounded strictly in official Railway Recruitment Cell notifications. RFID run stopwatch & weight test log.'}
          </p>
        </div>

        {/* Gender Toggle */}
        <div className="flex p-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shrink-0">
          <button
            onClick={() => setGender('male')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              gender === 'male' ? 'bg-emerald-500 text-white shadow-xs' : 'text-slate-300 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'पुरुष अभ्यर्थी (Male)' : 'Male Standards'}
          </button>
          <button
            onClick={() => setGender('female')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              gender === 'female' ? 'bg-emerald-500 text-white shadow-xs' : 'text-slate-300 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'महिला / ट्रांसजेंडर (Female)' : 'Female Standards'}
          </button>
        </div>
      </div>

      {/* Official Criteria Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Weight Carrying Card */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              {language === 'hi' ? '1. वजन उठाने एवं ले जाने का परीक्षण' : '1. Weight Carrying Test'}
            </h3>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400">
              {weightRequired} kg for 100 meters
            </span>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
            <p>
              <strong>{language === 'hi' ? 'आधिकारिक मानदंड:' : 'Official Requirement:'}</strong>{' '}
              {gender === 'male'
                ? 'Should lift and carry 35 kg of weight for a distance of 100 meters in 2 minutes in ONE chance without putting the weight down on the ground.'
                : 'Should lift and carry 20 kg of weight for a distance of 100 meters in 2 minutes in ONE chance without putting the weight down on the ground.'}
            </p>
            <p className="text-[11px] text-red-500 font-medium">
              ⚠ Critical: If sandbag touches the ground before the 100m finish line, candidate is immediately disqualified!
            </p>
          </div>
        </div>

        {/* 1000m Running Card */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-500" />
              {language === 'hi' ? '2. 1000 मीटर दौड़ परीक्षण' : '2. 1000-Meter Running Test'}
            </h3>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400">
              {gender === 'male' ? '4 Mins 15 Secs' : '5 Mins 40 Secs'}
            </span>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
            <p>
              <strong>{language === 'hi' ? 'आधिकारिक समय सीमा:' : 'Official Time Limit:'}</strong>{' '}
              {gender === 'male'
                ? 'Run 1000 meters in 4 minutes 15 seconds (255 seconds) in one chance on synthetic/soil track with electronic RFID chip timing.'
                : 'Run 1000 meters in 5 minutes 40 seconds (340 seconds) in one chance on synthetic/soil track with electronic RFID chip timing.'}
            </p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
              ✓ Electronic chip tied to ankle accurately records start mat to finish mat elapsed time.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Stopwatch & Practice Logger */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Stopwatch Box */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {language === 'hi' ? 'लाइव रनिंग स्टॉपवॉच' : 'Live Running Stopwatch'}
            </span>
            <span className="text-xs font-mono font-semibold text-slate-500">
              Target: {formatTime(targetRunningTime)}
            </span>
          </div>

          {/* Time Display */}
          <div className="py-6">
            <div
              className={`text-6xl sm:text-7xl font-mono font-black tracking-tight ${
                stopwatchSeconds === 0
                  ? 'text-slate-800 dark:text-slate-100'
                  : isCurrentRunPassing
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-red-500'
              }`}
            >
              {formatTime(stopwatchSeconds)}
            </div>
            {stopwatchSeconds > 0 && (
              <div className="mt-2 text-xs font-bold uppercase tracking-widest">
                {isCurrentRunPassing ? (
                  <span className="text-emerald-600">Within Qualifying Limit ({targetRunningTime - stopwatchSeconds}s to spare)</span>
                ) : (
                  <span className="text-red-500">Exceeded Official Time Limit by {stopwatchSeconds - targetRunningTime}s</span>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`py-3 px-6 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md transition-all ${
                isRunning
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isRunning ? 'Pause Timer' : 'Start Running Timer'}</span>
            </button>

            <button
              onClick={handleResetStopwatch}
              className="py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>

          {/* Form for saving practice session */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                Distance Completed (Meters)
              </label>
              <input
                type="number"
                value={customDistance}
                onChange={(e) => setCustomDistance(Number(e.target.value))}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                {weightRequired}kg Weight Carry Practice
              </label>
              <select
                value={weightCompleted ? 'yes' : 'no'}
                onChange={(e) => setWeightCompleted(e.target.value === 'yes')}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              >
                <option value="yes">Successfully Carried 100m without dropping</option>
                <option value="no">Dropped before 100m / Incomplete</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <input
                type="text"
                placeholder="Track notes (e.g. Morning soil ground session, 2nd lap sprint)..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                onClick={handleSaveLog}
                disabled={stopwatchSeconds === 0}
                className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Practice Session to Log</span>
              </button>
            </div>
          </div>
        </div>

        {/* Practice History & Logs */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            {language === 'hi' ? 'आपकी हालिया पीईटी प्रैक्टिस हिस्ट्री' : 'Your Recent PET Training Log'}
          </h3>

          {savedLogs.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400">
              No practice runs saved yet. Use the stopwatch during your track drills to log your timing!
            </div>
          ) : (
            <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1 scrollbar-thin">
              {savedLogs.map((log: PETLog, idx: number) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-xs flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <span>{log.date}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-700 font-mono">
                        {log.distanceMeters}m
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 truncate max-w-[200px]">
                      {log.notes}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`font-mono font-bold text-sm ${
                        log.runTimeSeconds <= targetRunningTime ? 'text-emerald-600' : 'text-red-500'
                      }`}
                    >
                      {formatTime(log.runTimeSeconds)}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Weight: {log.weightPassed ? '✓ Passed' : '✗ Failed'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-[11px] text-amber-900 dark:text-amber-300 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <strong>Safety Reminder:</strong> Train progressively with proper running footwear on ground tracks.
              Hydrate well and consult a medical professional before starting intense sprint sessions.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
