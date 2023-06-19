// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import Arts from "./Arts";
import Categories from "./Categories";
import items from "./data";

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [artsItems, setArtsItems] = useState(items);
  // const [categories, setCategories] = useState(allCategories);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setArtsItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setArtsItems(newItems);
  };

  return (
    <main>
      <section className="arts section">
        <div className="title">
          <h2>Three Arts</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Arts items={artsItems} />
      </section>
    </main>
  );
}

export default App;
