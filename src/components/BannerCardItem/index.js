// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {data} = props
  const {headerText, description, id} = data
  console.log(headerText, description)
  const classCardName = 'card-'.concat(id)
  console.log(classCardName)
  return (
    <li className={`card ${classCardName}`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
