import { useEffect, useState } from "react"
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";


function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
        .then(data => setProducts(data));
  }, [])

  return (
    <div className="product_list">
      {products.map(elem =>
        <Link key={elem.id} to={'/product/' + elem.id} state={elem} className="product_item">
          <ProductItem title={elem.title} rating={Math.round(+elem.rating.rate)}/>
        </Link>)}
    </div>
  )
}

export default Products