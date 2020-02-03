import React from "react";
import aboutUs from "./about.module.css";
import FooterSection from "./../footer";

const About = () => {
  return (
    <div className={aboutUs.about}>
      <div className="container">
        <div className={aboutUs.about__padg}>
          <h4>О нас</h4>
          <string>
            Компания Road to the Dream – это не отдельный человек или команда,
            Road to the Dream – это каждый, кто живет с мечтой в сердце и готов
            прикладывать усилия для ее достижения! Родившись как надпись для
            мотивационной стены, сейчас это бренд, который живет в сердцах у
            тысяч людей и вдохновляет каждого сражаться за свои мечты! Мы верим,
            что продукция RD станет для тебя больше, чем просто одеждой или
            аксессуаром. Пусть она станет для тебя ежедневным напоминанием, что
            твои цели достижимы, ведь сама компания Road to the Dream – это
            живой пример реализованной мечты!
          </string>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
export default About;
