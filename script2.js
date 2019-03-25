class Stopwatch {
  constructor(display) {
    this.running = false;
    this.display = display;
    this.reset();
    this.print(this.times);
  }

  reset() {
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
  }

  print() {
    this.display.innerText = this.format(this.times);
  }

  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(
      Math.floor(times.miliseconds)
    )}`;
  }
  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }
  step() {
    if (!this.running) return;
    this.calculate();
    this.print();
  }
  calculate() {
    this.times.miliseconds += 1;
    if (this.times.miliseconds >= 100) {
      this.times.seconds += 1;
      this.times.miliseconds = 0;
    }
    if (this.times.seconds >= 60) {
      this.times.minutes += 1;
      this.times.seconds = 0;
    }
  }
  stop() {
    this.running = false;
    clearInterval(this.watch);
  }
  resetStopwatch() {
    if (!this.running) {
      this.reset();
      this.print();
      this.resetLaps();
    }
  }
  lapTime() {
    if (this.running) {
      const lapTime = document.createElement("li");
      lapTime.innerHTML = this.format(this.times);
      const results = document.querySelector("ol.results");
      results.appendChild(lapTime);
    }
  }
  resetLaps() {
    if (!this.running) {
      const results = document.querySelector("ol.results");
      while (results.children.length > 1) {
        results.removeChild(results.lastChild);
      }
    }
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}

const stopwatch = new Stopwatch(document.querySelector(".stopwatch"));

let startButton = document.getElementById("start");
startButton.addEventListener("click", () => stopwatch.start());

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => stopwatch.stop());

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => stopwatch.resetStopwatch());

let lapButton = document.getElementById("lap");
lapButton.addEventListener("click", () => stopwatch.lapTime());

let resetLapsButton = document.getElementById("resetLaps");
resetLapsButton.addEventListener("click", () => stopwatch.resetLaps());
