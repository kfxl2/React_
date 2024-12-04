import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

const Menu = (props) => {
  // Estado para o prato selecionado
  const [selectedDish, setSelectedDish] = useState(null);

  // Função para selecionar o prato
  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  // Renderizar a lista de pratos
  const menu = props.dishes.map((dish) => (
    <div className="col-12 col-md-5 m-2" key={dish.id}>
      <Card onClick={() => onDishSelect(dish)}>
        <CardImg width="95%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">
        {/* Passa o prato selecionado para o DishDetail */}
        <DishDetail dish={selectedDish} />
      </div>
    </div>
  );
};

export default Menu;


