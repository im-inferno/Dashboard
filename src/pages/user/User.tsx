import { Single } from "../../components/single/Single"
import { singleUser } from "../../data"
import "./user.scss"

export const User = () => {
  return (
    <div>
      <Single {...singleUser} />
    </div>
  )
}
