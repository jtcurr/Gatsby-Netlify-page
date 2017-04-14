const React = require('react')
require('../css/localStyles.css')

export default class Technical extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li className='prompt'>Provide a link to documentation for a technical/developer-focused product, that you think are well done, and briefly explain why you think they are well done.</li>
            <a href='https://github.com/reactjs/react-redux'>Redux</a>
            <span className='activeRow'>Redux with React makes so much sense if the project that you are working on has a lot of state to manage. It is such a clean setup where you can have the component connect to the store and access the state way, and dispatch actions to change the state. It is a really good idea executed in a clean and lightweight fashion. And the fact that Redux was made with such a small amount of code, is technically very impressive.</span>
          <li className='prompt'>Why do you think SSL/HTTPS is important?</li>
            <span className='activeRow'>SSL and HTTPS are important because it gives a client using a business's website the peace of mind knowing that the website they are visiting are who they say they are. Additionally SSL and HTTPS give the customer a secure way to transmit sensitive data(i.e. credit card numbers, billing addresses) across the internet by utilizing bidirectional encrypting. When the data is encrypted before it leaves the user's computer and only decrypted on the side of the computer holding and SSL certificate, it prevents 3rd party attackers from getting access to the data</span> 
          <li className='prompt'>Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical internet end-users</li>
            <p>First, DNS stands for Domain Name System. Each computer has a unique address associated with their location known as an IP address. However, the IP address, which could be something like 127.0.0.1:4568 is very hard for humans to remember. However there is a solution! To transform that abstract series of numbers into something like Netlify.com, your computer needs to plug the domain name into a DNS, or domain name system</p>
            <p>This is interesting because each time a you try to go to a website or a send an email, the computer looks up the name on a DNS server which has a massive database of domain/IP address combinations. The process of looking up the IP address with the domain that you have entered is called DNS name resolution. After the IP address is found the DNS gives the browser the IP address which redirects the browser to the domain. This process of IP address is extremely important, so much so that the internet would shut down very quickly without it.</p>
        </ul>
      </div>
    )
  }
}