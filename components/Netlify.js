const React = require('react')
require('../css/localStyles.css')

export default class Netlify extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>What did you think of our service during the time you used it?</li>
            <span>From a totally objective point of view, I think that the experience that Netlify has for quickly creating a full website is great. The UI was very polished, and I was able to get everything running and deployed in a couple of minutes. The 'getting started' page, as well as the documentation page, was super straightforward and quickly answered all of my questions on how Netlify and Gatsby worked. Impressive</span> 
          <li>Tell about how you made your site and why you chose the tools you did. Briefly explain a challenge you experienced in setting up this site and how you solved it.</li>
            <span>I chose to use Gatsby because I know someone who had used it with favorable results for their blog and I had seen a different blog about it a couple of months ago, so I was interested to give it a look. As far as structure was concerned, I made each block of questions it's own component to provide better modularity. One of the challenges that I came across was that after the site was built, it was throwing an error that GoogleFonts could not be found. Eventually I found that it was because when the path to the API was generated it was missing a prefix of 'https'.</span>
          <li>Could you give us a suggestion to improve this test or the job posting?</li>
            <span>I would suggest having an open ended part of what this page should do. Give the applicant a chance to show off something that they are really interested in, acknowledged more time may need to be allocated for completing the task. Maybe have a button on the page that has open ended functionality?</span>
        </ul>
      </div>
    )
  }
}