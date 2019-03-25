class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      running: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
  }

  handleOnClick = e => {
    this.setState({ running: false });
  };
  // reset = () => {
  //   this.setState({
  //     minutes: 0},{
  //     seconds: 0},{
  //     miliseconds: 0
  //   });
  // };

  format() {
    function pad0(value) {
      let result = value.toString();
      if (result.length < 2) {
        result = "0" + result;
      }
      return result;
    }
    return `${pad0(this.state.minutes)}:${pad0(this.state.seconds)}:${pad0(
      Math.floor(this.state.miliseconds)
    )}`;
  }

  // start() {
  //   if (!this.running) {
  //     this.running = true;
  //     this.watch = setInterval(() => this.step(), 10);
  //   }
  // }
  // step() {
  //   if (!this.running) return;
  //   this.calculate();
  //   this.print();
  // }
  // calculate() {
  //   this.times.miliseconds += 1;
  //   if (this.times.miliseconds >= 100) {
  //     this.times.seconds += 1;
  //     this.times.miliseconds = 0;
  //   }
  //   if (this.times.seconds >= 60) {
  //     this.times.minutes += 1;
  //     this.times.seconds = 0;
  //   }
  // }
  // stop() {
  //   this.running = false;
  //   clearInterval(this.watch);
  // }
  // resetStopwatch() {
  //   if (!this.running) {
  //     this.reset();
  //     this.print();
  //     this.resetLaps();
  //   }
  // }
  // lapTime() {
  //   if (this.running) {
  //     const lapTime = document.createElement("li");
  //     lapTime.innerHTML = this.format(this.times);
  //     const results = document.querySelector("ol.results");
  //     results.appendChild(lapTime);
  //   }
  // }
  // resetLaps() {
  //   if (!this.running) {
  //     const results = document.querySelector("ol.results");
  //     while (results.children.length > 1) {
  //       results.removeChild(results.lastChild);
  //     }
  //   }
  // }

  render() {
    return (
      <div className="counter">
        <nav className="controls">
          <a href="#" className="button">
            Start
          </a>
          <a href="#" className="button">
            Stop
          </a>
          <a
            href="#"
            className="button"
            // onClick={this.reset()}
          >
            Reset
          </a>
          <a href="#" className="button">
            Lap
          </a>
          <a href="#" className="button">
            Reset Laps
          </a>
        </nav>
        <div className="stopwatch">{this.format}</div>
        <ol className="results">
          <h4>Laps: </h4>
        </ol>
      </div>
    );
  }
}
const app = React.createElement(Stopwatch);
ReactDOM.render(app, document.getElementById("app"));
