import { Button } from "react-bootstrap"
import styles from './Product.module.css'

const { product, productImg } = styles

function Product() {
  return (
    <div className={product}>
        <div className={productImg}>
            <img src="https://cdn-eu.dynamicyield.com/api/9876644/images/cfb357649428__hp-w12-22032022-h_m-men.jpg" alt="" />
        </div>
        <h2>Title</h2>
        <h3>10 EGP</h3>
        <Button variant="info"> Add to cart</Button>
    </div>
  )
}

export default Product