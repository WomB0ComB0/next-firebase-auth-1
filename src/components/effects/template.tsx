"use client";
import { MotionDiv } from "@/components/constants/Motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const transition = { duration: 0.6, ease: "easeInOut" };

const blurVariants = {
  hidden: { backdropFilter: "blur(10px)", transition: { duration: 0.5 } },
  enter: { backdropFilter: "blur(0px)", transition: { duration: 0.5 } },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : ''
  );

  useEffect(() => {
    const handleRouteChange = () => {
      setPathname(typeof window !== 'undefined' ? window.location.pathname : '');
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handleRouteChange);

      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, []);

  return (
    <AnimatePresence key={`wait`}>
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={transition}
        key={pathname}
      >
        <MotionDiv
          style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0, zIndex: -1 }}
          variants={blurVariants}
          initial="hidden"
          animate="enter"
        >
          {children}
        </MotionDiv>
      </MotionDiv>
    </AnimatePresence>
  );
}
