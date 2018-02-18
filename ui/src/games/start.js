var player = {
  name: "",
  age: 12,
  money: 33220,
  sex: "male", // male female
  time: {
    hour: 6,
    minute: 2,
    day: 0,
    month: 0
  }, // 00 -> 60*24 = 1440
  health: 10,  // 0 -> 100
  energy: 40,  // 0 -> 100
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
  buttonShow : {
    "go": [],
    "action": [],
    "player" : {}
  }
};

module.exports = {
  player: player,
  menu: menu
};
