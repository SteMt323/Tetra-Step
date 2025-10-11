import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyecto', href: '#proyecto' },
    { label: 'Impacto', href: '#impacto' },
    { label: 'Team', href: '#team' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-20 w-auto flex items-center">
                <img src={logo} alt="TetraStep" className="h-full w-auto object-contain" />
              </div>
              <div>
                <h3 className="text-white text-xl">TetraStep</h3>
                <p className="text-green-400 text-sm">Innovación que deja huella verde.</p>
              </div>
            </motion.div>
            <p className="text-white/70 max-w-md mb-4">
              Transformando envases Tetra Pak en productos sostenibles y generando
              oportunidades para comunidades vulnerables. Un paso a la vez hacia un
              futuro más verde.
            </p>
            <div className="flex items-center gap-2 text-white/60">
              <Mail size={16} />
              <a
                href="mailto:contacto@tetrastep.com"
                className="hover:text-blue-400 transition-colors"
              >
                contacto@tetrastep.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.substring(1));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-white/70 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white mb-4">Síguenos</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© 2025 TetraStep. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-green-500 to-orange-500" />
    </footer>
  );
}