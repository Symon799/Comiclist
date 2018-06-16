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
            <div>
                <div class="footer-top text-white py-3  bg-dark fixed-bottom">
                    <div class="container">
                        <div class="row text-center">
                            <div class="col-md-12">
                                <h2>ComicList  </h2>
                            </div>
                            <div class="col-md-12">
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