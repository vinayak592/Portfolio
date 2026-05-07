import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, description, image, tags, github, live }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative glass rounded-3xl overflow-hidden group border border-white/5 cursor-pointer h-full"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="relative overflow-hidden aspect-video"
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
          <motion.a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="w-12 h-12 bg-light text-dark rounded-full flex items-center justify-center text-xl shadow-xl"
          >
            <FiGithub />
          </motion.a>
          <motion.a 
            href={live} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="w-12 h-12 bg-accent-cyan text-dark rounded-full flex items-center justify-center text-xl shadow-xl"
          >
            <FiExternalLink />
          </motion.a>
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(50px)" }}
        className="p-8"
      >
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full border border-accent-cyan/20">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">{title}</h3>
        <p className="opacity-70 line-clamp-3 mb-6">{description}</p>
        
        <div className="flex items-center justify-between">
          <a href={live} className="font-bold text-sm border-b-2 border-accent-cyan pb-1 hover:text-accent-cyan transition-colors">
            View Project
          </a>
          <span className="text-2xl opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all">→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
