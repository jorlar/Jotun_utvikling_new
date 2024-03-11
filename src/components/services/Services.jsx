import { useRef } from "react";
import "./services.scss";
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

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}>
      <motion.div className='textContainer' variants={variants}>
        <p>
          Vi leverer totalpakken til din bedrift
          <br /> med fokus på din sikkerhet
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='' />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unike</motion.b>{" "}
            Prosjekter
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Din</motion.b>{" "}
            Bedrift.
          </h1>
          <button>Våre Tjenester</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Nettverk</h2>
          <p>
            Vi innehar solid og lang kompetanse innen drift og utvikling av
            moderne nettverksløsning for store og små bedrifter. Våre
            konsulenter har fartstid både fra offentlig og privat næringsliv.
            Ingen jobb er for liten, og heller ikke for stor!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Utvikling</h2>
          <p>
            Om din bedrift trenger nye nettsider, oppfriskning av branding eller
            utvikling av en helt ny applikasjon er våre utviklere klare for å
            bistå. Vi innehar flere års erfaring innen utvikling og
            porteføljestyring og tar gjerne over ditt prosjekt også.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Sikkerhetstesting</h2>
          <p>
            Vi har lang erfaring med sikkerhetsrevisjoner og pen-testing og tar
            gjerne en test av deres systemer. All testing foregår innenfor
            gjeldende lovverk og eventuelle avdekkede svakheter rapporteres med
            forslag til løsning til sikkerhetsansvarlig hos kunden.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
