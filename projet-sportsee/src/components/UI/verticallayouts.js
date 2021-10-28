import React from 'react';
import yogapic from '../../assets/yoga.png'
import swim from '../../assets/swim.png'
import bike from '../../assets/biking.png'
import bodybuilding from '../../assets/dumbbell.png'

export default class Verticallayouts extends React.Component {
    render (){
        return(
            <menu className="verticallayout">
                <nav className="iconsbar">
                    <button className="yoga icons">
                        <img className="yogapic" src={yogapic} alt="yoga"></img>
                    </button>
                    <button className="swim icons">
                        <img className="swim" src={swim} alt="swimming"></img>
                    </button>
                    <button className="bike icons">
                        <img className="bike" src={bike} alt="biking"></img>
                    </button>
                    <button className="bodybuilding icons">
                        <img className="bodybuilding" src={bodybuilding} alt="bodybuilding"></img>
                    </button>
                </nav>
                <p className="copyright">Copiryght, SportSee 2021</p>
            </menu>
        )
    }
}