import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function End() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch({
      type: "RESET_ALL",
    });
    history.push("/");
  };

  return (
    <div>
      <h1>Thank you for your submission!</h1>
      <br></br>
      <Button variant="contained" color="primary" type="submit" onClick={handleReset}>Submit Another!</Button>
    </div>
  );
}

export default End;
