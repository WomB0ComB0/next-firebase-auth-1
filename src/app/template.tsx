import { MotionMain, MotionDiv } from "@/components/constants/Motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const blurVariants = {
  hidden: { backdropFilter: "blur(10px)", transition: { duration: 0.5 } },
  enter: { backdropFilter: "blur(0px)", transition: { duration: 0.5 } },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionMain
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      <MotionDiv
        style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0, zIndex: -1 }}
        variants={blurVariants}
        initial="hidden"
        animate="enter"
      />
      {children}
    </MotionMain>
  );
}
