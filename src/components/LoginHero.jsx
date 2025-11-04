import React from 'react';
import Spline from '@splinetool/react-spline';
import { LogIn } from 'lucide-react';

const LoginHero = ({ onLogin }) => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-2xl shadow-lg">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center bg-gradient-to-b from-white/70 via-white/40 to-white/10 dark:from-[#0D1117]/70 dark:via-[#0D1117]/40 dark:to-[#0D1117]/10 pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full mx-auto backdrop-blur-md bg-white/60 dark:bg-[#0D1117]/60 border border-white/40 dark:border-white/10 rounded-2xl p-6 sm:p-8">
          <p className="text-sm tracking-wide font-semibold text-[#9D00FF]">DEX EDUCATION</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight text-[#0D1117] dark:text-white">
            Yo, balik lagi di DEX!<br />
            <span className="text-[#007BFF]">Siap gas belajar hari ini?</span>
          </h1>
          <p className="mt-3 text-[#0D1117]/70 dark:text-white/70">
            Platform edukasi kelas 12 semua jurusan. Belajar santai tapi nancep ⚡
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={onLogin}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#007BFF] px-4 py-3 font-semibold text-white shadow hover:brightness-110 active:brightness-95 transition"
            >
              <LogIn className="h-5 w-5" />
              Masuk / Daftar pakai Email
            </button>
            <button
              onClick={onLogin}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#0D1117] dark:bg-[#0D1117] dark:text-white border border-black/10 dark:border-white/10 px-4 py-3 font-semibold shadow-sm hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="google" className="h-5 w-5" />
              Lanjut dengan Google
            </button>
          </div>

          <div className="mt-4 text-xs text-[#0D1117]/60 dark:text-white/60">
            Login dummy untuk demo. Nanti bisa dihubungkan ke akun Google beneran.
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginHero;
