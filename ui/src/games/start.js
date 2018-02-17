var player = {
  name: "test",
  age: 40,
  money: 2340,
  sex: "male", // male female
  time: {
    hour: 3,
    minute: 0,
    day: 0,
    month: 0
  }, // 00 -> 60*24 = 1440
  health: 0,  // 0 -> 100
  energy: 0,  // 0 -> 100
  jobs: [], // { lv, jobName, income }
  assets: [{
    name: "House",
    lv: 1
  }],
  isDead: false
};

// Default Game
var menu = {
  currentMenu : "House",
  buttonShow : [
    "go": [],
    "action": [],
    "player" : {}
  ]
};

module.exports = {
  player: player,
  menu: menu
};
