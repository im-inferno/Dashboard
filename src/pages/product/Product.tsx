import { Single } from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./product.scss"

export const Product = () => {
  return (
    <div>
      <Single {...singleProduct}/>
    </div>
  )
}
