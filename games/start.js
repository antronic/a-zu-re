var player = {
  name: "",
  age: 0,
  money: 0,
  sex: "male", // male female
  time: {
    hour: 0,
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
