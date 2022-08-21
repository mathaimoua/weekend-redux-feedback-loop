import "./Support.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Support() {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.reducer);
  const history = useHistory();
  const [support, setSupport] = useState(data.support);

  const handleNext = () => {
    event.preventDefault();
    if (support !== "") {
      dispatch({
        type: "SAVE_SUPPORT",
        payload: { support: support },
      });
      history.push('/comments');
    } else {
      alert("Please input a rating 1-5");
    }
  };

  const handleSupport = (event) => {
    setSupport(event.target.value);
  };

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <form onSubmit={handleNext}>
        <input
          type="number"
          max="5"
          min="1"
          placeholder="1 - 5"
          onChange={handleSupport}
          value={support}
        />
        <button>Next</button>
      </form>
    </div>
  );
}

export default Support;
