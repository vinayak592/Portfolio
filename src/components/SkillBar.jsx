import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ name, level, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <span className="font-semibold">{name}</span>
        </div>
        <span className="text-sm font-code text-accent-cyan">{level}%</span>
      </div>
      <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="progress-bar-fill"
        />
      </div>
    </div>
  );
};

export default SkillBar;
