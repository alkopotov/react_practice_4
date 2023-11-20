import { useDeferredValue } from "react"

function Rating(props) {
  const {rating} = props

  
  let stars = []
    for (let i = 1; i <= rating; i++){
    stars.push(true)
    }
    while (stars.length < 5) {
    stars.push(false)
    }
  
  let starsArr = []
  for (let i = 1; i <= 5; i++) {
    starsArr.push([i, stars[i - 1]])
  } 
  return(
    <div className="rating">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      {starsArr.map(elem => elem[1] ? <span key={elem[0]} className="fa fa-star active"></span> : <span key={elem[0]} className="fa fa-star"></span>)}
    </div>
  )
}

export default Rating