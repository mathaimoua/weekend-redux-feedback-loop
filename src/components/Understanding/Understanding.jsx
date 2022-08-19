import './Understanding.css'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import {useDispatch} from 'react-redux'

function Understanding(){
  const dispatch = useDispatch();

  const history = useHistory();
  const [understanding, setUnderstanding] = useState('');

  const handleNext = () => {
    if (understanding !== ''){
      dispatch({
        type: 'SAVE_UNDERSTANDING',
        payload: {understanding: understanding}
      })
      history.push('/')
    }
    else {alert('Please input a rating 1-5')}
  }

  const handleUnderstanding = (event) => {
    setUnderstanding(event.target.value);
  }

  return(
    <div>
      <h1>How well is you understanding?</h1>
    <input 
      type="number" 
      max='5' 
      min='1'
      onChange={handleUnderstanding}
      value={understanding}
    />
    <button onClick={handleNext}>Next</button>
    </div>
    
  )
}

export default Understanding