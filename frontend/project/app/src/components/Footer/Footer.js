import React, { Component } from 'react';
import './footer.css';
import './bootstrap.min.css';
import logo from './logo.png';

class Footer extends Component {

  render() {
    return (
      <div className="fon">
       <div className="head">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="tych1">
                    <img src={logo} alt="logo" className="logo__head"/>
                    </div>
                </div>
                <div className="col-md-9">

                </div>
            </div>
            </div>
       </div>
      </div>
    );
  }
}

export default Footer;