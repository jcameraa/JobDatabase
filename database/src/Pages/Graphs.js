import React from "react";
import '../StyleSheets/carousel.css';
import Container from 'react-bootstrap/Container'
import { Button } from 'react-floating-action-button'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Icon from '../Images/anger.png'
import Icon2 from '../Images/hesays.png'
import Icon3 from '../Images/sleep.jpg'

const Graphs = () => {
    return (
        <div>

            <hr className="my-4"></hr>
        
                {/* <!--Carousel Wrapper--> */}
                <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                
                    {/* <!--Controls--> */}
                    <div className="controls-top">
                    <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
                    
                    <Button
                        tooltip="The big plus button!"
                    />
                    
                        <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
                    </div>
                    {/* <!--/.Controls--> */}

                    {/* <!--Indicators--> */}
                    <ol className="carousel-indicators">
                        <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                        <li data-target="#multi-item-example" data-slide-to="1"></li>
                        <li data-target="#multi-item-example" data-slide-to="2"></li>
                    </ol>
                    {/* <!--/.Indicators--> */}

                    {/* <!--Slides--> */}
                    <div className="carousel-inner" role="listbox">

                        {/*}<!--First slide--> 
                        <div className="carousel-item active">

                            <Row>
                                <div className="col-md-4">
                                    <div className="card mb-2">
                                        <Image className="card-Image-top" src={Icon}
                                            alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">Card title</h4>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                            card's content.</p>
                                            <a className="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4 clearfix d-none d-md-block">
                                    <div className="card mb-2">
                                        <Image className="card-Image-top" src={Icon2}
                                            alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">Card title</h4>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                            card's content.</p>
                                            <a className="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4 clearfix d-none d-md-block">
                                    <div className="card mb-2">
                                        <Image className="card-Image-top" src={Icon3}
                                            alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">Card title</h4>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                            card's content.</p>
                                            <a className="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            
                        </div>
                        {/* <!--/.First slide--> 

                        
                        {/* <!--Second slide--> 
                        <div className="carousel-item active">

                            <Row>
                                <div className="col-md-4">
                                    <div className="card mb-2">
                                        <Image className="card-Image-top" src={Icon3}
                                            alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">Card title</h4>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                            card's content.</p>
                                            <a className="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 clearfix d-none d-md-block">
                                    <div className="card mb-2">
                                        <Image className="card-Image-top" src={Icon}
                                            alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">Card title</h4>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                            card's content.</p>
                                            <a className="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 clearfix d-none d-md-block">
                                    <div className="card mb-2">
                                        <Image className="card-Image-top" src={Icon2}
                                            alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">Card title</h4>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                            card's content.</p>
                                            <a className="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </Row>

                        </div>
                         <!--/.Second slide--> */}

                    </div>
                    {/* <!--/.Slides--> */}
                
                </div>
                {/* <!--/.Carousel Wrapper--> */}

            
        </div>
    );
}

export default Graphs;