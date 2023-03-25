import './Spinner.css'

const Spinner = () => {

  return (<div className='spinner'>
    <div className="spinner__roller">
      {[...Array(8)].map((_, index) => <div key={index}></div>)}
    </div>
  </div>
  )
}

export default Spinner;