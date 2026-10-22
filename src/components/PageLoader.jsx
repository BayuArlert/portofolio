import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const statusMessages = [
    'Initializing creative engine...',
    'Loading 3D workspace assets...',
    'Tuning lo-fi audio vibes...',
    'Ready to rock! Welcome.'
  ];

  useEffect(() => {
    // Fast realistic progress ticker
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600); // Wait for exit animation
          }, 250);
          return 100;
        }

        // Variable increments for natural loading feel
        const diff = Math.floor(Math.random() * 12) + 6;
        const next = Math.min(prev + diff, 100);

        if (next > 75) setStatusIndex(3);
        else if (next > 45) setStatusIndex(2);
        else if (next > 20) setStatusIndex(1);

        return next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -40, 
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#faf9f6] p-4 select-none"
        >
          {/* Subtle background grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{
              backgroundImage: 'radial-gradient(#000000 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Neo-Brutalist Loader Modal Window */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative w-full max-w-md bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000000] overflow-hidden"
          >
            {/* Retro Window Titlebar */}
            <div className="bg-[#a8f0dc] border-b-4 border-black px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#e91e63] border-2 border-black" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff9800] border-2 border-black" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#4caf50] border-2 border-black" />
              </div>
              <span className="text-xs font-black tracking-wider text-black uppercase">
                bayu-system.sh
              </span>
              <div className="text-[10px] font-black bg-black text-white px-2 py-0.5 rounded-md">
                v2.5
              </div>
            </div>

            {/* Window Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Header Title */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffecb3] border-2 border-black rounded-full text-xs font-black text-black shadow-[2px_2px_0px_0px_#000000]">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  LOADING EXPERIENCE
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                  Agung Bayu Saputra
                </h2>
                <p className="text-xs sm:text-sm font-bold text-gray-600">
                  AI-Powered Builder & Full-Stack Engineer
                </p>
              </div>

              {/* Progress Bar Container */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-black">
                  <span className="text-gray-700 truncate mr-2">
                    {statusMessages[statusIndex]}
                  </span>
                  <span className="font-mono text-sm text-[#00bcd4] bg-black px-2 py-0.5 rounded-md text-white">
                    {progress}%
                  </span>
                </div>

                {/* Neo-brutalist Progress Bar */}
                <div className="w-full h-5 bg-gray-100 border-3 border-black rounded-xl overflow-hidden p-0.5 shadow-[2px_2px_0px_0px_#000000]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00bcd4] via-[#2196f3] to-[#9c27b0] rounded-lg"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'linear', duration: 0.1 }}
                  />
                </div>
              </div>

              {/* Status Footer Badge */}
              <div className="flex items-center justify-between pt-2 border-t-2 border-dashed border-gray-300 text-[11px] font-bold text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00bcd4] animate-pulse" />
                  Portfolio 2026
                </span>
                <span>Press any key or wait...</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
