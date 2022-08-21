import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import './Review.css'
import { Button } from "@material-ui/core";

function Review() {
  const history = useHistory();

  const data = useSelector((store) => store.reducer);

  const handleSubmit = () => {
    event.preventDefault();
    if (
      data.feeling !== "" &&
      data.understanding !== "" &&
      data.support !== ""
    ) {
      axios
        .post("/", data)
        .then((response) => {
          console.log(response);
          history.push("/end");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {alert('Please make sure feeling, understanding, and support have ratings.')}
  };

  const handleClick = (site) => {
    history.push(site);
  };

  return (
    <div>
      <h1>Review Your Feedback</h1>
      <h4>
        Feeling: {data.feeling}{" "}
        <button className="editButton" onClick={() => handleClick("/")}>Edit</button>
      </h4>
      <h4>
        Understanding: {data.understanding}{" "}
        <button className="editButton" onClick={() => handleClick("/understanding")}>Edit</button>
      </h4>
      <h4>
        Support {data.support}{" "}
        <button className="editButton" onClick={() => handleClick("/support")}>Edit</button>
      </h4>
      <h4>
        Comments: {data.comments}{" "}
        <button className="editButton" onClick={() => handleClick("/comments")}>Edit</button>
      </h4>
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Review;
