import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='pb-20 border-b border-b-neutral-900'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -90 }}
        transition={{ duration: 1.5 }}
        className='my-10 text-4xl text-center'
      >
        Get in Touch
      </motion.h2>
      <div className='tracking-tighter text-center'>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className='my-4'
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          className='my-4'
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href="mailto:isurukulathunga@gmail.com"
          whileHover={{ scale: 1.1 }}
          className='border-b'
        >
          {CONTACT.email}
        </motion.a>
      </div>

      {/* Add to the last div */}
      <div className='flex justify-center mt-10 space-x-6'>
        <motion.a
          href="https://www.facebook.com/share/1Er1upNqGL/"
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center justify-center w-12 h-12 text-white transition-all transform rounded-lg shadow-lg hover:bg-blue-700 hover:scale-110 '
          whileHover={{ scale: 1.2 }}
        >
          <FontAwesomeIcon icon={faFacebook} className="text-xl" />
        </motion.a>
        <motion.a
          href="https://twitter.com/isurukulathung1"
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center justify-center w-12 h-12 text-white transition-all transform rounded-lg shadow-lg hover:bg-blue-500 hover:scale-110'
          whileHover={{ scale: 1.2 }}
        >
          <FontAwesomeIcon icon={faTwitter} className="text-xl" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/isuru_k25?igsh=MW1yOXA3ZWpqdGxlcA=="
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center justify-center w-12 h-12 text-white transition-all transform rounded-lg shadow-lg hover:bg-pink-600 hover:scale-110'
          whileHover={{ scale: 1.2 }}
        >
          <FontAwesomeIcon icon={faInstagram} className="text-xl" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/isuru-kulatunge"
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center justify-center w-12 h-12 text-white transition-all transform rounded-lg shadow-lg hover:bg-blue-600 hover:scale-110'
          whileHover={{ scale: 1.2 }}
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
        </motion.a>

        <motion.a
          href="https://github.com/IsuruKRP"
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center justify-center w-12 h-12 text-white transition-all transform rounded-lg shadow-lg hover:bg-gray-800 hover:scale-110'
          whileHover={{ scale: 1.2 }}
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
