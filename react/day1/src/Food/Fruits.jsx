import { Component } from "react";

export default class Food extends Component {
  state = {};

  render() {
    
    let { price, name, id } = this.props.food;
    return (
      <div className=" col-md-4">
        <ul className="bg-dark text-white p-4">
          <li>{name}</li>
          <li>{price}</li>
        </ul>
          <button
            onClick={() => this.props.onDelete(id)}
            className="btn btn-danger"
          >
            Delete
          </button>
      </div>
    );
  }
}
