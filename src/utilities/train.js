class Train {
  speed;
  gps;
  temperature;
  lightsState;
  doorState;
  humidity;
  alarm;
  constructor(
    speed,
    gps,
    temperature,
    lightsState,
    doorState,
    humidity,
    alarm,
  ) {
    this.speed = speed;
    this.gps = gps;
    this.temperature = temperature;
    this.lightsState = lightsState;
    this.doorState = doorState;
    this.humidity = humidity;
    this.alarm = alarm;
  }
}

export default Train;
