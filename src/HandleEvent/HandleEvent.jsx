import React, { Component } from "react";

class HandleEvent extends Component {
  HandleEvent = (e) => {
    alert("helloo");
    e.target.className = 'btn btn-danger'
  };
  render() {
    const HandleEvent = () => {
      alert("helloo");
    };
    return (
      <div className="container">
        <h3>Handle Event</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            alert("helloo");
          }}
        >
          Click me!
        </button>
        <button className="btn btn-success" onClick={HandleEvent}>
          Click me!
        </button>
        <button
          className="btn btn-success"
          onClick={this.HandleEvent}
        >
          Click me!
        </button>
      </div>
    );
  }
}

export default HandleEvent;
