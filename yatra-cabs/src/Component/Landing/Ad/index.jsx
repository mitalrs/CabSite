import './style.css'
import googleStore from '../../../assets/googleStore.png'
import appleStore from '../../../assets/appStore.png'

function Index() {

  return (
    <>
      <div className='ad-container'>
      <div className='wrapper'>
        <h2 className='headline-first'>Transparent Billing</h2>
        <p className='short-para'>GPS Based Billing | No Km Tamparing</p>
      </div>
      <div className='hr-div'></div>
      <div className='wrapper'>
        <h4 className='haedline-second'>Download Now!</h4>
        <div>
        <img className='store-img' src={googleStore} alt="googleStore" />
        <img className='store-img' src={appleStore} alt="appleStore" />
        </div>
      </div>
      <div className='hr-div'></div>
      <div className='wrapper'>
        <h2 className='headline-first'>No return fare</h2>
        <p className='short-para'>One-Way cab fare | No Hidden charges</p>
      </div>
      </div>
    </>
  ) 
}

export default Index
