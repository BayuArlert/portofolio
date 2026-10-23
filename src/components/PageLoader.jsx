import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ onComplete, is3DReady = false }) => {
  const [progress, setProgress] = useState(10);
  const [statusText, setStatusText] = useState('Initializing creative engine...');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let currentProgress = 10;
    let timer = null;

    // Phase 1: Rapid progress from 10% to ~88%
    timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 88) {
          const step = Math.floor(Math.random() * 8) + 4;
          const next = Math.min(prev + step, 88);
          currentProgress = next;

          if (next > 65) {
            setStatusText('Rendering 3D room & lighting...');
          } else if (next > 35) {
            setStatusText('Loading workspace models & textures...');
          } else {
            setStatusText('Initializing creative engine...');
          }
          return next;
        }
        return prev;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Phase 2: Once 3D is confirmed loaded (or safety timeout), zoom to 100% and finish
  useEffect(() => {
    let timeout = null;
    let finishTimeout = null;

    if (is3DReady) {
      setStatusText('Ready! Welcome aboard.');
      setProgress(100);

      timeout = setTimeout(() => {
        setIsFinished(true);
        finishTimeout = setTimeout(() => {
          if (onComplete) onComplete();
        }, 500); // Wait for exit animation
      }, 350);
    } else {
      // Safety fallback: if 3D takes more than 7 seconds on slow network, unlock anyway
      const safetyFallback = setTimeout(() => {
        setStatusText('Entering portfolio...');
        setProgress(100);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
        }, 350);
      }, 7000);

      return () => clearTimeout(safetyFallback);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
      if (finishTimeout) clearTimeout(finishTimeout);
    };
  }, [is3DReady, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -50, 
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#faf9f6] p-4 select-none"
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
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
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
                  PREPARING 3D ENVIRONMENT
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
                    {statusText}
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
                    transition={{ ease: 'easeOut', duration: 0.15 }}
                  />
                </div>
              </div>

              {/* Status Footer Badge */}
              <div className="flex items-center justify-between pt-2 border-t-2 border-dashed border-gray-300 text-[11px] font-bold text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00bcd4] animate-pulse" />
                  3D Mini Room Engine
                </span>
                <span>{is3DReady ? '● Loaded' : '○ Loading 3D...'}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
