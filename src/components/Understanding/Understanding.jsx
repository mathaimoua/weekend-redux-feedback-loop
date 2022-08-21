import "./Understanding.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

function Understanding() {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.reducer);
  const history = useHistory();
  const [understanding, setUnderstanding] = useState(data.understanding);

  const handleNext = () => {
    event.preventDefault();
    if (understanding !== "") {
      dispatch({
        type: "SAVE_UNDERSTANDING",
        payload: { understanding: understanding },
      });
      history.push("/support");
    } else {
      alert("Please input a rating 1-5");
    }
  };

  const handleUnderstanding = (event) => {
    setUnderstanding(event.target.value);
  };

  return (
    <div>
      <h1>How well are you understanding the content?</h1>
      <form onSubmit={handleNext}>
        <TextField
          type="number"
          max="5"
          min="1"
          placeholder="1 - 5"
          onChange={handleUnderstanding}
          value={understanding}
        />
        <Button variant="contained" color="primary" type="submit">
          Next
        </Button>
      </form>
    </div>
  );
}

export default Understanding;
