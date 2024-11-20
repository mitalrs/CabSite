import './style.css'
import NavBar from '../Landing/NavBar'
import Ad from '../Landing/Ad'
import ExploreCab from './ExploreCab'

function Index() {


  return (
    <>
      <div>
      <NavBar/> 
      <div className='wrapper-on-bg-img'>
        <div className='bg-image-on-landing'>
            <div className='tag-lines'>
            <div className='tag-line-wrapper'>
                <p className='tag-line-first-item'>​India's <p className='tag-line-bold tag-line-bold-1'>Leading</p> </p>
                <p className='tag-line-bold'>One-Way Inter-City</p>
                <p>Cab Service Provider</p>  
            </div>
            </div>
            <ExploreCab/>
        </div>
        <Ad/>
      </div>
      </div>
    </>
  )
}

export default Index