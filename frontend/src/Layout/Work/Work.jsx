import React, { useEffect, useState } from "react";
import "./Work.scss";

import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";
import Wrapper from "../../container/Wrapper";
import { Link } from "react-router-dom";

function Work({ isAllWork }) {
  console.log(isAllWork);

  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWork] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = "*[_type == 'works']";
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const handleNavView = () => {

  };
  return (
    <div className="work__container">
      <h2>My personal Works </h2>
      <div
        className="work__tags"
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, type: "tween" }}
      >
        {["Web Apps", "Web Design", "Mobile Apps", "All"].map((item, i) => (
          <div
            key={i}
            onClick={() => handleWorkFilter(item)}
            className={`tags ${activeFilter === item ? "work__filter-active" : ""
              }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="work__portfolio-container"
      >
        {filterWorks &&
          filterWorks?.map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: [0, 1], y: [100, 0] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, type: "tween" }}
              className="work__portfolio"
            >
              <div className="work__portfolio-image">
                <img src={urlFor(item.imgUrl)} alt={item.title} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="work__portfolio-link"
                >
                  <a href={item.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileHover={{ scale: [1, 0.9] }}
                      whileInView={{ scale: [0, 1] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="work__portfolio-link-hover"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={item.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileHover={{ scale: [1, 0.9] }}
                      whileInView={{ scale: [1, 1] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="work__portfolio-link-hover"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="work__portfolio-content">
                <p className="work__tag-title">{item.title}</p>
                <p>{item.description}</p>
                <p className="work__tag-name">{item?.tags[0]}</p>
                <div className="work__tools">
                  {item?.tools?.map(tool =>
                    <div key={tool}>{tool}</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>

      <div className="work__btn-container" onClick={handleNavView}>
        <p className="work__btn">
          <Link to="/allworks">All Works</Link>
        </p>
      </div>
    </div>
  );
}

export default Wrapper(Work, "work");
