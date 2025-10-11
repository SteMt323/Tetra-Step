import { motion } from 'framer-motion';
import { Recycle, Footprints, Heart } from 'lucide-react';

export function PresentationSection() {
  const features = [
    {
      icon: Recycle,
      title: '+100 envases reciclados',
      description: 'por cada par de suelas',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Footprints,
      title: 'Diseño ergonómico',
      description: 'y personalizable',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Heart,
      title: 'Hecho por manos locales',
      description: 'con impacto ambiental positivo',
      color: 'from-yellow-600 to-yellow-700',
    },
  ];

  return (
    <section id="proyecto" className="relative py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="text-blue-400">Innovación</span>{' '}
            <span className="text-white">que</span>{' '}
            <span className="text-green-400">transforma</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            TetraStep es más que un proyecto de reciclaje. Es una iniciativa que combina
            innovación tecnológica artesanal con impacto social, transformando residuos
            difíciles de reciclar en productos útiles y cómodos, mientras generamos
            oportunidades de empleo digno para comunidades vulnerables.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-lg">
                  {feature.description}
                </p>

                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 via-green-600/20 to-orange-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-white/90 leading-relaxed">
              Nuestro enfoque artesanal combina técnicas tradicionales con innovación
              moderna, asegurando que cada producto no solo sea sostenible, sino también
              de la más alta calidad. Cada paso que das con TetraStep es un paso hacia
              un futuro más verde y equitativo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}