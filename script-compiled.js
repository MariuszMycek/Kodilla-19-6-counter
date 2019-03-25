"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Stopwatch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Stopwatch, _React$Component);

  function Stopwatch(props) {
    var _this;

    _classCallCheck(this, Stopwatch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stopwatch).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.watch = setInterval(function () {
        if (_this.state.running) {
          _this.calculate();
        }
      }, 10);
    });

    _defineProperty(_assertThisInitialized(_this), "start", function () {
      return _this.setState({
        running: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stop", function () {
      return _this.setState({
        running: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      if (!_this.state.running) {
        _this.setState({
          minutes: 0,
          seconds: 0,
          miliseconds: 0,
          lapTimes: []
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "calculate", function () {
      _this.setState({
        miliseconds: _this.state.miliseconds + 1
      });

      if (_this.state.miliseconds >= 100) {
        _this.setState({
          seconds: _this.state.seconds + 1,
          miliseconds: 0
        });
      }

      if (_this.state.seconds >= 60) {
        _this.setState({
          minutes: _this.state.minutes + 1,
          seconds: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "lapTime", function () {
      var lap = _this.format();

      if (_this.state.running) {
        _this.setState({
          lapTimes: [].concat(_toConsumableArray(_this.state.lapTimes), [lap])
        });

        console.log(_this.state.lapTimes);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetLaps", function () {
      _this.setState({
        lapTimes: []
      });
    });

    _this.state = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      running: false,
      lapTimes: []
    };
    return _this;
  }

  _createClass(Stopwatch, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.watch);
    }
  }, {
    key: "format",
    value: function format() {
      function pad0(value) {
        var result = value.toString();

        if (result.length < 2) {
          result = "0" + result;
        }

        return result;
      }

      return "".concat(pad0(this.state.minutes), ":").concat(pad0(this.state.seconds), ":").concat(pad0(Math.floor(this.state.miliseconds)));
    }
  }, {
    key: "render",
    value: function render() {
      var lapList = this.state.lapTimes.map(function (item) {
        return React.createElement("li", {
          key: item
        }, item);
      });
      return React.createElement("div", {
        className: "counter"
      }, React.createElement("nav", {
        className: "controls"
      }, React.createElement("a", {
        href: "#",
        className: "button",
        onClick: this.start
      }, "Start"), React.createElement("a", {
        href: "#",
        className: "button",
        onClick: this.stop
      }, "Stop"), React.createElement("a", {
        href: "#",
        className: "button",
        onClick: this.reset
      }, "Reset All"), React.createElement("a", {
        href: "#",
        className: "button",
        onClick: this.lapTime
      }, "Lap"), React.createElement("a", {
        href: "#",
        className: "button",
        onClick: this.resetLaps
      }, "Reset Laps")), React.createElement("div", {
        className: "stopwatch",
        id: "watch"
      }, this.format()), React.createElement("div", {
        className: "results"
      }, React.createElement("h4", null, "Laps: "), React.createElement("ol", null, lapList)));
    }
  }]);

  return Stopwatch;
}(React.Component);

var app = React.createElement(Stopwatch);
ReactDOM.render(app, document.getElementById("app"));
