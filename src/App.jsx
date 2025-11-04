import React, { useEffect, useState } from 'react';
import { Sun, Moon, User } from 'lucide-react';
import LoginHero from './components/LoginHero';
import DashboardMain from './components/DashboardMain';
import AITutorChat from './components/AITutorChat';
import FooterBar from './components/FooterBar';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('dex_logged_in') === '1';
  });
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('dex_theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('dex_theme', dark ? 'dark' : 'light');
  }, [dark]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('dex_logged_in', '1');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('dex_logged_in');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] dark:bg-[#0B0F14]">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#0D1117]/60 bg-white/80 dark:bg-[#0D1117]/80 border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#007BFF] to-[#9D00FF]" />
            <div className="font-extrabold tracking-tight text-[#0D1117] dark:text-white">DEX EDUCATION</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center gap-2 rounded-xl border bg-white dark:bg-[#0D1117] border-black/10 dark:border-white/10 px-3 py-2 text-sm font-medium text-[#0D1117] dark:text-white"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {dark ? 'Light' : 'Dark'} Mode
            </button>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-xl bg-[#007BFF] text-white px-3 py-2 text-sm font-semibold"
              >
                <User className="h-4 w-4" /> Logout
              </button>
            ) : null}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        {!isLoggedIn ? (
          <LoginHero onLogin={handleLogin} />
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#0D1117] dark:text-white">Dashboard</h2>
              <p className="text-sm text-[#0D1117]/70 dark:text-white/70">Selamat datang kembali! Yuk lanjutkan progress belajar kamu 💪</p>
            </div>
            <DashboardMain />
          </>
        )}
        <FooterBar />
      </main>

      {isLoggedIn && <AITutorChat />}
    </div>
  );
};

export default App;
