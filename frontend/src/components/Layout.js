// Layout.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { remove } from '../actions/actions';

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    /*
    render() {
         return (
             <div class="row">
                 <h1>HOME</h1>
             </div>
         )
     }
     */
   render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" font-size="26px">
                <a class="navbar-brand" href="/">
                    <img src="http://wfarm3.dataknet.com/static/resources/icons/set99/354bd043.png" alt="logo" width="35px" height="35px"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/search">Issues</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/mylist">MyList</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/users">Users</a>
                        </li>
                    </ul>
                    <form class="navbar-form" role="search">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search issues" name="q"/>
                    <div class="input-group-btn">
                        <button class="btn btn-secondary" type="submit"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/768px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png" width="30px" height="30px"/></button>
                    </div>
                </div>
            </form>
                </div>
            </nav>
        )
    }
}
/*
<nav class="navbar navbar-expand-sm bg-dark navbar-dark" text-align="center">
                    <a class="navbar-brand" href="/">
                        <img src="http://wfarm3.dataknet.com/static/resources/icons/set99/354bd043.png" alt="logo" width="40px" height="40px"/>
                    </a>
                    
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/issues">Issues</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/myList">MyList</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/search">Users</a>
                        </li>
                        <form class="form-inline my-2 my-lg-0 pull-right">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-light my-2 my-sm-0" type="submit" href="/search">Search</button>
                        </form>
                    </ul>
                    
                </nav>
*/

export default hot(module)(connect()(Layout))
