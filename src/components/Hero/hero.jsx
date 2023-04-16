import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className={"primaryText"} variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Pratik.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            I design beautiful simple
            <br />
            things, And I love what i do{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./pngegg.png" alt="" />
        </motion.div>
         
        <SocialIcon url="https://drive.google.com/file/d/16LJX4qzzXP1fhrfeRTPYBdIIdyF9iUoz/view?usp=share_link" />

        <p>My resume</p>

        {/* <a className={css.email} href="https://drive.google.com/file/d/16LJX4qzzXP1fhrfeRTPYBdIIdyF9iUoz/view?usp=share_link">
          My Resume
        </a> */}

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">Creative</div>
            <div className="secondaryText">
              <div>Fresher</div>
              <div>Graduate</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>INVENTIVE FRESHER</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;