const React = require('react');
const FillerText = require('./FillerText');

class Webpage extends React.Component {
  render() {
    return(
      <div>
        The world's coolest webpage
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

module.exports = Webpage
