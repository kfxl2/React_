import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

/**
 * exibe as informações do pratos e o comentarios sobre o prato 
 * @param {Object} dish - O prato selecionado.
 * @returns JSX para renderizar os detalhes do prato.
 */
const DishDetail = ({ dish }) => {
  // Função que mostra os detalhes do prato
  const renderDish = (dish) => {
    if (!dish) return <div>No dish selected</div>;

    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  };

  // Função para renderizar os comentários
  const renderComments = (comments) => {
    if (!comments || comments.length === 0) return <div>No comments available</div>;

    return (
      <div className="mt-4">
        <h4>Comentários</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => (
            <li key={comment.id} className="mb-3">
              <p>"{comment.comment}"</p>
              <p className="text-muted">
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
      <div className="col-12 col-md-5 m-3">
        {renderDish(dish)}
      </div>
      <div className="col-12 col-md-5 m-3">
        {dish ? renderComments(dish.comments) : <div></div>}
      </div>
    </div>
  );
};

export default DishDetail;
