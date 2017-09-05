import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ShowPost extends Component {

constructor (props) {
  super(props)

  this.state = {
    blog: {}
  }
}
  componentDidMount () {
    const { id } = this.props.match.params
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`
    fetch(URL).then(response => {
      return response.json()
    }).then(data => {
        console.log(data)
        this.setState({blog: data})
      })
  }

  render () {
    let blogInfo = this.state.blog
    return (
      <div className='show-post'>
        <div className="card">
          <h3 className="card-header">{blogInfo.title}</h3>
          <div className="card-block">
            <h4 className="card-title">By: {blogInfo.name}</h4>
            <p className="card-text">{blogInfo.blog}</p>
            <Link to='/show' className="btn btn-primary">Back to all blog posts</Link>
          </div>
        </div>
      </div>
    )
  }
}
