import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Sparkles, Shield, Leaf } from 'lucide-react';
import Background from '../assets/backRecycle.jpg';

export function SolutionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-50px', '50px']);

  const benefits = [
    {
      icon: Shield,
      title: 'Durabilidad',
      description: 'Material resistente y de larga vida útil',
    },
    {
      icon: Sparkles,
      title: 'Confort',
      description: 'Diseño ergonómico adaptado a tu pisada',
    },
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      description: 'Reduce significativamente la huella de carbono',
    },
    {
      icon: CheckCircle2,
      title: 'Impacto social',
      description: 'Genera empleo digno en comunidades locales',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 px-4 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Parallax decorations */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['50px', '-50px']) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="text-green-400">Nuestra</span>{' '}
            <span className="text-white">solución</span>{' '}
            <span className="text-blue-400">innovadora</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src= {Background}
                alt="Proceso artesanal"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-3xl">100%</div>
              <div className="text-sm">Reciclado</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Usamos tecnología artesanal para convertir el material polyAl y la fibra de
              Tetra Pak en plantillas personalizadas, ligeras, resistentes y cómodas.
              <span className="block mt-4 text-green-400">
                Cada par fabricado reduce la contaminación y crea empleo digno para quienes
                más lo necesitan.
              </span>
            </p>

            {/* Process steps */}
            <div className="space-y-4">
              {[
                'Recolección selectiva de envases Tetra Pak',
                'Proceso de limpieza y separación de capas',
                'Transformación artesanal del material',
                'Diseño ergonómico personalizado',
                'Control de calidad y acabado final',
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400">{index + 1}</span>
                  </div>
                  <span>{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <benefit.icon className="text-green-400 mb-3" size={28} />
              <h4 className="text-white mb-2">{benefit.title}</h4>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}