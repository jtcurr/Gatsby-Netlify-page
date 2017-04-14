const React = require('react')
const Technical = require('../../questionComponents/Technical')
require('react-dates/css/variables.scss')
require('react-dates/css/styles.scss')


class TechnicalPost extends React.Component {
  render () {
    return (
      <div>
        <Technical />
      </div>
    )
  }
}

export default TechnicalPost

exports.data = {
  title: "Technical",
  date: "2017-04-14",
}