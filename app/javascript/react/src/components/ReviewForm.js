import React from "react"

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
      body: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  clearForm() {
    this.setState({
      rating: 0,
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
      body: this.state.body,
      rating: this.state.rating
    }
    this.props.addReview(formPayload)
    this.clearForm()
  }

  render() {
    return (
      <div className="comment-container">
        <div className="review-tile row">
          <div className="user-box small-3 column">
            <div className="user-photo"></div>
            <br />
          </div>
          <div className="small-9 column">
            <span className="rating">
              <i className="fa fa-star" aria-hidden="true"></i> {this.state.rating}
            </span>
            <input className="rating-input" type="range" min="0" max="5" step="1" name="rating" value={this.state.rating} onChange={this.handleChange} />
            <form onSubmit={this.handleSubmit}>
              <input
                className="review-form"
                name="body"
                value={this.state.body}
                onChange={this.handleChange}
              />
              <button type="submit" value="Submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewForm
