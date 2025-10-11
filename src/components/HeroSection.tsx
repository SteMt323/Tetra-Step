import { useRef } from 'react';
import { color, motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/buttom';
import { ChevronDown } from 'lucide-react';
import Background from '../assets/backgrounHero.png';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const scrollToNext = () => {
    const element = document.getElementById('proyecto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="inicio" ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background Layers */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: Background ? `url(${Background})` : 'none',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/60 to-green-900/80" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-20 right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            <span className='text-yellow-500'>Del residuo</span>{' '}
            <span className="text-white">al paso:</span>{' '}
            <span className="text-green-400">innovación</span>{' '}
            <span className="text-white">que</span>{' '}
            <span className="text-blue-400">camina</span>{' '}
            <span className="text-white">contigo</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto"
          >
            Convertimos envases Tetra Pak en plantillas y suelas personalizadas,
            generando empleo y sostenibilidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={scrollToNext}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-none shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6"
            >
              Conoce cómo funciona
            </Button>
            <Button
              size="lg"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6"
            >
              Apoya nuestra misión
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown size={40} />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
