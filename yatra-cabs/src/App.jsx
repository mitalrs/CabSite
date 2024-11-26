import './App.css'
import Landing from './Component/Landing/index'
import NotFairGrid from './Component/NotFairGrid'
import LocalTaxiServices from './Component/LocalTaxiServices'
import WhyYatri from './Component/WhyYatri'
import FareTable from './Component/FareTable'
import OneWayJourney from './Component/OneWayJourney'
// import WhyCab from './Component/WhyCab'
// import RoadTrip from './Component/RoadTrip'
// import CarRental from './Component/CarRental'
// import Footer from './Component/Footer'

function App() {

  return (
    <div className='app'>
      <div className='wrapper-0n-app-component'> 
      <Landing/>
      <NotFairGrid/>
      <LocalTaxiServices/>
      <WhyYatri/>
      <FareTable/>
      <OneWayJourney/>
      {/* <WhyCab/>
      <RoadTrip/>
      <CarRental/>
      <Footer/> */}
      </div>
    </div>
  )
}

export default App
