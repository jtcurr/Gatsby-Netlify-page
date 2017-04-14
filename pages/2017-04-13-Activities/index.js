const React = require('react')
const Activities = require('../../components/Activities')
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
  date: "2016-12-09T12:40:32.169Z",
}