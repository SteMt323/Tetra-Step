import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AlertTriangle, Trash2, Users } from 'lucide-react';
import Background from '../assets/backSolution.webp';

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);

  const problems = [
    {
      icon: Trash2,
      stat: '30+ años',
      description: 'para degradarse un envase Tetra Pak',
    },
    {
      icon: AlertTriangle,
      stat: 'Millones',
      description: 'de envases desechados cada año',
    },
    {
      icon: Users,
      stat: 'Escasas',
      description: 'oportunidades laborales en comunidades vulnerables',
    },
  ];

  return (
    <section ref={ref} id="impacto" className="relative py-24 px-4 bg-slate-800 overflow-hidden">
      {/* Parallax background image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: Background ? `url(${Background})` : 'none',
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="text-green-500">El problema</span>{' '}
            <span className="text-white">que</span>{' '}
            <span className="text-blue-400">enfrentamos</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-700 flex items-center justify-center">
                <problem.icon className="text-neutral-50" size={32} />
              </div>
              <div className="text-3xl text-neutral-50 mb-2">
                {problem.stat}
              </div>
              <p className="text-white/80">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gradient-to-br  backdrop-blur-md border border-green-500/30 rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl"
        >
          <p className="text-xl text-white/90 leading-relaxed text-center">
            Cada año se desechan millones de envases Tetra Pak que tardan más de 30 años
            en degradarse. Su complejo proceso de reciclaje convencional y el gran volumen
            de desechos representan un serio problema ambiental. Al mismo tiempo,
            comunidades vulnerables enfrentan la falta de oportunidades laborales dignas.
            <span className="block mt-4 text-blue-400">
              Nuestra propuesta cambia ese destino, dándoles una segunda vida útil mientras
              impulsamos la inclusión social.
            </span>
          </p>
        </motion.div>

        {/* Visual separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mt-16"
        />
      </div>
    </section>
  );
}