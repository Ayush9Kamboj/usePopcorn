import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test(){
//   const [movieRating, setMovieRating] = useState(0);
//   return <div>
//     <StarRating color="blue" onSetRating={setMovieRating}/>
//     <p>this movie was rated by {movieRating} stars</p>
//   </div>
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    <App />
    {/* <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}/>
    <StarRating maxRating={5} color="red" size={24} defaultRating={3}/>
    <Test/> */}
  </React.StrictMode>
);
