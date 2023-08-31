//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const d = new Date(2023, 1, 1, 15);
const currentTime = d.getHours();

const customStyle = {
  color: "red"
};

let greeting;

if (currentTime <= 12) {
  greeting = "goodMorning";
  customStyle.color = "red";
} else if (currentTime <= 18) {
  greeting = "goodAfternoon";
  customStyle.color = "green";
} else {
  greeting = "goodNight";
  customStyle.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
