import React, { useEffect, useMemo, useState } from 'react';
import { Rocket, Brain, Calendar, MessageCircle, BarChart3, Trophy, Bot, Headphones } from 'lucide-react';

const QuickAction = ({ icon: Icon, label, accent }) => (
  <button
    className={`group flex items-center gap-3 rounded-xl border p-4 bg-white dark:bg-[#0D1117] border-black/10 dark:border-white/10 hover:shadow-md transition hover:-translate-y-0.5`}
    style={{ boxShadow: `0 0 0 2px ${accent}20 inset` }}
  >
    <div
      className="grid place-items-center h-10 w-10 rounded-lg text-white"
      style={{ background: accent }}
    >
      <Icon className="h-5 w-5" />
    </div>
    <span className="font-semibold text-[#0D1117] dark:text-white">{label}</span>
  </button>
);

const ProgressBar = ({ value }) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <span className="text-sm font-semibold text-[#0D1117] dark:text-white">Progress Belajar</span>
      <span className="text-sm text-[#0D1117]/70 dark:text-white/70">{value}%</span>
    </div>
    <div className="h-3 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-[#007BFF] to-[#9D00FF] transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const DashboardMain = () => {
  const [progress, setProgress] = useState(36);
  const quotes = useMemo(
    () => [
      'Jangan stress, yang penting progress. 🚀',
      'Pelan tapi jalan. Yang penting konsisten. ✨',
      'Belajar itu maraton, bukan sprint. 🏃‍♂️',
      'Fokus dikit hari ini, panen besar besok. 🌱',
      'Salah itu wajar, yang penting coba lagi. 🔁',
    ],
    []
  );
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [quotes]);

  const actions = [
    { icon: Rocket, label: 'Latihan Soal SNBT/SNBP/US/UN', accent: '#007BFF' },
    { icon: Bot, label: 'AI Tutor (ChatGPT vibes)', accent: '#9D00FF' },
    { icon: Brain, label: 'Tes Psikologi & Jurusan', accent: '#7C3AED' },
    { icon: Calendar, label: 'Jadwal Belajar Otomatis', accent: '#10B981' },
    { icon: MessageCircle, label: 'Forum & Komunitas', accent: '#F59E0B' },
    { icon: BarChart3, label: 'Analisis Nilai & Laporan', accent: '#EC4899' },
    { icon: Trophy, label: 'Leaderboard & Poin', accent: '#06B6D4' },
    { icon: Headphones, label: 'AI Customer Service', accent: '#8B5CF6' },
  ];

  return (
    <div className="space-y-6">
      {/* Top widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border bg-white dark:bg-[#0D1117] border-black/10 dark:border-white/10 p-5">
          <ProgressBar value={progress} />
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="mt-4 w-full accent-[#007BFF]"
          />
        </div>
        <div className="rounded-2xl border bg-white dark:bg-[#0D1117] border-black/10 dark:border-white/10 p-5">
          <div className="text-sm font-semibold text-[#0D1117] dark:text-white">Motivasi Hari Ini</div>
          <p className="mt-2 text-[#0D1117]/80 dark:text-white/80">{quote}</p>
          <div className="mt-4 text-xs text-[#0D1117]/60 dark:text-white/60">Quote diacak tiap refresh biar vibes belajar tetep on.</div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="rounded-2xl border bg-white dark:bg-[#0D1117] border-black/10 dark:border-white/10 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-[#0D1117] dark:text-white">Quick Access</h3>
          <span className="text-xs text-[#0D1117]/60 dark:text-white/60">Semua fitur utama ada di sini</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {actions.map((a) => (
            <QuickAction key={a.label} icon={a.icon} label={a.label} accent={a.accent} />
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-2xl border bg-white dark:bg-[#0D1117] border-black/10 dark:border-white/10 p-5">
        <div className="mb-3 text-sm font-semibold text-[#0D1117] dark:text-white">Notifikasi Ringan</div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center justify-between rounded-lg bg-black/5 dark:bg-white/5 p-3">
            <span className="text-[#0D1117] dark:text-white">Reminder: Try out SNBT minggu ini, siapin 30 menit ya.</span>
            <span className="text-xs text-[#0D1117]/60 dark:text-white/60">Baru aja</span>
          </li>
          <li className="flex items-center justify-between rounded-lg bg-black/5 dark:bg:white/5 p-3">
            <span className="text-[#0D1117] dark:text-white">Progress naik 12% minggu ini. Nice one! 💪</span>
            <span className="text-xs text-[#0D1117]/60 dark:text-white/60">Kemarin</span>
          </li>
          <li className="flex items-center justify-between rounded-lg bg-black/5 dark:bg-white/5 p-3">
            <span className="text-[#0D1117] dark:text-white">Jadwal Belajar: Matematika 19.30 — 20.00</span>
            <span className="text-xs text-[#0D1117]/60 dark:text-white/60">Besok</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardMain;
