import React from "react";
import footer from "./footer.module.css";
import { NavLink } from "react-router-dom";

const FooterSection = () => {
  return (
    <div className={footer.footer}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="logo">
              <NavLink className={footer.danger} to="/logophoto">
                Danger
              </NavLink>
              <br />
            </div>
            <NavLink className={footer.pdtop} to="/about">
              О нас
            </NavLink>
          </div>
          <div className="col-3">
            <h6>Поддержка</h6>
            <NavLink className={footer.left} to="/contact">
              Контакты
            </NavLink>
            <p className={footer.left}>Политика возврата</p>
            <p className={footer.left}>Доставка</p>
          </div>
          <div className="col-3">
            <h6>Аккаунт</h6>
            <p className={footer.left}>Логин</p>
            <p className={footer.left}>Регистрация</p>
          </div>
          <div className="col-3">
            <h6>Соц.сети</h6>
            <p className={footer.left}>ВК</p>
            <p className={footer.left}>ИНСТ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
