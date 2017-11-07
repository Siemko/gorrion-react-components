import React from "react";
import CommentList from "./commentList";
import { getAsync } from './utils'
export default class CommentListContainer extends React.Component {
  state = { comments: [] }

  componentDidMount() {
    getAsync("https://api.myjson.com/bins/t614v")
      .then(comments => this.setState({ comments }))
  }
  
  render() {
    return <CommentList comments={this.state.comments} />;
  }
}
