import React, { Component } from 'react'
import '../styles/App.css'
import {Link} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className="jumbotron">
          <img className="card-img-top" src={require('../images/blog-header.png')} alt="blog" style={{width: "100%", borderRadius: "5px"}} />
          <h1 className="display-3">Welcome to my Blog</h1>
          <p className="lead">Feel free to enter your thoughts here.</p>
          <hr className="my-4" />
          <p>Click the button below to Create a Post!</p>
          <p className="lead">
            <Link to='/create' className="btn btn-primary btn-lg" role="button">Create a post!</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default App
