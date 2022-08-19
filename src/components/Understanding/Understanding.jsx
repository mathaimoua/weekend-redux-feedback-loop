import "./Understanding.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Understanding() {
  const dispatch = useDispatch();

  const history = useHistory();
  const [understanding, setUnderstanding] = useState("");

  const handleNext = () => {
    if (understanding !== "") {
      dispatch({
        type: "SAVE_UNDERSTANDING",
        payload: { understanding: understanding },
      });
      history.push('/support');
    } else {
      alert("Please input a rating 1-5");
    }
  };

  const handleUnderstanding = (event) => {
    setUnderstanding(event.target.value);
  };

  return (
    <div>
      <h1>How well u understanding this shiz?</h1>
      <form onSubmit={handleNext}>
        <input
          type="number"
          max="5"
          min="1"
          onChange={handleUnderstanding}
          value={understanding}
        />
        <button>Next</button>
      </form>
    </div>
  );
}

export default Understanding;
