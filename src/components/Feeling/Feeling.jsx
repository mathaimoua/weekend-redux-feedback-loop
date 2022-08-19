import './Feeling.css'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import {useDispatch} from 'react-redux'

function Feeling(){
  const dispatch = useDispatch();

  const history = useHistory();
  const [feeling, setFeeling] = useState('');

  const handleNext = () => {
    if (feeling !== ''){
      dispatch({
        type: 'SAVE_FEELING',
        payload: {feeling: feeling}
      })
      history.push('/understanding')
    }
    else {alert('Please input a rating 1-5')}
  }

  const handleFeeling = (event) => {
    setFeeling(event.target.value);
  }

  return(
    <div>
      <h1>How is you feeling today?</h1>
    <input 
      type="number" 
      max='5' 
      min='1'
      onChange={handleFeeling}
      value={feeling}
    />
    <button onClick={handleNext}>Next</button>
    </div>
    
  )
}

export default Feeling