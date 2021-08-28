import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
      <div>
        <span className="container">Title : {location.state.title}</span>
        <span className="container">Year : {location.state.year}</span>
        {/* <span className="container">Summary : {location.state.summary}</span>; */}
        {/* <img className="container" src={location.state.poster} alt={location.state.title}></img> */}
        {/* <span className="container">{location.state.genres}</span> */}
      </div>
      )
    } else {
      return null;
    }
  }
}
export default Detail;
