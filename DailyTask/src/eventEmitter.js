// @flow
type EventList = Set<Function>;
type EventMap = Map<string, EventList>;
type Subcription = {
  add: () => void;
  remove: () => void;
};
export default class EventEmitter {
  events: EventMap = new Map();
  history: Array<Object> = [];
  listener(eventName: string, eventListener: Function): Subcription {
    let eventList = this.events.get(eventName);
    return {
      remove: () => {
        if (eventList) {
          eventList.delete(eventListener);
        }
      },
      add: () => {
        if (eventList == null) {
          eventList = new Set();
          this.events.set(eventName, eventList);
        }
        eventList.add(eventListener);
        let history = {
          eventName: eventName,
          event: 'add',
          eventListener,
        };
        this.history.push(history);
      },
    };
  }
  removeListener(eventName: string, eventListener: Function) {
    let eventList = this.events.get(eventName);
    if (eventList) {
      eventList.delete(eventListener);
    }
    let history = {
      eventName: eventName,
      event: 'delete',
      eventListener,
    };
    this.history.push(history);
  }
  emit(eventName: string) {
    let eventList = this.events.get(eventName);
    if (eventList) {
      for (let eventHandler of eventList) {
        eventHandler();
      }
    }
  }
  getHistory() {
    return this.history;
  }
}
