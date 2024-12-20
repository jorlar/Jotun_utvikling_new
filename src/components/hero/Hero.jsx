import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'>
          <motion.h2 variants={textVariants}>Jotun Utvikling AS</motion.h2>
          <motion.h1 variants={textVariants}>
            Din Totalleverandør Av IT-Tjenester
          </motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <motion.button 
            onClick={() => console.log("See_the_latest_works Link")}
            variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button 
            onClick={() => console.log("Contact_me Link")}
            variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            className='mouseScrolldown'
            animate='scrollButton'
            src='/scroll.png'
            alt=''
          />
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'>
        Webutvkling Nettverksdrift Automasjon Applikasjonsforvaltning
      </motion.div>
      <div className='imageContainer'>
        <img src='/heroPNG.png' alt='' />
      </div>
    </div>
  );
};

export default Hero;
