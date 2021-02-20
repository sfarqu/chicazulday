import logo from './temp-banner.png';
import './App.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}
             className="App-logo"
             alt="A very special Chicazul Day livestream for charity! Tuesday, February 23, 11:30am to 7pm PST" />
      </header>
        <div className={"App-body"}>
            <h1>Livestream</h1>
            <a href={"https://www.twitch.tv/fabrefact"}>Twitch Stream</a>
            <h1>Special Guests</h1>
            <ul>
                <li>Mary Robinette Kowal</li>
                <li>Dr. Sarah Ficke</li>
                <li>Sarah Donner & Kittens Slay Dragons</li>
                <li>Molly Lewis</li>
                <li>Andrew Ferguson</li>
                <li>Pat Rothfuss</li>
                <li>Dana Pellebon</li>
                <li>Em Lazer-Walker</li>
                <li>Coriander Dickenson</li>
            </ul>
            <h1>Schedule</h1>
            <p>All times in Pacific time (UTC -8:00)</p>
            <Timeline lineColor={'#ddd'} className={"App-body"}>
                <TimelineItem
                    className={"TimelineItem"}
                    dateText={"11:30am-12:30pm"}
                    dateInnerStyle={{ background: '#00c4cc' }}
                    bodyContainerStyle={{ color: 'white' }}
                       >
                    <h3>Stream kickoff!</h3>
                    <p>Explaining what we're doing here</p>
                    </TimelineItem>
                <TimelineItem dateText={"12:30pm-2:00pm"}
                              dateInnerStyle={{ background: '#00c4cc' }}
                              bodyContainerStyle={{ color: 'white' }}
                >
                    <h3>Bridgerton: Historical Fantasy vs. Reality in Romance</h3>
                    <h4>Mary Robinette Kowal, Dr. Sarah Ficke</h4>
                    <p>Discussing the Netflix show, the books it was based on, and aspects like accuracy and diversity in historical romance.</p>
                    </TimelineItem>
                <TimelineItem dateText={"2:00pm-3:00pm"}
                              dateInnerStyle={{ background: '#00c4cc' }}
                              bodyContainerStyle={{ color: 'white' }}
                >
                    <h3>How to pick a charity to support</h3>
                    <h4>Pat Rothfuss, Dana Pellebon</h4>
                    <p></p>
                </TimelineItem>
                <TimelineItem dateText={"3:00pm-4:00pm"}
                              dateInnerStyle={{ background: '#00c4cc' }}
                              bodyContainerStyle={{ color: 'white' }}
                >
                    <h3>Designing virtual social spaces</h3>
                    <h4>Em Lazer-Walker</h4>
                    <p></p>
                </TimelineItem>
                <TimelineItem dateText={"4:00pm-5:00pm"}
                              dateInnerStyle={{ background: '#00c4cc' }}
                              bodyContainerStyle={{ color: 'white' }}
                >
                    <h3>Music time!</h3>
                    <h4>Sarah Donner, Kittens Slay Dragons, Molly Lewis</h4>
                    <p></p>
                </TimelineItem>
                <TimelineItem dateText={"5:00pm-6:00pm"}
                              dateInnerStyle={{ background: '#00c4cc' }}
                              bodyContainerStyle={{ color: 'white' }}
                >
                    <h3>A tour of VR games I've made</h3>
                    <h4>Molly Lewis, Andrew Ferguson, Coriander Dickenson</h4>
                    <p></p>
                </TimelineItem>
            </Timeline>
        </div>
    </div>
  );
}

export default App;
