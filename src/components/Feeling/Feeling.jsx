import "./Feeling.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Feeling() {
  const dispatch = useDispatch();

  const history = useHistory();
  const [feeling, setFeeling] = useState("");

  const handleNext = () => {
    if (feeling !== "") {
      dispatch({
        type: "SAVE_FEELING",
        payload: { feeling: feeling },
      });
      history.push('/understanding');
    } else {
      alert("Please input a rating 1-5");
    }
  };

  const handleFeeling = (event) => {
    setFeeling(event.target.value);
  };

  return (
    <div>
      <h1>How is u feeling today, homie?</h1>
      <form onSubmit={handleNext}>
        <input
          type="number"
          max="5"
          min="1"
          onChange={handleFeeling}
          value={feeling}
        />
        <button>Next</button>
      </form>
    </div>
  );
}

export default Feeling;
