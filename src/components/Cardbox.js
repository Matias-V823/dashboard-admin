import React from 'react';

const CardBox = () => {
  return (
    <div className="cardBox">
      <div className="card">
        <div>
          <div className="numbers">Editar Maquinas</div>
          <div className="cardName">Editar</div>
        </div>
        <div className="iconBx">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
      </div>

      <div className="card">
        <div>
          <div className="numbers">Eliminar Maquinas</div>
          <div className="cardName">Eliminar</div>
        </div>
        <div className="iconBx">
          <ion-icon name="cart-outline"></ion-icon>
        </div>
      </div>

      <div className="card">
        <div>
          <div className="numbers">Publicar Maquinas</div>
          <div className="cardName">Publicar</div>
        </div>
        <div className="iconBx">
          <ion-icon name="chatbubbles-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default CardBox;
