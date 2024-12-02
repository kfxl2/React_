import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

/**
 * Exibe os detalhes do prato e os comentários.
 * @param {Object} dish - O prato selecionado.
 * @returns JSX para renderizar os detalhes do prato e os comentários.
 */
const DishDetail = ({ dish }) => {
  // Função para renderizar o prato
  const renderDish = (dish) => {
    if (!dish) return <div></div>;

    return (
      <Card>
        <CardImg top src={`/assets/${dish.image}`} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  };

  // Função para renderizar os comentários
  const renderComments = (comments) => {
    if (!comments) return <div></div>;

    return (
      <div>
        <h4>Comentários</h4>
        <ul className="list-unstyled">
          {comments.map((comment, index) => (
            <li key={index}>
              <p>{comment.comment}</p>
              <p>
                -- {comment.author}, {new Date(comment.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        {renderDish(dish)}
      </div>
      <div className="col-12 col-md-5 m-1">
        {renderComments(dish ? dish.comments : null)}
      </div>
    </div>
  );
};

export default DishDetail;
