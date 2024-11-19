import './style.css'
import logo from '../../../assets/logo.png'

function Index() {

  return (
    <>
      <div className='nav-bar'>
        <div>
        <img className='logo' src={logo} alt="Logo" />
        </div>
        <div>
        +917860663399
        </div>
        <div className='nav-bar-right-side-item'>
          <div>
           <p>Download App</p>
          </div>
          <div>
            <p>Hi, UserName</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index