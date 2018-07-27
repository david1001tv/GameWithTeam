import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import './gods.css'
import './bootstrap.min.css'
import afina from './image/gods sumbols/afina.jpg';



class Gods extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="row">
                        {/* bloks whith cards about gods */}
                            <div className="col-md-1-5">
                            {/*< img src={afina} alt="afina" />*/}
                            1
                            </div>
                            <div className="col-md-1-5">2</div>
                            <div className="col-md-1-5">3</div>
                            <div className="col-md-1-5">4</div>
                            <div className="col-md-1-5">5</div>
                        </div>
                        <div className="row">
                        {/* bloks whith cards about gods */}
                            <div className="col-lg-1-5">1</div>
                            <div className="col-lg-1-5">2</div>
                            <div className="col-lg-1-5">3</div>
                            <div className="col-lg-1-5">4</div>
                            <div className="col-lg-1-5">5</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Gods
