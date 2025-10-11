import { motion } from 'framer-motion';

type Member = {
  name: string;
  role: string;
  bio?: string;
  color?: string; // tailwind gradient or bg color
};

const members: Member[] = [
  { name: 'Johaneris Avalos', role: 'Coordinadora del proyecto', bio: 'Líder del equipo y responsable de alianzas comunitarias.', color: 'from-blue-500 to-blue-600' },
  { name: 'Glenny Guerrero', role: 'Asesora Legal', bio: 'Orientación y encargado de asuntos legales.', color: 'from-green-500 to-green-600' },
  { name: 'Steven Mejía', role: 'Desarrollador', bio: 'Encargado del área de TIy desarrollo.', color: 'from-yellow-500 to-yellow-600' },
  { name: 'Valeria Grijalva', role: 'Contadora', bio: 'Encargado de área financiera.', color: 'from-orange-500 to-orange-600' },
  { name: 'Yuliana Velasquez', role: 'Producción', bio: 'Contenido y comunicación del proyecto.', color: 'from-pink-500 to-pink-600' },
  { name: 'Fabiola Paz', role: 'Marketing y Publicidad', bio: 'Encargado de Comunicación y Publicidad.', color: 'from-indigo-500 to-indigo-600' },
  { name: 'Franco Ortez', role: 'Director Audiovisual', bio: 'Creador y encargado del área Autovisual.', color: 'from-teal-500 to-teal-600' },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4">Conoce al equipo</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Somos un equipo diverso que combina diseño, producción e impacto social para crear soluciones sostenibles.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start"
            >
              <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-lg`}>
                {/* initials */}
                {member.name.split(' ').map(n => n[0]).slice(0,2).join('')}
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                <div className="text-sm text-white/70 mb-2">{member.role}</div>
                <p className="text-white/70 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
