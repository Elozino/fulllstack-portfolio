import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

import Wrapper from "../../container/Wrapper";

function About() {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = "*[_type == 'about']";
    client.fetch(query).then((data) => {
      // console.log(data);
      setAbouts(data);
    });
  }, []);

  return (
    <div className="about__container">
      <h3 className="about__header">Tech Stacks</h3>
      <section className="about__stacks">
        {abouts?.map((item, i) => (
          <motion.div
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            key={i}
            className="about__stacks-content"
          >
            <div className="about__image">
              <img src={urlFor(item.imgUrl)} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default Wrapper(About, "about");
