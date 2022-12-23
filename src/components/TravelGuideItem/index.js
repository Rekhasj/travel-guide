import './index.css'

const TravelGuideItem = prop => {
  const {guideTravelDetails} = prop
  const {description, imageUrl, name} = guideTravelDetails

  return (
    <li className="travel-guide-item">
      <img src={imageUrl} alt={name} className="travel-image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default TravelGuideItem
