import React from "react";
import "./contactus.css";
import { Link } from 'react-router-dom';

function Card() {
     

<div className="main">
              <div className="sub-main">
                  <div>
                       <div className="d-flex flex">
                          <div className="box">
                              <p className="ready">If you’re ready to start, get in touch with us!</p>
                                <hr />
                            </div>
                            <div className="box1">
                               <p className="ready1">01/03</p> <hr />
                            </div>
                        </div>
                        <div>
                            <div className="third-input">
                               <input type="text" placeholder="Name*" className="name2"/>
                            </div>
                        </div>
                        <div>
                           <div className="d-flex flex">
                           <div className="first-input">
                                <input type="text" placeholder="Email*" className="name"/>
                            </div>
                            <div className="second-input">
                                <input type="text" placeholder="Mobile Number*" className="name1"/>
                            </div>
                            </div>
                        </div>
                        <div>
                           <div className="next-button">
                               <button className="button"  as={Link} to="">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
}

export default Card;