// Write your code here.
const CardItems = props => {
  const {CardDetails} = props
  const {title, description, imgUrl, className} = CardDetails
  return (
    <li className={`${className} card-container`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <img src={imgUrl} className="avatar" alt="title" />
      </div>
    </li>
  )
}
export default CardItems
