import { useState } from "react";
import "./Bmi.css";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setStatus("Please enter valid height and weight");
      return;
    }
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setStatus("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obesity");
    }
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      <input type="number" placeholder="Height in cm" value={height} onChange={(e) => setHeight(e.target.value)}/>
      <input type="number" placeholder="Weight in kg" value={weight} onChange={(e) => setWeight(e.target.value)}/>
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && (
        <div className="bmi-result">
          <p>Your BMI: {bmi}</p>
          <p className={status.toLowerCase().replace(" ", "-")}>{status}</p>
        </div>
      )}
    </div>
  );
};

export default BMI;