import React, { Component } from 'react';
const Title = 'Hello May';

const renderInfo = (name, age)=>{
  return <span>{`xin chao ${name} va tui ${age}`}</span>
}
class DataBinding extends Component {
  user = {
        userName:'khai',
        password: 123
    }


    render() {
        return (
            <div className='container'>
                <h3 id="title">{Title}</h3>
                <p>{renderInfo('Tùng',18)}</p>

                <div className='card w-25'>
                    <h3 className='card-header text-center bg-dark text-white'>User info</h3>
                    <p>Username</p>
                    <input className='form-control' value={this.user.userName} />
                    <p>Password</p>
                    <input className='form-control' type="password" value={this.user.password} />
                </div>


            </div>
        )
    }
}

export default DataBinding;