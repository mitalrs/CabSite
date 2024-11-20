import './style.css'

function Index() {


  return (
    <>
      <div className='roundtrip'>

      <div className='container-of-field'>
        <div>
            <div>
                <input type='text'/>
                <RiCloseLine />
            </div>
            <div>
                <input type='text'/>
                <IoAddOutline />
            </div>
        </div>
        <FaArrowRightArrowLeft />
        <div></div>
        </div>
        <div className='explore-btn'>
        <button className='btn'>EXPLORE CABS</button>
        </div>
    </div>
    </>
  )
}

export default Index
