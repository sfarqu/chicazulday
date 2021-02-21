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
            <h1>What is this?</h1>
            <div className={"container"}>
                <p className={"textBlock"}>Chicazul Day is a time to celebrate through acts of kindness to yourself and those around you.
                    Every year on this day I donate to the Greater Vancouver Food Bank—this year I am asking you to donate with me,
                    either to my charity or your favourite charity in your own community.</p>
            </div>

            <h1>Special Guests</h1>
            <div className={"container"}>
                <ul className={"list"}>
                    <li className={"item"}><a href={"https://twitter.com/MaryRobinette"}>Mary Robinette Kowal</a></li>
                    <li className={"item"}><a href={"https://twitter.com/DameMystery"}>Dr. Sarah Ficke</a></li>
                    <li className={"item"}><a href={"https://twitter.com/sarahdonner"}>Sarah Donner</a></li>
                    <li className={"item"}><a href={"https://twitter.com/meowslaydragons"}>Kittens Slay Dragons</a></li>
                    <li className={"item"}><a href={"https://twitter.com/Molly23"}>Molly Lewis</a></li>
                    <li className={"item"}><a href={"https://twitter.com/warandpeace"}>Andrew Ferguson</a></li>
                    <li className={"item"}><a href={"https://twitter.com/PatrickRothfuss"}>Pat Rothfuss</a></li>
                    <li className={"item"}><a href={"#"}>Dana Pellebon</a></li>
                    <li className={"item"}><a href={"https://twitter.com/lazerwalker"}>Em Lazer-Walker</a></li>
                    <li className={"item"}><a href={"https://twitter.com/apsalar"}>Coriander Dickinson</a></li>
                </ul>
            </div>
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
                    <p>An explanation of what this all is and maybe a few unscheduled guests!</p>
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
                    <p>Worldbuilders board members talk about how to choose where to put your charitable dollars.</p>
                </TimelineItem>
                <TimelineItem dateText={"3:00pm-4:00pm"}
                              dateInnerStyle={{ background: '#00c4cc' }}
                              bodyContainerStyle={{ color: 'white' }}
                >
                    <h3>Designing virtual social spaces</h3>
                    <h4>Em Lazer-Walker</h4>
                    <p>Talking about how to create meaningful social interactions in virtual spaces, and showing off some spaces we've made.</p>
                </TimelineItem>
                <TimelineItem dateText={"4:00pm-5:00pm"}
                              dateInnerStyle={{ background: '#00c4cc' }}
                              bodyContainerStyle={{ color: 'white' }}
                >
                    <h3>Music time!</h3>
                    <h4>Sarah Donner, Kittens Slay Dragons, Molly Lewis</h4>
                    <p>Excellent musical friends playing excellent music!</p>
                </TimelineItem>
                <TimelineItem dateText={"5:00pm-6:00pm"}
                              dateInnerStyle={{ background: '#00c4cc' }}
                              bodyContainerStyle={{ color: 'white' }}
                >
                    <h3>A tour of VR games I've made</h3>
                    <h4>Molly Lewis, Andrew Ferguson, Coriander Dickenson</h4>
                    <p>Check out Hat Island and a giant robot in space with my game jam co-creators and host Molly Lewis</p>
                </TimelineItem>
            </Timeline>
        </div>
    </div>
  );
}

export default App;
