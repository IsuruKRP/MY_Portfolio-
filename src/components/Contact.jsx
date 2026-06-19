import { motion } from 'framer-motion';
import { CONTACT } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiSendPlaneLine } from 'react-icons/ri';

const contactItems = [
  {
    icon: RiMapPinLine,
    label: 'Location',
    value: CONTACT.address,
    href: null,
  },
  {
    icon: RiPhoneLine,
    label: 'Phone',
    value: CONTACT.phoneNo,
    href: 'tel:+94717780969',
  },
  {
    icon: RiMailLine,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
];

const socials = [
  { icon: faFacebook,  href: 'https://www.facebook.com/share/1Er1upNqGL/',                  color: '#1877f2', label: 'Facebook'  },
  { icon: faTwitter,   href: 'https://twitter.com/isurukulathung1',                          color: '#1da1f2', label: 'Twitter'   },
  { icon: faInstagram, href: 'https://www.instagram.com/isuru_k25?igsh=MW1yOXA3ZWpqdGxlcA==', color: '#e4405f', label: 'Instagram' },
  { icon: faLinkedin,  href: 'https://www.linkedin.com/in/isuru-kulatunge',                  color: '#0a66c2', label: 'LinkedIn'  },
  { icon: faGithub,    href: 'https://github.com/IsuruKRP',                                  color: '#f0f6fc', label: 'GitHub'   },
];

const Contact = () => {
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
        <span className="tag mb-4 inline-block">Let's Connect</span>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="section-divider" />
        <p className="text-slate-500 text-sm mt-5 max-w-md mx-auto">
          Whether you have a project, opportunity, or just want to say hi — my inbox is always open.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10">

        {/* ── Left: Info ── */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-2/5 flex flex-col gap-5"
        >
          {contactItems.map((item, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-5 flex items-start gap-4 glass-hover"
            >
              <span
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.3)' }}
              >
                <item.icon />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-0.5">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-slate-300 text-sm hover:text-purple-400 transition-colors break-all">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-300 text-sm">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Social links */}
          <div className="glass rounded-2xl p-5">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-4">Find Me Online</p>
            <div className="flex gap-3 flex-wrap">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  title={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                  style={{
                    background: `${s.color}18`,
                    border: `1px solid ${s.color}40`,
                    color: s.color,
                  }}
                >
                  <FontAwesomeIcon icon={s.icon} className="text-base" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right: Message card ── */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:w-3/5 glass rounded-2xl p-7 sm:p-9 flex flex-col justify-center items-center text-center gap-6"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
          >
            <RiSendPlaneLine className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>
            
          </div>
          <a
            href={`mailto:${CONTACT.email}`}
            className="btn-primary w-full justify-center max-w-xs"
          >
            <RiMailLine /> Send Me a Message
          </a>
          <p className="text-slate-600 text-xs">
            Usually responds within 24 hours
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
