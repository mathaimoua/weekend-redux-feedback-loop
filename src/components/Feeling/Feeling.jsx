import "./Feeling.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import {TextField} from "@material-ui/core";

function Feeling() {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.reducer);
  const history = useHistory();
  const [feeling, setFeeling] = useState(data.feeling);

  const handleNext = () => {
    event.preventDefault();
    if (feeling !== "") {
      dispatch({
        type: "SAVE_FEELING",
        payload: { feeling: feeling },
      });
      history.push("/understanding");
    } else {
      alert("Please input a rating 1-5");
    }
  };

  const handleFeeling = (event) => {
    setFeeling(event.target.value);
  };

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <form onSubmit={handleNext}>
        <TextField
          type="number"
          max="5"
          min="1"
          placeholder="1 - 5"
          onChange={handleFeeling}
          value={feeling}
        />
        <Button variant="contained" color="primary" type="submit" >
          Next
        </Button>
      </form>
    </div>
  );
}

export default Feeling;
