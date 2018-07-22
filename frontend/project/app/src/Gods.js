import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import './gods.css'
import './bootstrap.min.css'



class Gods extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 block">
                        <div class="row">
                        {/* bloks whith cards about gods */}
                            <div class="col-md-2">1</div>
                            <div class="col-md-2">2</div>
                            <div class="col-md-2">3</div>
                            <div class="col-md-2">4</div>
                            <div class="col-md-2">5</div>
                        </div>
                        <div class="row">
                        {/* bloks whith cards about gods */}
                            <div class="col-md-2">1</div>
                            <div class="col-md-2">2</div>
                            <div class="col-md-2">3</div>
                            <div class="col-md-2">4</div>
                            <div class="col-md-2">5</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Gods
