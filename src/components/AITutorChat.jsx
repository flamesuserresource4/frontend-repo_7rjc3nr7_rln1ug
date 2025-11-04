import React, { useState } from 'react';
import { Bot, Send } from 'lucide-react';

const AITutorChat = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hai! Aku AI Tutor DEX 🤖. Tanyain apa aja — konsep, contoh soal, atau ringkasan materi.' },
  ]);
  const [input, setInput] = useState('Jelasin konsep integral substitusi.');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    // Placeholder AI response (bisa disambungkan ke API nanti)
    setTimeout(() => {
      let reply = 'Oke! Integral substitusi adalah teknik mengganti variabel agar bentuk integral jadi lebih sederhana.';
      if (/integral/i.test(userMsg.content)) {
        reply += ' Caranya: (1) Pilih u = f(x) yang bikin sederhana, (2) hitung du = f\'(x) dx, (3) ubah integral ke bentuk u, (4) integralkan dan kembalikan ke x.';
      }
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 w-[90vw] sm:w-[380px] rounded-2xl border bg-white dark:bg-[#0D1117] border-black/10 dark:border-white/10 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/10 dark:border-white/10">
        <div className="h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-[#007BFF] to-[#9D00FF] text-white">
          <Bot className="h-4 w-4" />
        </div>
        <div>
          <div className="text-sm font-semibold text-[#0D1117] dark:text-white">AI Tutor</div>
          <div className="text-xs text-[#0D1117]/60 dark:text-white/60">Ngobrol santai, belajar efektif ✨</div>
        </div>
      </div>

      <div className="max-h-72 overflow-y-auto p-3 space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`rounded-xl px-3 py-2 text-sm ${
              m.role === 'assistant'
                ? 'bg-black/5 dark:bg-white/5 text-[#0D1117] dark:text-white'
                : 'bg-[#007BFF] text-white ml-auto max-w-[80%]'
            }`}
          >
            {m.content}
          </div>
        ))}
        {loading && (
          <div className="rounded-xl px-3 py-2 text-sm bg-black/5 dark:bg-white/5 text-[#0D1117] dark:text-white">
            Lagi mikir jawaban... ⏳
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 p-3 border-t border-black/10 dark:border-white/10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 rounded-xl bg-black/5 dark:bg-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF] text-[#0D1117] dark:text-white placeholder:text-[#0D1117]/50 dark:placeholder:text-white/50"
          placeholder="Tanya apa aja..."
        />
        <button
          onClick={handleSend}
          className="grid place-items-center h-9 w-9 rounded-xl bg-[#007BFF] text-white hover:brightness-110 active:brightness-95"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AITutorChat;
