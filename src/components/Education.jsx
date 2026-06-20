import { motion } from 'framer-motion';
import {
  RiGraduationCapLine,
  RiCalendarLine,
  RiMapPinLine,
  RiMedalLine,
  RiBookOpenLine,
} from 'react-icons/ri';

const education = [
  {
    degree: 'BSc (Hons) in Information Technology',
    specialization: 'Specializing in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    location: 'Sri Lanka',
    period: '2022 – Present',
    current: true,
   
    icon: RiGraduationCapLine,
    badge: 'Current',
    detail: null,
  },
  {
    degree: 'Diploma in English',
    specialization: null,
    institution: 'British Way English Academy (BWEA)',
    location: 'Sri Lanka',
    period: null,
    current: false,
    color: '#06b6d4',
    icon: RiBookOpenLine
  },
  {
    degree: 'G.C.E. Advanced Level',
    specialization: 'Physical Science',
    institution: 'Rahula College, Matara',
    location: 'Matara, Sri Lanka',
    current: false,
    color: '#10b981',
    icon: RiMedalLine,
  },
  {
    degree: 'G.C.E. Ordinary Level',
    specialization: null,
    institution: "St. Thomas' College, Matara",
    location: 'Matara, Sri Lanka',
    current: false,
    color: '#10b981',
    icon: RiMedalLine,
  },
];

const Education = () => {
  return (
    <div className="section-wrap">
      {/* Section header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="tag mb-4 inline-block">Academic Background</span>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Education <span className="gradient-text">Journey</span>
        </h2>
        <div className="section-divider" />
      </motion.div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        <div className="relative pl-8">
          {/* Vertical gradient line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full"
            style={{
              background:
                'linear-gradient(to bottom, #7c3aed, #06b6d4, #10b981, transparent)',
            }}
          />

          {education.map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative mb-7 last:mb-0"
            >
              {/* Timeline dot */}
              <span
                className="absolute -left-[38px] top-5 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: item.current ? item.color : `${item.color}22`,
                  border: `2px solid ${item.color}`,
                  boxShadow: item.current ? `0 0 14px ${item.color}80` : 'none',
                }}
              >
                {item.current && (
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                )}
              </span>

              {/* Card */}
              <div
                className="glass glass-hover rounded-2xl p-5 sm:p-6"
                style={{
                  borderColor: `${item.color}30`,
                  boxShadow: item.current ? `0 0 28px ${item.color}18` : undefined,
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg mt-0.5"
                    style={{
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}40`,
                      color: item.color,
                    }}
                  >
                    <item.icon />
                  </span>

                  <div className="flex-1 min-w-0">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="font-bold text-white text-sm sm:text-base leading-snug">
                          {item.degree}
                        </h3>
                        {item.specialization && (
                          <p
                            className="text-xs font-medium mt-0.5"
                            style={{ color: item.color }}
                          >
                            {item.specialization}
                          </p>
                        )}
                      </div>
                      {item.badge && (
                        <span
                          className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{
                            background: `${item.color}20`,
                            color: item.color,
                            border: `1px solid ${item.color}50`,
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Institution */}
                    <p className="text-slate-300 text-sm font-medium mb-2">
                      {item.institution}
                    </p>

                    {/* Meta: period + location */}
                    <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                      {item.period && (
                        <span className="flex items-center gap-1">
                          <RiCalendarLine className="text-slate-600" />
                          {item.period}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <RiMapPinLine className="text-slate-600" />
                        {item.location}
                      </span>
                    </div>

                    {/* Result badge */}
                    {item.detail && (
                      <span
                        className="inline-block mt-3 text-[11px] font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: `${item.color}15`,
                          color: item.color,
                          border: `1px solid ${item.color}35`,
                        }}
                      >
                        {item.detail}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
