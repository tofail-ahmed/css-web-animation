import "./App.css";
import 'animate.css';

function App() {
  const name = 'Programming Hero';
  const nameArr = name.split('');
  const items = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  
  return (
    <div className="main">
        {/* <button className="btn"></button>  */}
     {/* <div className="box">Box</div>  */}
     {/* <div className="loading">
      <div className="glass"></div>
      <div className="box-1">1</div>
      <div className="box-2">2</div>
      <div className="box-3">3</div>
      <div className="box-4">4</div>
      <div className="box-5">5</div>
      <div className="box-6">6</div>
      <div className="box-7">7</div>
      <div className="box-8">8</div>
    </div>  */}
    {/* <div className="card-parent ">
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minus eaque? Aut enim quisquam blanditiis ratione doloribus reprehenderit quos ut.</h3>
    <div className="card">
      <div className="card-child">
        <h1>Header</h1>
        <p className="what">??</p>
      </div>
<h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam debitis aliquam voluptates delectus possimus fuga dignissimos dolore saepe tempora!</h4>
    </div>
    </div> */}
      {/* <div className="container">
        {nameArr.map((letter, i) => (
          <span className="letter" style={{ transitionDelay: `${i * 50}ms` }}>{letter}</span>
        ))}
      </div> */}
      <ul className="tech-list">
        {items.map((tech, index) => (
          <li key={index} className="tech-item">
            <div className="tech-content" style={{ transitionDelay: `${index * 50}ms` }}>
              <span className="tech-name">{tech}</span>
              <span className="tech-icon">🚀</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
