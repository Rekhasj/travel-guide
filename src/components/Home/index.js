import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelGuideItem from '../TravelGuideItem'
import './index.css'

class Home extends Component {
  state = {inProgress: true, travelGuidePackages: []}

  componentDidMount() {
    this.renderTravelGuidePackages()
  }

  renderTravelGuidePackages = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'

    const response = await fetch(url)
    const travelPackages = await response.json()
    console.log(travelPackages)
    const updatedPackages = travelPackages.packages.map(travel => ({
      id: travel.id,
      description: travel.description,
      imageUrl: travel.image_url,
      name: travel.name,
    }))

    this.setState({travelGuidePackages: updatedPackages, inProgress: false})
  }

  render() {
    const {inProgress, travelGuidePackages} = this.state

    return (
      <div className="main-container">
        <h1 className="travel-heading">Travel Guide</h1>
        {inProgress ? (
          <div
            className="loader"
            // testid="loader"
          >
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {travelGuidePackages.map(eachGuide => (
              <TravelGuideItem
                key={eachGuide.id}
                guideTravelDetails={eachGuide}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
