import React from "react";
import Application from "./components/applications/application";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCheck,
  faTimes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCheck,
  faTimes,
  faStar
);

function App() {
  return <Application></Application>;
}

export default App;
