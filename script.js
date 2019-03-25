class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      running: false,
      lapTimes: []
    };
  }

  componentDidMount = () => {
    this.watch = setInterval(() => {
      if (this.state.running) {
        this.calculate();
      }
    }, 10);
  };

  componentWillUnmount() {
    clearInterval(this.watch);
  }

  start = () => this.setState({ running: true });

  stop = () => this.setState({ running: false });

  reset = () => {
    if (!this.state.running) {
      this.setState({
        minutes: 0,
        seconds: 0,
        miliseconds: 0,
        lapTimes: []
      });
    }
  };

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

  calculate = () => {
    this.setState({ miliseconds: this.state.miliseconds + 1 });

    if (this.state.miliseconds >= 100) {
      this.setState({
        seconds: this.state.seconds + 1,
        miliseconds: 0
      });
    }
    if (this.state.seconds >= 60) {
      this.setState({
        minutes: this.state.minutes + 1,
        seconds: 0
      });
    }
  };

  lapTime = () => {
    const lap = this.format();
    if (this.state.running) {
      this.setState({ lapTimes: [...this.state.lapTimes, lap] });
      console.log(this.state.lapTimes);
    }
  };

  resetLaps = () => {
    this.setState({ lapTimes: [] });
  };

  render() {
    const lapList = this.state.lapTimes.map(item => {
      return <li key={item}>{item}</li>;
    });
    return (
      <div className="counter">
        <nav className="controls">
          <a href="#" className="button" onClick={this.start}>
            Start
          </a>
          <a href="#" className="button" onClick={this.stop}>
            Stop
          </a>
          <a href="#" className="button" onClick={this.reset}>
            Reset All
          </a>
          <a href="#" className="button" onClick={this.lapTime}>
            Lap
          </a>
          <a href="#" className="button" onClick={this.resetLaps}>
            Reset Laps
          </a>
        </nav>
        <div className="stopwatch" id="watch">
          {this.format()}
        </div>
        <div className="results">
          <h4>Laps: </h4>
          <ol>{lapList}</ol>
        </div>
      </div>
    );
  }
}

const app = React.createElement(Stopwatch);
ReactDOM.render(app, document.getElementById("app"));
