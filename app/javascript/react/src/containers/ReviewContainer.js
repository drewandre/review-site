import React, { Component } from "react"
import CommentContainer from './CommentContainer'
import ReviewTile from '../components/ReviewTile'
import TextInputField from '../components/TextInputField'

class ReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews:[]
    }
    this.addNewReview = this.addNewReview.bind(this)
  }

  // componentDidMount() {
  //   fetch('/api/v1/users/:user_slug/repos/:repo_slug/reviews/')
  //   .then(response => response.json())
  //   .then(body => {
  //     this.setState({ reviews: body })
  //   })
  // }

  addNewReview(formPayload) {
    fetch('/api/v1/users/:user_slug/repos/:repo_slug/reviews/', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => reponse.json)
    .then(responseData => {
      this.setState({ reviews: [...this.state.reviews, responseData] })
    })
  }

  render() {

    // let addNewReview=(formPayload) => this.addNewReview(formPayload)

    let reviews = this.state.reviews.map(review => {

      return(
        <div className='individual-review'>
          <hr></hr>
          <ReviewTile
            key={review.id}
            id={review.id}
            // body={review.body}
            body={review}
          />
        </div>

      )
    })

    return(
      <div className='review-container'>
        {reviews}
          <form className='review-tile'>
            <TextInputField
              content={this.state.reviewBody}
              label= "Review"
              name="review"
              handleChange={this.handleTextInputField}
            />
            <div>
              <input className="button" type="submit" value="Submit" onClick={this.handleSubmit}/>
            </div>
          </form>
      </div>
    )
  }
}


export default ReviewContainer
