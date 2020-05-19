import React from 'react';
import "./about.css";

class AboutPage extends React.Component {
    render() {
        return (
        <>
          <div className="home">
          <h4>Welcome!</h4>
          <h5>It is a website that helps <strong>students</strong> or anyone who wants to search
              <br/>for a reference or book that helps them through this site,<br/>
              and also anyone who wants to <strong>contribute</strong> to publishing a reference or book.</h5>
              <br/>
              <h4>Connect with us!</h4>
              <a href="https://ranen-alkhlabi@hotmail.com"> Email</a> 
              <a href="https://slack.com/UUYCYF10R">Slack</a> 
              <a href="https://github.com/Ranen-Khlabi">Github</a> 
        </div>
        </>
        );
    }
}

export default AboutPage;