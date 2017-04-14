const React = require('react')
const Activities = require('../../questionComponents/Activities')
require('react-dates/css/variables.scss')
require('react-dates/css/styles.scss')


class ActivitiesPost extends React.Component {
  render () {
    return (
      <div>
        <Activities />
      </div>
    )
  }
}

export default ActivitiesPost

exports.data = {
  title: "Activities",
  date: "2017-04-13",
}