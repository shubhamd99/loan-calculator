import React from 'react'

import './Layout.css';
import Taxcalculator from '../../containers/Tax/Taxcalculator';

export default function Layout() {
  return (
      <div className="Layout">
            <div className="container">
            <div className="row mx-auto">
                <div className="col ">

                    <div className="marvel-device iphone-x">
                    <div className="notch">
                        <div className="camera"></div>
                        <div className="speaker"></div>
                    </div>
                    <div className="top-bar"></div>
                    <div className="sleep"></div>
                    <div className="bottom-bar"></div>
                    <div className="volume"></div>
                    <div className="overflow">
                        <div className="shadow shadow--tr"></div>
                        <div className="shadow shadow--tl"></div>
                        <div className="shadow shadow--br"></div>
                        <div className="shadow shadow--bl"></div>
                    </div>
                    <div className="inner-shadow"></div>
                    <div className="screen">
                     
                     <div className="form-calc"><Taxcalculator /></div>
                      
                    </div>
                </div>

                </div>
            </div>
            </div>
    </div>
  )
}
