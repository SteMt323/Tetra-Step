import { motion } from 'framer-motion';
import { Button } from './ui/buttom';
import { Mail, Heart, Users } from 'lucide-react';

export function CTASection() {
  return (
    <section id="contacto" className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main CTA */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="text-green-400">Camina</span>{' '}
              <span className="text-white">hacia el</span>{' '}
              <span className="text-blue-400">cambio.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              Súmate al reciclaje que{' '}
              <span className="text-green-400">transforma vidas</span>
            </p>
          </motion.div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Heart,
                title: 'Apóyanos',
                description: 'Contribuye a nuestra causa',
                color: 'from-yellow-600 to-yellow-700',
              },
              {
                icon: Users,
                title: 'Colabora',
                description: 'Únete a nuestro equipo',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Mail,
                title: 'Contáctanos',
                description: 'Hablemos sobre el proyecto',
                color: 'from-green-500 to-green-600',
              },
            ].map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center`}>
                  <action.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl text-white mb-2">{action.title}</h3>
                <p className="text-white/70 text-sm">{action.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-700 to-yellow-600 hover:from-orange-700 hover:to-orange-600 text-white border-none shadow-2xl hover:shadow-orange-500/50 transition-all text-lg px-10 py-6"
            >
              Apóyanos
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-none shadow-2xl hover:shadow-blue-500/50 transition-all text-lg px-10 py-6"
            >
              Quiero colaborar
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 text-white/70"
          >
            <p className="mb-2">¿Tienes preguntas? Escríbenos</p>
            <a
              href="mailto:contacto@tetrastep.com"
              className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
            >
              contacto@tetrastep.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}