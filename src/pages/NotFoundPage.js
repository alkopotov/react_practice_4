import { Link } from "react-router-dom"
import {ReactComponent as NotFoundPicture} from '../images/not-found.svg'
import Button from "../UI/Button/Button"

function NotFoundPage() {

  return(
    <main className="wrapper">
      <div className='not_found_pict'>
        <h2 className="header_text">Страница не найдена</h2>
      <NotFoundPicture/>
      </div >
      <Link to={'/products'}>
      <Button title={"Список товаров"} color={'yellow'}/>
      </Link> 
    </main>

  ) 
}

export default NotFoundPage