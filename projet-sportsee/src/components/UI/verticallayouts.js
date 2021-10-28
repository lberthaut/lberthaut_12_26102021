import React from 'react';
import yogapic from '../../assets/yoga.png'
import swim from '../../assets/swim.png'
import bike from '../../assets/biking.png'
import bodybuilding from '../../assets/dumbbell.png'

export default class Verticallayouts extends React.Component {
    render (){
        return(
            <menu className="menu">
                <nav className="verticallayout">
                    <button className="yoga">
                        <img className="yogapic" src={yogapic} alt="yoga"></img>
                    </button>
                    <button className="swim">
                        <img className="swim" src={swim} alt="swimming"></img>
                    </button>
                    <button className="bike">
                        <img className="bike" src={bike} alt="biking"></img>
                    </button>
                    <button className="bodybuilding">
                        <img className="bodybuilding" src={bodybuilding} alt="bodybuilding"></img>
                    </button>
                </nav>
                <p>Copiryght, SportSee 2021</p>
            </menu>
        )
    }
}