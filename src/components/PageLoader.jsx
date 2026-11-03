import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  SIGNATURE_PATH_D,
  SIGNATURE_VIEWBOX,
  SIGNATURE_WIDTH,
  SIGNATURE_HEIGHT,
} from './signature-path';

// Helper to generate a repeating seamless SVG sine wave path
const createWavePath = (cycles, cycleWidth, waveHeight, totalHeight = 1300) => {
  let d = 'M 0 0 ';
  for (let i = 0; i < cycles; i++) {
    const half = cycleWidth / 2;
    const quarter = half / 2;
    d += `q ${quarter} ${-waveHeight} ${half} 0 t ${half} 0 `;
  }
  const totalW = cycles * cycleWidth;
  return {
    filledPath: `${d} L ${totalW} ${totalHeight} L 0 ${totalHeight} Z`,
    strokePath: `${d} L ${totalW} 0`,
    totalWidth: totalW,
  };
};

// Front wave (386px per cycle, 12 cycles) & Back wave (514.6px per cycle, 10 cycles) for 1544px width
const FRONT_WAVE = createWavePath(12, 386, 22, 1300);
const BACK_WAVE = createWavePath(10, 514.6, 17, 1300);

const PageLoader = ({ onComplete, is3DReady = false }) => {
  const [progress, setProgress] = useState(0);
  const [statusLog, setStatusLog] = useState('01 // INITIALIZING FLUID DYNAMICS');
  const [startOutro, setStartOutro] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // ── Real-time Digital Clock (WIB) ──
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('id-ID', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' WIB'
      );
    };
    updateTime();
    const clockInterval = setInterval(updateTime, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  // ── Liquid Fill Progress Loop (0% -> 88%) ──
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 88) {
          const step = Math.floor(Math.random() * 5) + 3;
          const next = Math.min(prev + step, 88);

          if (next > 65) setStatusLog('03 // HYDRATING 3D SPLINE SHADERS & MESHES');
          else if (next > 35) setStatusLog('02 // FILLING SIGNATURE WITH HYDRAULIC INK');
          else setStatusLog('01 // INITIALIZING FLUID DYNAMICS');

          return next;
        }
        return prev;
      });
    }, 75);

    return () => clearInterval(interval);
  }, []);

  // ── Finish when 3D is Ready (or safety fallback) ──
  useEffect(() => {
    let t1;
    const completeSequence = () => {
      setProgress(100);
      setStatusLog('04 // SIGNATURE VERIFIED · ACCESS GRANTED');

      t1 = setTimeout(() => {
        setStartOutro(true);
      }, 450);
    };

    if (is3DReady) {
      completeSequence();
    } else {
      const fallback = setTimeout(completeSequence, 6500);
      return () => clearTimeout(fallback);
    }

    return () => clearTimeout(t1);
  }, [is3DReady]);

  // Kalkulasi ketinggian air (water level Y):
  // Signature viewBox: 1544x1088. Stroke berada di antara Y=160 dan Y=931.
  // 0% -> Y=990 (di bawah garis stroke), 100% -> Y=110 (di atas puncak loop)
  const waterLevelY = 990 - (progress / 100) * 880;

  // Format 3-digit: '000', '042', '100'
  const formattedCount = String(progress).padStart(3, '0');

  // Easing Awwwards
  const awwwardsEase = [0.76, 0, 0.24, 1];

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={startOutro ? { y: '-100%' } : { y: 0 }}
      transition={{
        duration: 0.95,
        ease: awwwardsEase,
        delay: 0.12,
      }}
      onAnimationComplete={() => {
        if (startOutro && onComplete) onComplete();
      }}
      className="fixed inset-0 h-[100dvh] w-full z-[999] overflow-hidden select-none pointer-events-auto bg-[#07080d] text-white flex flex-col justify-between p-4 sm:p-6 md:p-10 font-mono border-b-4 border-[#00bcd4] shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
      style={{ willChange: 'transform' }}
    >
      {/* ── AMBIENT ATMOSPHERE ── */}
      {/* 1. Subtle Cyber Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 2. Liquid Radial Glow behind Signature */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[640px] h-[320px] sm:h-[420px] pointer-events-none rounded-full blur-[60px] sm:blur-[85px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [
            0.18 + (progress / 100) * 0.25,
            0.28 + (progress / 100) * 0.35,
            0.18 + (progress / 100) * 0.25,
          ],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle, rgba(0, 188, 212, 0.5) 0%, rgba(33, 150, 243, 0.2) 45%, transparent 70%)',
        }}
      />

      {/* 3. Concentric Water Ripple Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[200, 320, 480].map((size, idx) => (
          <motion.div
            key={idx}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00bcd4]/10"
            style={{ width: size, height: size }}
            animate={{
              scale: [0.95, 1.05, 0.95],
              opacity: [0.05, 0.14, 0.05],
            }}
            transition={{
              duration: 4 + idx,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: idx * 0.8,
            }}
          />
        ))}
      </div>

      {/* ── TOP HUD ── */}
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={startOutro ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: awwwardsEase }}
        className="relative z-10 flex items-center justify-between text-xs tracking-wider shrink-0"
      >
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#00bcd4] border border-black shadow-[1.5px_1.5px_0px_#00bcd4] animate-pulse shrink-0" />
          <span className="font-black text-white uppercase tracking-wider text-[10px] sm:text-xs truncate max-w-[140px] sm:max-w-none">
            AGUNG BAYU SAPUTRA
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] bg-white/10 text-[#00bcd4] border border-[#00bcd4]/30 rounded shrink-0">
            AUTOGRAPH SYNTHESIS
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {currentTime && (
            <span className="text-[10px] sm:text-xs text-white/40 hidden md:inline font-mono">
              {currentTime}
            </span>
          )}
          <span
            className={`text-[9px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 font-bold border-2 border-black rounded transition-colors duration-300 ${
              is3DReady
                ? 'bg-[#4caf50] text-black shadow-[2px_2px_0px_#000]'
                : 'bg-[#ff9800] text-black shadow-[2px_2px_0px_#000]'
            }`}
          >
            {is3DReady ? '● 3D READY' : '○ SYNCING...'}
          </span>
        </div>
      </motion.header>

      {/* ── CENTER: THE LIQUID SIGNATURE HERO ── */}
      <motion.div
        initial={{ opacity: 1, y: 0, scale: 1 }}
        animate={
          startOutro
            ? { opacity: 0, y: -60, scale: 0.96 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={{ duration: 0.5, ease: awwwardsEase }}
        className="relative z-10 flex flex-col items-center justify-center my-auto w-full px-2"
      >
        {/* Top Tag */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/5 border border-white/10 rounded-full mb-2 sm:mb-3 text-[9px] sm:text-xs text-white/60 tracking-[0.18em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00bcd4] animate-ping" />
          <span>Hydraulic Signature Fill</span>
        </div>

        {/* SVG Signature Display with Liquid Waves */}
        <div
          className="relative w-[min(520px,88vw)] max-h-[38vh] flex items-center justify-center"
          style={{ aspectRatio: `${SIGNATURE_WIDTH} / ${SIGNATURE_HEIGHT}` }}
        >
          <svg
            viewBox={SIGNATURE_VIEWBOX}
            className="w-full h-full overflow-visible drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
          >
            <defs>
              {/* 1. Mask Tanda Tangan Halus dari User */}
              <clipPath id="signature-clip" clipPathUnits="userSpaceOnUse">
                <path d={SIGNATURE_PATH_D} clipRule="evenodd" fillRule="evenodd" />
              </clipPath>

              {/* 2. Liquid Gradients */}
              <linearGradient id="front-wave-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#26c6da" />
                <stop offset="40%" stopColor="#00bcd4" />
                <stop offset="100%" stopColor="#00838f" />
              </linearGradient>

              <linearGradient id="back-wave-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0097a7" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#006064" stopOpacity="0.4" />
              </linearGradient>

              <linearGradient id="full-liquid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00e5ff" />
                <stop offset="50%" stopColor="#00bcd4" />
                <stop offset="100%" stopColor="#2979ff" />
              </linearGradient>

              {/* 3. Water Crest Glow Filter */}
              <filter id="wave-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ── LAYER A: GHOST BLUEPRINT (OUTLINE TANDA TANGAN HALUS) ── */}
            <path
              d={SIGNATURE_PATH_D}
              fill="rgba(255, 255, 255, 0.04)"
              stroke="rgba(0, 188, 212, 0.35)"
              strokeWidth="3.5"
              fillRule="evenodd"
            />

            {/* ── LAYER B: LIQUID WATER WAVES (CLIPPED STRICTLY TO SIGNATURE) ── */}
            <g clipPath="url(#signature-clip)">
              {/* Baseline ambient tint */}
              <rect
                x="0"
                y="0"
                width={SIGNATURE_WIDTH}
                height={SIGNATURE_HEIGHT}
                fill="rgba(0, 188, 212, 0.06)"
              />

              {/* THE RISING WATER GROUP (Naik dari bawah ke atas) */}
              <motion.g
                animate={{ y: waterLevelY }}
                transition={{
                  type: 'spring',
                  damping: 24,
                  stiffness: 70,
                  mass: 0.6,
                }}
              >
                {/* 1. BACK WAVE (Gelombang Dalam - Teal Gelap) */}
                <motion.path
                  d={BACK_WAVE.filledPath}
                  fill="url(#back-wave-grad)"
                  animate={{ x: [-1029.2, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* 2. FRONT WAVE (Gelombang Depan - Cyan Terang) */}
                <motion.path
                  d={FRONT_WAVE.filledPath}
                  fill="url(#front-wave-grad)"
                  animate={{ x: [0, -772] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* 3. WAVE CREST HIGHLIGHT (Garis Buih Berkilau di Permukaan Air) */}
                <motion.path
                  d={FRONT_WAVE.strokePath}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  strokeOpacity="0.95"
                  filter="url(#wave-glow)"
                  animate={{ x: [0, -772] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* 4. Rising Micro Bubbles */}
                {[
                  { cx: 380, delay: 0 },
                  { cx: 720, delay: 0.4 },
                  { cx: 1080, delay: 0.9 },
                  { cx: 1320, delay: 1.4 },
                ].map((b, i) => (
                  <motion.circle
                    key={i}
                    cx={b.cx}
                    cy={20}
                    r={5}
                    fill="#ffffff"
                    opacity={0.65}
                    animate={{
                      y: [80, -20],
                      opacity: [0.8, 0],
                      scale: [0.8, 1.5],
                    }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: b.delay,
                    }}
                  />
                ))}
              </motion.g>
            </g>

            {/* ── LAYER C: 100% COMPLETE RADIANT BURST ── */}
            <motion.path
              d={SIGNATURE_PATH_D}
              fill="url(#full-liquid-grad)"
              fillRule="evenodd"
              initial={{ opacity: 0 }}
              animate={{ opacity: progress === 100 ? 1 : 0 }}
              transition={{ duration: 0.35 }}
              style={{
                filter:
                  'drop-shadow(0 0 22px rgba(0, 229, 255, 0.85)) drop-shadow(0 0 45px rgba(0, 188, 212, 0.5))',
              }}
            />
          </svg>
        </div>

        {/* ── SIGNATURE OWNER TITLE & PROGRESS SUB-BAR ── */}
        <div className="w-full max-w-xs sm:max-w-sm mt-2 sm:mt-3 px-2 text-center">
          <div className="text-white text-sm sm:text-base md:text-lg font-black tracking-tight">
            Agung Bayu Saputra
          </div>
          <div className="text-[#00bcd4]/70 text-[10px] sm:text-[11px] font-mono tracking-wider">
            AI-POWERED BUILDER · FULL-STACK
          </div>

          <div className="flex justify-between items-center text-[9px] sm:text-xs tracking-wider text-white/50 pt-1">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00bcd4]" />
              FLUID LEVEL
            </span>
            <span className="font-bold text-[#00bcd4] font-mono">{progress}%</span>
          </div>

          {/* Segmented Liquid Gauge */}
          <div className="w-full h-2 sm:h-2.5 bg-black/80 border-2 border-white/20 p-0.5 rounded-sm shadow-[2px_2px_0px_0px_rgba(0,188,212,0.2)]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00bcd4] via-[#26c6da] to-[#00e5ff]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.15 }}
            />
          </div>
        </div>
      </motion.div>

      {/* ── BOTTOM HUD ── */}
      <motion.footer
        initial={{ opacity: 1, y: 0 }}
        animate={startOutro ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: awwwardsEase }}
        className="relative z-10 flex items-end justify-between gap-2 pt-2.5 sm:pt-4 border-t border-white/10 shrink-0"
      >
        {/* Diagnostics Ticker */}
        <div className="space-y-0.5 sm:space-y-1 min-w-0 pr-2">
          <div className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest truncate">
            Fluidic Diagnostics
          </div>
          <div className="text-[11px] sm:text-sm text-[#00bcd4] font-medium flex items-center gap-1.5 truncate">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00bcd4] animate-ping shrink-0" />
            <span className="truncate">{statusLog}</span>
          </div>
        </div>

        {/* Giant Monospace Numeric Counter */}
        <div className="flex items-baseline gap-1 sm:gap-2 shrink-0">
          <span className="text-[10px] sm:text-xs text-white/40 tracking-widest">[ CAP ]</span>
          <span className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-mono">
            {formattedCount}
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#00bcd4]">%</span>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default PageLoader;
