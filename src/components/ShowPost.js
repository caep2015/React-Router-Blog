import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ShowPost extends Component {

  componentDidMount () {
    const { id } = this.props.match.params
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`
    fetch(URL).then(response => {
      return response.json()
    }).then()

  }

  render () {
    return (
      <div className='show-post'>
      </div>
    )
  }
}
