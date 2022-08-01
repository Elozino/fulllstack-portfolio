import React, { useEffect, useState } from "react";
import "./Skills.scss";

// import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";
import Wrapper from "../../container/Wrapper";

function Skills() {
  const [skills, setskills] = useState([]);
  useEffect(() => {
    const query = "*[_type == 'skills']";
    client.fetch(query).then((data) => {
      setskills(data);
    });
  }, []);
  return (
    <div className="skill_container">
      <h2>Tools & Technologies</h2>
      <div className="skill_wrapper">
        <motion.div className="skills_list">
          {skills?.map((skill, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: [0, 1], y: [100, 0] }}
              transition={{ duration: 0.5 }}
              className="skills__item"
            >
              <div
                className="skills_image"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Wrapper(Skills, "skills");
