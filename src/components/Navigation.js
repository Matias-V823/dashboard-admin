import React from 'react';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              <i className="bx bx-user"></i>
            </span>
            <span className="title">Joaquin Torres</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="title">Inicio</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span class="title">Blog</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span class="title">Contactos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="help-outline"></ion-icon>
            </span>
            <span class="title">Ayuda</span>
          </a>
        </li>

        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <span class="title">Contraseña</span>
          </a>
        </li>

        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span class="title">Cerrar sesion</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
