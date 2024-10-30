import { useRef } from "react";
import "./om.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Om = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className='om'
      variants={variants}
      initial='initial'
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}>
      
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <h1>
            Om Oss
          </h1>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'>
          <h2>Tittle</h2>
          <p>
          Jotun Utvikling er et lite, men stabilt IT-firma med røtter og hovedkontor i Fagernes, midt i ville, vakre Valdres.
Vår visjon er å alltid ligge et hakk foran i markedet, og tilby kundene våre oppdaterte systemer og rådgivning basert på dagsaktuell informasjon om IT-markedet.
          
          </p>
        </motion.div>
        <motion.div
          className='box'>
          <h2>Tittle</h2>
          <p>
          Fra hovedkontoret på Fagernes styres den daglige driften og supporten ut til kundene. Her har Jørn sitt daglige virke, sammen med to andre leietakere som til tider også assistere inn i Jotun Utvikling ved behov.
          I forbindelse med lokalene ligger det også et serverrom som er under oppbygning, og herfra driftes alle inhouse-kundene til Jotun Utvikling.
          </p>
        </motion.div>
        <motion.div
          className='box'>
          <h2>Tittle</h2>
          <p>
            Text text text  text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Om;
