import React, { Component } from 'react'

export default class CreatePost extends Component {
    constructor (props) {
      super(props)
      this.state = {
        name: '',
        title: '',
        blog: ''
      }
      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleTitleChange = this.handleTitleChange.bind(this)
      this.handleBlogChange =this.handleBlogChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

  handleNameChange (e) {
    this.setState({name: e.target.value})
  }
  handleTitleChange (e) {
    this.setState({title: e.target.value})
  }
  handleBlogChange (e) {
    this.setState({blog: e.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({name: event.target.value, title: event.target.value, blog: event.target.value})
    let listItem = JSON.stringify(this.state)

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: 'POST',
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then(response => {
    console.log(response, 'yay')
  })
  .catch(err => {
    console.log(err, 'boo!')
  })
    this.setState({name: '', title: '', blog: ''})
  }

  render () {
    return (
      <div className='create-post'>
      <img className="card-img-top" src={require('../images/thoughts.jpg')} alt="thoughts" style={{width: "20%", borderRadius: "5px"}}/>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Author&apos;s Name:</label>
            <input onChange={this.handleNameChange} value={this.state.name} type="text" className="form-control" id="formGroupExampleInput" placeholder="You can use your name, email, or pen name if you'd like" />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Title:</label>
            <input onChange={this.handleTitleChange} value={this.state.title}  type="text" className="form-control" id="formGroupExampleInput2" placeholder="Article title" />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Write your blog...</label>
            <textarea onChange={this.handleBlogChange} value={this.state.blog} type="text" className="form-control" rows="5" id="formGroupExampleInput2" placeholder="What's on your mind?" />

          </div>
          <button type="submit" className="btn btn-primary">Submit Post</button>
        </form>
      </div>
    )
  }
}
