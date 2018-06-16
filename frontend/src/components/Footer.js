// Footer.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

   render() {
        return (
            <div><br/><br/>
                <div className="footer text-white py-3 bg-dark">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2>ComicList  </h2>
                            </div>
                            <div className="col-md-12">
                                Keep track of your favorite comics ! @Copyright ComicList
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(module)(connect()(Footer))