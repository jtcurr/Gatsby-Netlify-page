const React = require('react')
require('../css/localStyles.css')

export default class Customers extends React.Component {
  render () {
    return (
      <div>
        <ol>
          <li className='prompt'>A customer writes in saying their “site won’t build”.  Compose your best short (2-paragraph) customer-facing answer without any additional data, that could be useful in the generic case but would also lead to a customer providing a more actionable response.</li>
          <p>Greetings! I am sorry to hear that your site won't build, we can start working on that right away. First, can you go into the directory of the site and delete the folder titled "node_modules". Then go back into the terminal and type in "npm install", this will do a fresh reinstall all of your node modules. Please look for any errors that are being thrown during this process. Additionally please make sure that Netlify is authorized on your Github to access your account, to enable Netlify to deploy your application</p>
          <p>Next, I can see that your page is using React and Node; please make sure your Node version is current. To find out what version of Node you have, go to the command line and type "node -v". We use version 6.9.1, so please make sure your Node version matches. Lastly, please see if the terminal is throwing any errors when it builds. Any error messages I would be more than happy to diagnosis on a follow up email. Sorry for any inconvenience this has caused you.</p> 
          <span>-John Currie</span>
        </ol>
      </div>
    )
  }
}