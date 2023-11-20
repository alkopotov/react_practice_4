import { useNavigate, useLocation, useParams } from "react-router-dom"

import Button from "../UI/Button/Button"
import { useEffect, useState } from "react";
import Rating from "../components/Rating";

function ProductInfoPage() {

  const {id} = useParams()
  const navigate = useNavigate()
  const location = useLocation();
  const [product, setProduct] = useState({})

  
  // useEffect(()=> {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //       .then(data => setProduct(data.filter(e => e.id === +id)[0]))
  // }, [])


  useEffect (()=> {
    if (location.state) {
      setProduct(location.state)
    } else {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
          .then(data => setProduct(data.filter(e => e.id === +id)[0]))
    }
  }, [id])

  // console.log('rating', product.rating['rate'])

  return (
    <div className="product_info">
      <h3>{product.title}</h3>
      <img src={product.image} className="product_pict" alt={product.title + 'picture'}/>
      <h4>Цена: {product.price}$</h4>
      <p>{product.description}</p>
      {/* <Rating rating={Math.round(+product.rating.rate)}/> */}
      <Button title={'Назад'} color={'yellow'} onClick={() => navigate(-1)}/>
    </div>
  )
}

export default ProductInfoPage