import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Orbit } from 'lucide-react';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'button' | 'link' | 'canvas' | 'text'
  const [cursorText, setCursorText] = useState('');
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Posisi instan untuk dot tengah (0 lag)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Posisi halus bertempo spring untuk ring follower (efek elastis Awwwards)
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hanya aktifkan di perangkat dengan mouse/pointer presisi (bukan touch screen)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (!target) return;

      // Deteksi elemen interaktif
      if (target.closest('canvas')) {
        setCursorType('canvas');
        setCursorText('3D ORBIT');
      } else if (target.closest('a')) {
        setCursorType('link');
        setCursorText('EXPLORE');
      } else if (target.closest('button, [role="button"], .cursor-pointer')) {
        setCursorType('button');
        setCursorText('CLICK');
      } else if (target.closest('input, textarea')) {
        setCursorType('text');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  // Jika perangkat mobile / layar sentuh, jangan render apa-apa
  if (!isFinePointer) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999] overflow-hidden select-none">
      {/* ── 1. REAL-TIME CENTER DOT (Titik Presisi Langsung) ── */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#00bcd4] border border-black shadow-[1px_1px_0px_#000] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicked ? 0.6 : cursorType === 'default' ? 1 : 0.8,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* ── 2. SMOOTH NEO-BRUTALIST FOLLOWER (Ring / Pill Animasi) ── */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-mono font-black"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicked ? 0.88 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <AnimatePresence mode="wait">
          {cursorType === 'default' && (
            <motion.div
              key="default"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 rounded-full border-2 border-black bg-[#00bcd4]/10 shadow-[2px_2px_0px_0px_#000000] backdrop-blur-[1px]"
            />
          )}

          {cursorType === 'button' && (
            <motion.div
              key="button"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 400 }}
              className="px-3 py-1.5 rounded-full bg-[#00bcd4] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000000] text-[10px] tracking-wider uppercase flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span>{cursorText}</span>
            </motion.div>
          )}

          {cursorType === 'link' && (
            <motion.div
              key="link"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 400 }}
              className="px-3 py-1.5 rounded-full bg-[#a8f0dc] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000000] text-[10px] tracking-wider uppercase flex items-center gap-1.5"
            >
              <span>{cursorText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.div>
          )}

          {cursorType === 'canvas' && (
            <motion.div
              key="canvas"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 400 }}
              className="px-3.5 py-1.5 rounded-full bg-[#ffe600] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000000] text-[10px] tracking-wider uppercase flex items-center gap-1.5"
            >
              <Orbit className="w-3.5 h-3.5 animate-spin [animation-duration:4s]" />
              <span>{cursorText}</span>
            </motion.div>
          )}

          {cursorType === 'text' && (
            <motion.div
              key="text"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-1 h-6 bg-[#00bcd4] border border-black shadow-[1px_1px_0px_#000]"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CustomCursor;

