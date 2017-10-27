import React, { Component } from "react";
import Index from "./Index";
import NavBar from "./NavBar";
import About from "../components/About"
import { Circle } from "better-react-spinkit"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      loading: false
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.loading = this.loading.bind(this);
  }

  handleSearch(event) {
    this.setState({ searchResults: event })
  }

  loading(event) {
    this.setState({ loading: event })
  }

  render() {

    let indexContent;
    if((this.state.searchResults.length > 0) && (!this.state.loading)) {
      indexContent =
      <Index searchResults={this.state.searchResults} />
    } else if (this.state.loading) {
      indexContent =
      <div className='centered-loading'>
        <Circle size={50} scaleEnd={1} />
      </div>
    }

    return (
      <div>
        <nav>
          <NavBar
            handleSearch={this.handleSearch}
            loading={this.loading}
          />
        </nav>
        {indexContent}
      </div>
    )
  }
}

export default IndexPage;
