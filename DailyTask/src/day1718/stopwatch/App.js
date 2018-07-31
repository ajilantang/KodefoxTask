//@flow
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
type State = {
  startTime: number | null,
  currentTime: number,
  isPaused: boolean,
  isStaterd: boolean,
  pauseTime: number,
  isTextPaused: boolean,
  lapsList: Array<Object>,
};
export default class App extends React.Component<{}, State> {
  state = {
    startTime: null,
    currentTime: 0,
    isPaused: false,
    isStaterd: false,
    pauseTime: 0,
    isTextPaused: false,
    lapsList: [],
  };
  _interval: ?number = null;
  componentDidMount() {
    this._interval = window.setInterval(this._updateCurrentTime, 100);
  }
  componentWillUnmount() {
    if (this._interval != null) {
      window.clearInterval(this._interval);
    }
  }
  _start = () => {
    let now = Date.now();
    this.setState({
      startTime: now,
      isStaterd: true,
    });
  };
  _onReset = () => {
    this.setState({
      startTime: null,
      currentTime: 0,
      isPaused: false,
      isStaterd: false,
      pauseTime: 0,
      isTextPaused: false,
      lapsList: [],
    });
  };
  _onPaused = () => {
    let {startTime, currentTime} = this.state;
    this.setState({
      startTime,
      currentTime,
      isPaused: !this.state.isPaused,
      isTextPaused: !this.state.isTextPaused,
    });
  };
  _addLaps = (obj: Object) => {
    let {lapsList} = this.state;
    this.setState({lapsList: lapsList.concat(obj)});
  };
  _updateCurrentTime = () => {
    let {isPaused, currentTime, pauseTime, isStaterd, opacity} = this.state;
    let now = Date.now();
    if (isPaused && isStaterd) {
      this.setState({
        currentTime: now,
        pauseTime: pauseTime + (now - currentTime),
      });
    } else {
      this.setState({
        currentTime: now,
      });
    }
  };

  _onStopStopWatch = () => {
    this.setState({
      isPaused: !this.state.isPaused,
    });
  };
  render() {
    let {
      startTime,
      currentTime,
      isPaused,
      pauseTime,
      isStaterd,
      isTextPaused,
      lapsList,
    } = this.state;
    let minutes =
      startTime == null
        ? 0
        : Math.floor((currentTime - startTime - pauseTime) / 60000);
    let seconds =
      startTime == null
        ? 0
        : Math.floor((currentTime - startTime - pauseTime) / 1000) % 60;
    let miliSeconds =
      startTime == null
        ? 0
        : Math.floor((currentTime - startTime - pauseTime) / 100) % 10;

    return (
      <View style={styles().container}>
        <View style={styles().header}>
          <Text style={styles().headerText}>Stopwatch</Text>
        </View>
        <View style={styles({backgroundColor: 'rgb(42,51,50)'}).stopWatch}>
          <Text style={styles().timerText}>{minutes}</Text>
          <Text style={styles().timerText}>.{seconds}</Text>
          <Text style={styles().timerText}>.{miliSeconds}</Text>
        </View>
        <View style={styles().buttonMenu}>
          <View style={styles().buttonRowStyle}>
            {isStaterd ? (
              isPaused ? (
                <TouchableOpacity
                  onPress={this._onReset}
                  style={styles().CircleShapeView}
                >
                  <Text style={styles().buttonText}>Reset</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this._addLaps({minutes, seconds, miliSeconds})}
                  style={styles().CircleShapeView}
                >
                  <Text style={styles().buttonText}>Laps</Text>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity style={styles({opacity: 0.1}).CircleShapeView}>
                <Text style={styles().buttonText}>Laps</Text>
              </TouchableOpacity>
            )}
            <View style={styles().LittleCircle} />
            <View style={styles().LittleCircle} />
            {isStaterd ? (
              <TouchableOpacity
                onPress={this._onPaused}
                style={
                  isTextPaused
                    ? styles({backgroundColor: 'green', opacity: 0.3})
                        .CircleShapeView
                    : styles().CircleShapeView
                }
              >
                <Text style={styles().buttonText}>
                  {isTextPaused ? 'Start' : 'Stop'}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={this._start}
                style={
                  styles({backgroundColor: 'green', opacity: 0.3})
                    .CircleShapeView
                }
              >
                <Text style={styles().buttonText}>start</Text>
              </TouchableOpacity>
            )}
            <View />
          </View>
          <ScrollView>
            <View style={styles().listRecord}>
              {lapsList.map((record: Times, index) => {
                return (
                  <View style={styles().stopWatch} key={index}>
                    <Text
                      style={styles({fontSize: 20, color: 'red'}).timerText}
                    >
                      Laps {index + 1}
                    </Text>
                    <Text style={styles({fontSize: 20}).timerText}>
                      {record.minutes}
                    </Text>
                    <Text style={styles({fontSize: 20}).timerText}>
                      .{record.seconds}
                    </Text>
                    <Text style={styles({fontSize: 20}).timerText}>
                      .{record.miliSeconds}
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
type Times = {
  minutes: number,
  seconds: number,
  miliSeconds: number,
};
type StyleProps = {
  backgroundColor?: string,
  opacity?: number,
  fontSize?: number,
  color?: string,
};
const styles = (props: StyleProps = {}) => {
  let {backgroundColor = null, opacity = 0, fontSize = 0, color = null} = props;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(27,27,28)',
      flexDirection: 'column',
    },
    header: {
      flex: 1,
      backgroundColor: 'rgb(51,51,51)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 20,
    },
    stopWatch: {
      flex: 2,
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: backgroundColor ? backgroundColor : null,
      opacity: opacity ? opacity : 1,
    },
    listRecord: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    buttonMenu: {
      flex: 4,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    buttonRowStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    CircleShapeView: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      backgroundColor: backgroundColor ? backgroundColor : 'red',
      opacity: opacity ? opacity : 0.09,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
    },
    timerText: {
      fontSize: fontSize ? fontSize : 45,
      padding: 5,
      marginTop: 15,
      fontFamily: 'Palatino',
      color: color ? color : 'black',
    },
    buttonText: {fontWeight: 'bold', fontSize: 20},
    LittleCircle: {
      width: 20,
      height: 20,
      borderRadius: 20 / 2,
      backgroundColor: 'white',
      opacity: 0.3,
    },
  });
};
