import Rating from "./Rating"

function ProductItem({title, rating}) {

  return(
    <div className="product_item">
      <h3>{title}</h3>
      <Rating rating={rating}/>
    </div>
  )
}
export default ProductItem