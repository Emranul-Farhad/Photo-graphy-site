import React from 'react';
import Nav from '../Navbar/Nav';


const Blog = () => {
    return (
        <div>
            <Nav></Nav>
           <div>
               <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Authentication vs Authorization
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Authentication verifies who the user is. Authorization determines what resources a user can access.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authorization works through settings that are implemented and maintained by the organization.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Why are you using firebase? What other options do you have to implement authentication?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     Google4 firebase provide powerful tools that help you develop, handle, and enhance your apps based on demand.
      Actually firebase not only provide just authentication system but also provide Goolge admob google analaytics google cloud services , And firebase give realtime data and ready-made UI libraries to authenticate users to your app web games . But firebase has alternative like  Couchbase,  Kuzzle, AWS Amplify,Back4App .
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What other services does firebase provide other than authentication
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Firebase allow syncing the real-time data across all the devices- Android, iOS, game unity and the web without refreshing the pages
Firebase offers integration to Google Ads, AdMob, DoubleClick, Play Store, Data Studio, BigQuery, and Slack, to make your app development with efficient and accurate management and maintenance, as well clound base services storafes messaging. 
      </div>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default Blog;