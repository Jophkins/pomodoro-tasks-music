import React from 'react';

import styles from './MainPage.module.scss';
import hero_img from '../../assets/images/hero.webp';
import linkedin_icon from '../../assets/images/linkedin-icon.svg';
import github_icon from '../../assets/images/github_icon.svg';
import telegram_icon from '../../assets/images/telegram_icon.svg';
import whatsapp_icon from '../../assets/images/whatsapp_icon.svg';
import website_icon from '../../assets/images/website_icon.svg';
import facebook_icon from '../../assets/images/facebook_icon.svg';
import instagram_icon from '../../assets/images/instagram_icon.svg';
import twitter_icon from '../../assets/images/twitter_icon.svg';
import email_icon from  '../../assets/images/email_icon.svg';
import phone_icon from '../../assets/images/phone_icon.svg';

import MainPageNav from "./MainPageNav";

const MainPage = () => {

  const social = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/serhiiburiak/",
      img: linkedin_icon
    },
    {
      name: "GitHub",
      link: "https://github.com/Jophkins",
      img: github_icon
    },
    {
      name: "Telegram",
      link: "https://t.me/jophkins",
      img: telegram_icon
    },
    {
      name: "WhatsApp",
      link: "https://api.whatsapp.com/send/?phone=%2B15875833791&text&type=phone_number&app_absent=0",
      img: whatsapp_icon
    },
    {
      name: "Personal Projects | pitwithmagic.com",
      link: "https://pitwithmagic.com/productivity-zone",
      img: website_icon,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/serhiiburiak29/",
      img: facebook_icon
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/s.bury00/",
      img: instagram_icon
    },
    {
      name: "Twitter",
      link: "https://twitter.com/serhiiburiak29",
      img: twitter_icon
    }
  ]

  return (
    <div className={styles.mainPage}>
      <div className={styles.background}></div>
      <MainPageNav />
      <div className={`container ${styles.contentContainer}`}>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <div className={styles.content}>
              <div>
                <img className="img-fluid" src={hero_img} alt=""/>
              </div>
              <div className={styles.heroDescription}>
                <div className={styles.title}>
                  <span>Serhii B.</span>
                  <span>Web Developer</span>
                </div>
                Web Developer with 2+ years' experience in React.js & Node.js. Lifelong learner, strong collaborator, mentor, and
                problem-solver.
              </div>
              <div className={styles.contacts}>
                <div className="row">
                  <span className="text-center">Get in touch with me</span>
                  <div className="col-12 col-md-6">
                    <a className={styles.links} href="mailto:idaveee@gmail.com">
                      <img width="40" src={email_icon} alt=""/>
                      <p>idaveee@gmail.com</p>
                    </a>
                  </div>
                  <div className="col-12 col-md-6">
                    <a className={styles.links} href="tel:15875833791">
                      <img width="40" src={phone_icon} alt=""/>
                      <p>+1 (587) 583-3791</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.social}>
                <ul>
                  {social.map(i => {
                    return (
                      <li>
                        <a href={i.link} rel="noreferrer" target="_blank">
                          <img width={40} src={i.img} alt=""/>
                          <span>{i.name}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
