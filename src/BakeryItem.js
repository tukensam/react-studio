function BakeryItem(props) {
  return (<div className="BakeryItem">
    <h3>{props.item.name}</h3>
    <img src={props.item.image}></img>
    <p>{props.item.description}</p>
    <p>${props.item.price}</p>
    <button onClick={props.onClick}>Add to cart</button>
  </div>)
}

export default BakeryItem;