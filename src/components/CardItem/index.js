import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li>
      <div className={`list-container ${className}`}>
        <h1 className="head">{title}</h1>
        <p className="para">{description}</p>
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
