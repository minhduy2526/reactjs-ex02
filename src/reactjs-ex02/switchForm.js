import React, { Component } from 'react';
import switchFormStyles from './switchForm.module.css';
import model from '../assets/img/model.jpg';
import glasses1 from '../assets/img/v1.png';

class SwitchForm extends Component {
    render() {
        return (
            <div className={switchFormStyles.container}>
                <div className={switchFormStyles.left}>
                    <div className={switchFormStyles.imgModel} style={{
                        backgroundImage: `url(${model})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}>
                        <img src={glasses1} alt='' />
                        <div className={switchFormStyles.content}>
                            <h1>GUCCI G8850U</h1>
                            <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                        </div>
                    </div>
                </div>
                <div className={switchFormStyles.right}>
                    <img src={model} alt=''/>
                </div>
            </div>
        );
    }
}

export default SwitchForm;