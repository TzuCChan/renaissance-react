// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import Arts from "./Arts";
import Category from "./Categories";
import items from "./data";

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // const [categories, setCategories] = useState(allCategories);
  const [categories] = useState(allCategories);
}

export default App;
