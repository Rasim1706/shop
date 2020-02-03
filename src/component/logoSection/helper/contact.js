import React from "react";
import FooterSection from "../footer";
import styleContact from "./contact.module.css"

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className={styleContact.Contact}>
          <h4>Контакты</h4>
          <h5>
            Команда Поддержки на связи 7 дней в неделю с 09:00 до 19:00 (MSK)
          </h5>
          <string>
            Выберите наиболее удобный для Вас способ связи:
            <ul>
              <li>WhatsApp: +7-925-523-22-29 (только для сообщений)</li>
              <li>
                Напишите нам в чат используя эту ссылку или прямо на нашем сайте
              </li>
              <li>
                Напишите на нашу электронную почту support@roadtothedream.com
              </li>
              <li>Позвоните на бесплатный по РФ номер 8-800-500-29-69</li>
            </ul>
            <div className={styleContact.textContact}>
              Убедительная просьба: использовать только один из предложенных
              каналов связи. В ином случае Вы провоцируете задержку времени
              решения вопросов других пользователей.
            </div>
            <div className={styleContact.textContact}>
              Посетите наш шоурум по адресу г.Москва, ул. Крылатская 45/1,
              совместно со спортзалом Road to the Dream
            </div>
            <div className={styleContact.textContact}>
              Время работы шоурума с 7:00 до 23:00 по будням и с 9:00 до 22:00
              по выходным. Ждём вас!
            </div>
          </string>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
export default Contact;
