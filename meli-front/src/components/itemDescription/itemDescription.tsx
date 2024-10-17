import "./itemDescription.scss";

interface DescriptionItem {
  description: string | undefined;
}

function ItemDescription({ description }: DescriptionItem) {
  return (
    <div className="item-description-text">
      <h2 className="description-title">Descripción del producto</h2>
      {(description !== undefined && description !== '') && <p data-testid="description">{description}</p>}
    </div>
  );
}

export default ItemDescription;
