import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/48577990?v=4"
          alt="Ryann F."
        />
        <div className="">
          <strong>Ryann Ferreira</strong>
          <span>POO</span>
        </div>
      </header>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp icon" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
