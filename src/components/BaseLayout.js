import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'


export default class BaseLayout extends Component {
  render () {
    return (
      <div className='base-layout'>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <NavLink exact to='/' activeStyle={{color: "#52aefd"}} className="navbar-brand">React Blog</NavLink>
            <div className="navbar-nav">
              <NavLink to='/create' activeClassName='selected'className="nav-item nav-link">Create Post</NavLink>
              <NavLink to='/show' activeClassName='selected' className="nav-item nav-link">Show All Posts</NavLink>
            </div>
          </div>
        </nav>
        {this.props.children}
        <div className='footer'>
          <nav className="navbar navbar-light bg-faded">
            <h1 className="navbar-brand mb-0">Carlota Pearl | Copyright 2017</h1>
          </nav>
        </div>
      </div>
    )
  }
}
