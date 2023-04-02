import React, { Component } from "react";

class ChonXe extends Component {
  state = {
    srcCar: "./img/products/red-car.jpg",
  };
  handleChangeColor = (color) => {
    this.setState({
        srcCar: `./img/products/${color}-car.jpg`
    })
}
  render() {
    return (
      <div className="container">
        <h3>Bai tap chon xe </h3>
        <div className="row">
          <div className="col-6">
          <img src={this.state.srcCar} className='w-100' />
          </div>
          <div className='col-6'>
                <button className='btn btn-dark mx-2' onClick={()=> {
                    this.handleChangeColor('black')
                }}>Black Car</button>
                <button className='btn btn-danger mx-2' onClick={()=>{
                    this.handleChangeColor('red')
                }}>Red Car</button>
                <button className='btn btn-light mx-2' onClick={()=>{
                    this.handleChangeColor('steel')
                }}>Steel Car</button>
                <button className='btn btn-secondary mx-2' onClick={()=>{
                    this.handleChangeColor('silver')
                }}>Silver Car</button>
            </div>
        </div>
      </div>
    );
  }
}

export default ChonXe;
