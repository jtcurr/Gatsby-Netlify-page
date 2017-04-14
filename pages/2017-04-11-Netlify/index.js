const React = require('react')
const Netlify = require('../../questionComponents/Netlify')
require('react-dates/css/variables.scss')
require('react-dates/css/styles.scss')


class NetlifyPost extends React.Component {
  render () {
    return (
      <div>
        <Netlify />
      </div>
    )
  }
}

export default NetlifyPost

exports.data = {
  title: "Netlify",
  date: "2017-04-11",
}