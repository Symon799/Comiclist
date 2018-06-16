// Home.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { remove } from '../actions/actions';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

   render() {
        return (
            <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="../../public/comics2.png" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="../../public/comics.png" alt="Second slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="container">
                <br/><h1>Last issues</h1><br/>
                <div className="row">
                    <div className="col-md-2">
                        <a href="/issue/505116">
                            <img className="img-fluid rounded mb-3 mb-md-0" src="https://comicvine.gamespot.com/api/image/scale_medium/4891270-6829728483-THEFL.jpg" alt="" width="300" height="200"/>
                        </a>
                        <center><h5>Flash</h5></center>
                    </div>
                    <div className="col-md-2">
                    <a href="/issue/505116">
                            <img className="img-fluid rounded mb-3 mb-md-0" src="https://comicvine.gamespot.com/api/image/scale_avatar/4891270-6829728483-THEFL.jpg" alt="" width="300" height="200"/>
                        </a>
                        <center><h5>Flash</h5></center>
                    </div><div className="col-md-2">
                    <a href="/issue/505116">
                            <img className="img-fluid rounded mb-3 mb-md-0" src="https://comicvine.gamespot.com/api/image/scale_avatar/4891270-6829728483-THEFL.jpg" alt="" width="300" height="200"/>
                        </a>
                        <center><h5>Flash</h5></center>
                    </div><div className="col-md-2">
                    <a href="/issue/505116">
                            <img className="img-fluid rounded mb-3 mb-md-0" src="https://comicvine.gamespot.com/api/image/scale_avatar/4891270-6829728483-THEFL.jpg" alt="" width="300" height="200"/>
                        </a>
                        <center><h5>Flash</h5></center>
                    </div><div className="col-md-2">
                    <a href="/issue/505116">
                            <img className="img-fluid rounded mb-3 mb-md-0" src="https://comicvine.gamespot.com/api/image/scale_avatar/4891270-6829728483-THEFL.jpg" alt="" width="300" height="200"/>
                        </a>
                        <center><h5>Flash</h5></center>
                    </div>
                    <div className="col-md-2">
                    <a href="/issue/505116">
                            <img className="img-fluid rounded mb-3 mb-md-0" src="https://comicvine.gamespot.com/api/image/scale_avatar/4891270-6829728483-THEFL.jpg" alt="" width="300" height="200"/>
                        </a>
                        <center><h5>Flash</h5></center>
                    </div>
                </div>
                    

                <br/><h1>Watching</h1>
                    issues Watching
                <br/><h1>Watched</h1>
                    issues watched
            </div>
            </div>
        )
    }
}

export default hot(module)(connect()(Home))