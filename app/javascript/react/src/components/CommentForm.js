import React from "react"

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  clearForm() {
    this.setState({
      body: ""
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value}
    );
  }

  handleSubmit(event) {
    event.preventDefault()
    const formPayload = {
      body: this.state.body
    }
    this.props.addComment(formPayload)
    this.clearForm()
  }

  render() {
    return (
      <div className="comment-tile">
        <form onSubmit={this.handleSubmit}>
          <input
            className="review-body"
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default CommentForm
