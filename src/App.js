import { useState } from "react";
import "./styles.css";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const calculateBmi = (event) => {
    event.preventDefault();
    console.log(event);

    if (weight === 0 && height === 0) {
      alert("Please enter valid height and weight");
    } else if (weight === "" || height === "") {
      setResult("Please enter valid inputs");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      setResult("Your BMI is :");

      if (bmi < 25) {
        setMessage("you're underweight");
      } else if (bmi > 25 && bmi < 30) {
        setMessage("You're healthy");
      } else {
        setMessage("you're overweight");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <div>
          <form>
            <div className="weight">
              <label>Weight (kg) : </label>
              <input
                type="text"
                placeholder="Enter weight"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              />
            </div>

            <div className="height">
              <label>Height (inch) : </label>
              <input
                type="text"
                placeholder="Enter height"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              />
            </div>

            <div className="buttons">
              <button className="btn" type="submit" onClick={calculateBmi}>
                Submit
              </button>

              <button className="btn btn-outline" onClick={reload}>
                Reload
              </button>
            </div>

            <div className="center">
              <h3>
                {result} {bmi}
              </h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
