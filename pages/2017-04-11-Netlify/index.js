const React = require('react')
const Netlify = require('../../components/Netlify')
require('react-dates/css/variables.scss')
require('react-dates/css/styles.scss')


class NetifyPost extends React.Component {
  render () {
    return (
      <div>
        <Netlify />
      </div>
    )
  }
}

export default ActivitiesPost

exports.data = {
  title: "Netlify",
  date: "2017-04-11",
}