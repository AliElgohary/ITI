import { Component } from "react";

import Search from "./Search/Search";
import Food from "./Food/Fruits";

export default class App extends Component {
  state = {
    food: [
      {
        category: "Fruits",
        price: "$1",
        stocked: true,
        name: "Apple",
        id: 1,
      },
      {
        category: "Fruits",
        price: "$1",
        stocked: true,
        name: "Dragonfruit",
        id: 2,
      },
      {
        category: "Fruits",
        price: "$2",
        stocked: false,
        name: "Passionfruit",
        id: 3,
      },
      {
        category: "Vegetables",
        price: "$2",
        stocked: true,
        name: "Spinach",
        id: 4,
      },
      {
        category: "Vegetables",
        price: "$4",
        stocked: false,
        name: "Pumpkin",
        id: 5,
      },
      {
        category: "Vegetables",
        price: "$1",
        stocked: true,
        name: "Peas",
        id: 6,
      },
    ],
    vegetables: [],
    fruits: [],
  };

  deleteOne = (id) => {
    let newFood = [...this.state.food];
    let index = newFood.findIndex((foodItem) => foodItem.id === id);
    if (index !== -1) {
      newFood.splice(index, 1);
      this.setState({ food: newFood });
    }
  };

  deleteMany = (cat) => {
    let newFood = [...this.state.food];
    let flteredFood = newFood.filter((food) => food.category === cat);
    this.setState({ food: flteredFood });
  };

  render() {
    return (
      <div className="container my-5">
        <div className="row gy-5">
          <div className="container">
            <h2 className="h2">Fruits</h2>{" "}
            <button
              className="btn btn-danger"
              onClick={() => this.deleteMany("Vegetables")}
            >
              Delete Category
            </button>
          </div>
          {this.state.food.map((cat) => {
            if (cat.category === "Fruits") {
              return (
                <Food
                  onDelete={this.deleteOne}
                  key={this.state.food.id}
                  food={cat}
                />
              );
            }
            return null;
          })}
          <div className="container">
            <h2 className="h2">Vegetables</h2>{" "}
            <button
              className="btn btn-danger"
              onClick={() => this.deleteMany("Fruits")}
            >
              Delete Category
            </button>
          </div>
          {this.state.food.map((cat) => {
            if (cat.category === "Vegetables") {
              return (
                <Food
                  onDelete={this.deleteOne}
                  key={this.state.food.id}
                  food={cat}
                />
              );
            }
            return null;
          })}
        </div>
        <div className="container">
          <Search food={this.state.food} />
        </div>
      </div>
    );
  }
}
