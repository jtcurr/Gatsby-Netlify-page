const React = require('react')
const Customers = require('../../questionComponents/Customers')
require('react-dates/css/variables.scss')
require('react-dates/css/styles.scss')


class CustomersPost extends React.Component {
  render () {
    return (
      <div>
        <Customers />
      </div>
    )
  }
}

export default CustomersPost

exports.data = {
  title: "Customers",
  date: "2017-04-14",
}