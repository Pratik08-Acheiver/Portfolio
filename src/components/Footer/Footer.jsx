import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Get to know me more <br />
            <SocialIcon url="https://twitter.com/jaketrent" />
            <SocialIcon url="https://www.facebook.com/pratik.anand.568/" />
            <SocialIcon url="https://github.com/settings/profile" />
            <SocialIcon url="https://www.linkedin.com/in/pratik-anand-8a042422b/" />
            <SocialIcon url="https://profile.codingninjas.com/f51e2de4-8182-4c4f-80a8-77d108f79912?_ga=2.193551981.1597823869.1680176968-118149307.1671291797" />

            
          </span>
          <span className="primaryText">
            Start by <a href="mailto:pratikanand2626@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Boring Road, Patna</p>
          </div>
          <ul className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;