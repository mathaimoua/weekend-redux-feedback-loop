import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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
      <button onClick={handleReset}>Submit Another!</button>
    </div>
  );
}

export default End;
