import { useSelector } from "react-redux";
import axios from "axios";

function Review() {
  const data = useSelector((store) => store.reducer);

  const handleSubmit = () => {
    axios
      .post("/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Here's all the shiz you told me earlier:</h1>
      <h4>Feeling: {data.feeling}</h4>
      <h4>Understanding: {data.understanding}</h4>
      <h4>Support {data.support}</h4>
      <h4>Comments: {data.comments}</h4>
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Review;
