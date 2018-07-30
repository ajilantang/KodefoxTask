//@flow
import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
// import {setInterval} from 'core-js/library/web/timers';
type State = {
  startTime: number | null,
  currentTime: number,
  isRun: boolean,
};
export default class App extends React.Component<{}, State> {
  state = {
    startTime: null,
    currentTime: Date.now(),
    isRun: false,
  };
  _interval: ?number = null;

  _start = () => {
    let {isRun} = this.state;
    if (isRun) {
      let now = Date.now();
      this.setState({
        startTime: now,
      });
    }
  };
  componentDidMount() {
    this._interval = setInterval(this._updateCurrentTime, 100);
  }
  componentWillUnmount() {
    if (this._interval != null) {
      clearInterval(this._interval);
    }
  }
  _updateCurrentTime = () => {
    let {isRun} = this.state;
    if (isRun) {
      this.setState({
        currentTime: Date.now(),
      });
    }
  };

  _onStopStopWatch = () => {
    this.setState(
      {
        isRun: !this.state.isRun,
      },
      () => {
        this._updateCurrentTime();
      },
    );
  };
  render() {
    let {startTime, currentTime, isRun} = this.state;
    let minutes =
      startTime == null ? 0 : Math.floor((currentTime - startTime) / 60000);
    let seconds =
      startTime == null ? 0 : Math.floor((currentTime - startTime) / 1000) % 60;
    let miliSeconds =
      startTime == null ? 0 : Math.floor((currentTime - startTime) / 100) % 10;
    return (
      <View style={styles.container}>
        <View style={styles.sopwatch}>
          <Text style={styles.timerText}>{minutes}</Text>
          <Text style={styles.timerText}>: {seconds}</Text>
          <Text style={styles.timerText}>: {miliSeconds}</Text>
        </View>
        <View style={styles.buttonMenu}>
          <View style={styles.buttonMenu2}>
            {isRun ? (
              <TouchableOpacity
                onPress={this._start}
                style={styles.CircleShapeView}
              >
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={this._start}
                style={styles.CircleShapeView}
              >
                <Text style={styles.buttonText}>Laps</Text>
              </TouchableOpacity>
            )}
            <View style={styles.LittleCircle} />
            <View style={styles.LittleCircle} />
            <TouchableOpacity
              onPress={this._onStopStopWatch}
              style={styles.CircleShapeView}
            >
              {isRun ? (
                <Text style={styles.buttonText}>Pause</Text>
              ) : (
                <Text style={styles.buttonText}>Play</Text>
              )}
            </TouchableOpacity>
            <View />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#464646',
    flexDirection: 'column',
  },
  sopwatch: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonMenu: {
    flex: 2,
    flexDirection: 'column',
  },
  buttonMenu2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  CircleShapeView: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 45,
  },
  buttonText: {fontWeight: 'bold', fontSize: 20},
  LittleCircle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: '#00BCD4',
  },
});
