import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    link: "",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Persona-usa.com",
    link: "https://persona-usa.com/",
    img: "/persona_preview.png",
    desc: "A site where you can find an activity for your child that can become a hobby. Google Maps APIs will help you to find the nearest activities and create a route. The project also uses import and export of data using Excel spreadsheets, which simplifies the updating of data for the site owner. The basis in the form of Laravel + Vue.js provides fast operation of the site and provides fast interaction with the database. The site is built on AWS.",
  },
  {
    id: 3,
    title: "SwissMetrics",
    link: "https://www.swissmetrics.com/",
    img: "/swissmetrics_preview.png",
    desc: "The platform enables sanctions screening, automates credit risk assessment, and provides access to a database with the financial information of more than 190 million companies worldwide. This helps companies make better-informed decisions, reducing financial risks in the supply chain and with partners. SwissMetrics also facilitates collaboration between finance and non-finance departments to effectively manage risk and improve business productivity.\n\nTechnologies used: Codeigniter 4, MySql, html, scss, use of some phyton APIs that work with data analysis. The site is built on dedicated servers.",
  },
  {
    id: 4,
    title: "Øie trafikkskole",
    link: "https://www.oietrafikkskole.no/",
    img: "/Øie-trafikkskole.png",
    desc: "Webside og booking system, levert til Øie Trafikkskole i Valdres. Siden er bygget på Wordpress CMS med PHP i bakgrunn og integrert opp mot Tabs som bookingløsning for kjøretimer.",
  },
];

const OpenLink = (url) => {
  window.open(url, "_blank");
};

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => OpenLink(item.link)}>Visit the site</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
