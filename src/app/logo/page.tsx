'use client';

import { AnimatePresence, motion } from 'motion/react';

import crest from '../../../public/crest.png';
import { useEffect, useState } from 'react';

export default function LogoPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen">
      {!loading && (
        <motion.div
          layout
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h1 className="text-md md:text-3xl">Each Man a Foundation For</h1>
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-maroon uppercase font-bold shadow-lg">
              Excellence
            </h1>

            <h2 className="mt-20 md:text-xl">
              The University of Nevada, Reno Est. 2006
            </h2>
          </div>
        </motion.div>
      )}

      <AnimatePresence mode="popLayout">
        {/* Loading Screen */}
        {loading && (
          <motion.div
            key="loading-screen"
            className="flex items-center justify-center w-screen h-screen bg-white"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              className="w-32 sm:w-36"
              src={crest.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            <div className="flex flex-col items-center">
              <motion.h1
                className="text-xl font-bold uppercase"
                initial={{ opacity: 0, translateY: '-50%' }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Lambda Psi Rho
              </motion.h1>
              <motion.hr
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.h3
                className="text-lg"
                initial={{ opacity: 0, translateY: '50%' }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Fraternity, Inc.
              </motion.h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
