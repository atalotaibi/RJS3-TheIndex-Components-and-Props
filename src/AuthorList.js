import React, { Component } from "react";
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    const authorList = this.props.authors.map(author => (
      <AuthorCard author={author} />
    ));
    return <div className="row">{authorList}</div>;
  }
}
export default AuthorList;
