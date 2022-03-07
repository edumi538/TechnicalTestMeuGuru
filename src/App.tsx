import React, { useEffect } from "react";
import { getUniversityCollection } from "./Requests/GeralApi";
import "./styles.css";
import Header from "./Components/Header";
import Table from "./Components/Table";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
}
