import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import './gods.css'
import './bootstrap.min.css'
import afina from './image/gods sumbols/afina.jpg';
import aid from './image/gods sumbols/aid.png';
import ares from './image/gods sumbols/ares.png';
import gera from './image/gods sumbols/gera.jpg';
import gipnos from './image/gods sumbols/gipnos.jpg';
import persefona from './image/gods sumbols/persefona.jpg';
import poseidon from './image/gods sumbols/poseidon.PNG';
import tanatos from './image/gods sumbols/tanatos.png';
import xaron from './image/gods sumbols/xaron.png';
import zevs from './image/gods sumbols/zevs.PNG';


class Gods extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="row">
                        {/* bloks whith cards about gods */}
                            <div className="col-md-1-5">
                                < img src={zevs} className="img-fluid" alt="zevs" />
                                Зевс
                            </div>
                            <div className="col-md-1-5">
                                < img src={gera} className="img-fluid" alt="gera" />
                                Гера
                            </div>
                            <div className="col-md-1-5">
                                < img src={poseidon} className="img-fluid" alt="poseidon" />
                                Посейдон
                            </div>
                            <div className="col-md-1-5">
                                < img src={afina} className="img-fluid" alt="afina" />
                                Афина
                            </div>
                            <div className="col-md-1-5">
                                < img src={gipnos} className="img-fluid" alt="gipnos" />
                                Гипнос
                            </div>
                        </div>
                        <div className="row">
                        {/* bloks whith cards about gods */}
                            <div className="col-lg-1-5">
                                < img src={aid} className="img-fluid" alt="aid" />
                                Аид
                            </div>
                            <div className="col-lg-1-5">
                                < img src={persefona} className="img-fluid" alt="persefona" />
                                Персефона
                            </div>
                            <div className="col-lg-1-5">
                                < img src={xaron} className="img-fluid" alt="xaron" />
                                Харон
                            </div>
                            <div className="col-lg-1-5">
                                < img src={ares} className="img-fluid" alt="ares" />
                                Арес
                            </div>
                            <div className="col-lg-1-5">
                                < img src={tanatos} className="img-fluid" alt="tanatos" />
                                Танатос
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Gods
