import logo from './temp-banner.png';
import './App.css';

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
                <li>Pat Rothfuss</li>
                <li>Dana Pellebon</li>
                <li>Em Lazer-Walker</li>
                <li>Coriander Dickenson</li>
            </ul>
            <h1>Schedule</h1>
            <p>All times in Pacific time (UTC -8:00)</p>
            <table>
                <tr>
                    <td>11:30am</td>
                    <td>Stream Kickoff!</td>
                </tr>
                <tr>
                    <td>12:30pm</td>
                    <td>Bridgerton discussion with Mary Robinette Kowal & Dr. Sarah Ficke</td>
                </tr>
                <tr>
                    <td>2pm</td>
                    <td>How to pick a charity to support with Pat Rothfuss & Dana Pellebon</td>
                </tr>
                <tr>
                    <td>3pm</td>
                    <td>Designing virtual social spaces with Em Lazer-Walker</td>
                </tr>
                <tr>
                    <td>4pm</td>
                    <td>Music time! Featuring Sarah Donner, Kittens Slay Dragons, and Molly Lewis</td>
                </tr>
                <tr>
                    <td>5pm</td>
                    <td>A tour of VR games I've made hosted by Molly Lewis, featuring Coriander Dickenson</td>
                </tr>
            </table>
        </div>
    </div>
  );
}

export default App;
