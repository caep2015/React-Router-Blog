import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class PostList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      blogs: []
    }
  }

  componentDidMount () {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger').then(results => {
        return results.json()
      }).then(data => {
        console.log(data)
        this.setState({blogs: data})
      })
  }

  render () {
    return (
      <div className='post-list'>
        <div>
          <h3>Check out the blog posts below!</h3>
        </div>
        {this.state.blogs.map((result) =>
          <div key={result._id}>
            <h5>Total Posts: {result.length}</h5>
            <ul className="list-group">
              <li className="list-group-item">Title:</li>
              <li className="list-group-item list-group-item-info"><Link to={`/show/${result._id}`}>{result.title}</Link></li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}
