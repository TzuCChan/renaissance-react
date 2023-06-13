// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import Arts from "./Arts";
import Category from "./Categories";
import items from "./data";

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {}

export default App;
