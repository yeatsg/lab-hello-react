import './App.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from  './images/icon3.png';
import icon4 from './images/icon4.png';
import ironhacklogo from './images/ironhack-logo-xs.png';
import logo192 from './images/logo192.png';
import logo512 from './images/logo512.png';
import menutop from './images/menu-top-xs.png';

function App() {
  return (
    <div className="App">
      <nav>
        <img src={ironhacklogo} class="teeny-watermark"/>
        <img src={menutop} class="teeny-watermark"/>
      </nav>
      <div id='big-boi'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
        <a href='#' class="button">Awesome</a>
      </div>
      <div id="icon-row">
        <div class="column">
          <img src={icon1} alt="image not found"/>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div class="column">
          <img src={icon2}/>
          <h2>Components</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div class="column">
          <img src={icon3}/>
          <h2>Single-way</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div class="column">
          <img src={icon4}/>
          <h2>JSX</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
