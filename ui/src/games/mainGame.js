var allMenu = [
  {
    name :"House",
    lv : 1,
    go: {
      "Hospital": { time : 85 },
      "School": { time : 35 },
      "Convinient Store": { time : 25 },
      "Police Station": { time : 65 },
      "Office": { time : 75 },
      "University": { time : 50 },
    },
    action: [
      {
        name: "Work as Taxi",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Taxi" ){
              return true;
            }
            return false;
          });
          return hasLicense;
        },
        action: (player) => {
          player = workAs( player, allJob["Taxi"] )
          return player;
        }
      },
      {
        name: "Upgrade House",
        showed: (player) => {
          if( player.money >= player.assets[0].lv * 2000 ){
            return true;
          }
          return false;
        },
        action: (player) => {
          player.assets[0].lv += 1;
          player.money -= player.assets[0].lv * 2000;
          return player;
        }
      },
      {
        name: "Sleep",
        showed: (player) => {return true},
        action: (player) => {
          player = sleep(player);
          return player;
        }
      },
      {
        name: "Buy Taxi License",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Taxi" ){
              return true;
            }
            return false;
          });
          return !hasLicense;
        },
        action: ( player ) => {
          player = study(player, allJob["Taxi"])
          return player;
        }
      }
    ]
  },
  {
    name :"Hospital",
    go: {
      "School": { time : 50 },
      "Convinient Store": { time : 110 },
      "Police Station": { time : 80 },
      "Office": { time : 20 },
      "University": { time : 35 },
      "House": { time : 85 }
    },
    action: [
      {
        name: "Work as Doctor",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Doctor" ){
              return true;
            }
            return false;
          });
          return hasLicense;
        },
        action: (player) => {
          player = workAs( player, allJob["Doctor"] )
          return player;
        }
      },
      {
        name: "Work as Nurse",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Nurse" ){
              return true;
            }
            return false;
          });
          return hasLicense;
        },
        action: (player) => {
          player = workAs( player, allJob["Nurse"] )
          return player;
        }
      },
      {
        name: "Go to see doctor",
        showed: (player) => {return true},
        action: (player) => {
          player = heal( player, allJob["Nurse"] )
          return player;
        }
      },
      {
        name: "Study to be Doctor",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Doctor" ){
              return true;
            }
            return false;
          });
          return !hasLicense;
        },
        action: ( player ) => {
          player = study(player, allJob["Doctor"])
          return player;
        }
      },
      {
        name: "Study to be Nurse",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Nurse" ){
              return true;
            }
            return false;
          });
          return !hasLicense;
        },
        action: ( player ) => {
          player = study(player, allJob["Nurse"])
          return player;
        }
      }
    ]
  },
  {
    name :"School",
    go: {
      "Hospital": { time : 50 },
      "Convinient Store": { time : 60 },
      "Police Station": { time : 30 },
      "Office": { time : 40 },
      "University": { time : 15 },
      "House": { time : 35 }
    },
    action: [
      {
        name: "Work as Teacher",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Teacher" ){
              return true;
            }
            return false;
          });
          return hasLicense;
        },
        action: (player) => {
          player = workAs( player, allJob["Teacher"] )
          return player;
        }
      }
    ]

  },
  {
    name :"Police Station",
    go: {
      "Hospital": { time : 80 },
      "School": { time : 30 },
      "Convinient Store": { time : 40 },
      "Office": { time : 70 },
      "University": { time : 45 },
      "House": { time : 65 }
    },
    action: [
      {
        name: "Work as Police",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Police" ){
              return true;
            }
            return false;
          });
          return hasLicense;
        },
        action: (player) => {
          player = workAs( player, allJob["Police"] )
          return player;
        }
      },
      {
        name: "Study to be Police",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Police" ){
              return true;
            }
            return false;
          });
          return !hasLicense;
        },
        action: ( player ) => {
          player = study(player, allJob["Police"])
          return player;
        }
      }
    ]
  },
  {
    name :"Office",
    go: {
      "Hospital": { time : 20 },
      "School": { time : 40 },
      "Convinient Store": { time : 105 },
      "Police Station": { time : 70 },
      "University": { time : 55 },
      "House": { time : 75 }
    },
    action: [
      {
        name: "Work as Accountant",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Accountant" ){
              return true;
            }
            return false;
          });
          return hasLicense;
        },
        action: (player) => {
          player = workAs( player, allJob["Accountant"] )
          return player;
        }
      },
      {
        name: "Work as Programmer",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Programmer" ){
              return true;
            }
            return false;
          });
          return hasLicense;
        },
        action: (player) => {
          player = workAs( player, allJob["Programmer"] )
          return player;
        }
      }
    ]
  },
  {
    name :"Convinient Store",
    go: {
      "Hospital": { time : 110 },
      "School": { time : 65 },
      "Police Station": { time : 40 },
      "Office": { time : 105 },
      "University": { time : 75 },
      "House": { time : 25 }
    },
    action: [
      {
        name: "Work as Cashier",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Cashier" ){
              return true;
            }
            return false;
          });
          return hasLicense;
        },
        action: (player) => {
          player = workAs( player, allJob["Cashier"] )
          return player;
        }
      },
      {
        name: "Study to be Cashier",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Cashier" ){
              return true;
            }
            return false;
          });
          return !hasLicense;
        },
        action: ( player ) => {
          player = study(player, allJob["Cashier"])
          return player;
        }
      }
    ]
  },
  {
    name :"University",
    go: {
      "Hospital": { time : 35 },
      "School": { time : 15 },
      "Convinient Store": { time : 75 },
      "Police Station": { time : 45 },
      "Office": { time : 55 },
      "House": { time : 50 }
    },
    action: [
      {
        name: "Study to be Accountant",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Accountant" ){
              return true;
            }
            return false;
          });
          return !hasLicense;
        },
        action: ( player ) => {
          player = study(player, allJob["Accountant"])
          return player;
        }
      },
      {
        name: "Study to be Programmer",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Programmer" ){
              return true;
            }
            return false;
          });
          return !hasLicense;
        },
        action: ( player ) => {
          player = study(player, allJob["Programmer"])
          return player;
        }
      },
      {
        name: "Study to be Teacher",
        showed: (player) => {
          let hasLicense = player.jobs.filer( (job) => {
            if( job.name == "Teacher" ){
              return true;
            }
            return false;
          });
          return !hasLicense;
        },
        action: ( player ) => {
          player = study(player, allJob["Teacher"])
          return player;
        }
      }
    ]
  }
];

var allJob = {
  "Taxi" : {
    "name": "Taxi",
    "study" : {
      "day" : 1,
      "month" : 0,
      "year" : 0,
      "cost" : 1000,
      "time" : {
        "hour" : 0,
        "minute" : 0
      }
    },
    "income": 80,   // per hour
    "level" : 1,
    "energy": 8,
    "base": 4 // base time
  },
  "Programmer" : {
    "name": "Programmer",
    "study" : {
      "day" : 0,
      "month" : 0,
      "year" : 4,
      "cost" : 2500,
      "time" : {
        "hour" : 0,
        "minute" : 0
      }
    },
    "income": 675,   // per hour
    "level" : 1,
    "energy": 12,
    "base": 8 // base time
  },
  "Doctor" : {
    "name": "Doctor",
    "study" : {
      "day" : 0,
      "month" : 0,
      "year" : 6,
      "cost" : 4000,
      "time" : {
        "hour" : 0,
        "minute" : 0
      }
    },
    "income": 1750,   // per hour
    "level" : 1,
    "energy": 15,
    "base": 8 // base time
  },
  "Nurse" : {
    "name": "Nurse",
    "study" : {
      "day" : 0,
      "month" : 0,
      "year" : 5,
      "cost" : 2500,
      "time" : {
        "hour" : 0,
        "minute" : 0
      }
    },
    "income": 625,   // per hour
    "level" : 1,
    "energy": 15,
    "base": 8 // base time
  },
  "Cashier" : {
    "name": "Cashier",
    "study" : {
      "day" : 0,
      "month" : 0,
      "year" : 0,
      "cost" : 200,
      "time" : {
        "hour" : 12,
        "minute" : 0
      }
    },
    "income": 75,   // per hour
    "level" : 1,
    "energy": 3,
    "base": 4 // base time
  },
  "Accountant" : {
    "name": "Accountant",
    "study" : {
      "day" : 0,
      "month" : 0,
      "year" : 4,
      "cost" : 2500,
      "time" : {
        "hour" : 0,
        "minute" : 0
      }
    },
    "income": 625,   // per hour
    "level" : 1,
    "energy": 10,
    "base": 8 // base time
  },
  "Police" : {
    "name": "Police",
    "study" : {
      "day" : 0,
      "month" : 0,
      "year" : 4,
      "cost" : 2700,
      "time" : {
        "hour" : 0,
        "minute" : 0
      }
    },
    "income": 350,   // per hour
    "level" : 1,
    "energy": 10,
    "base": 8 // base time
  },
  "Teacher" : {
    "name": "Teacher",
    "study" : {
      "day" : 0,
      "month" : 0,
      "year" : 5,
      "cost" : 2700,
      "time" : {
        "hour" : 0,
        "minute" : 0
      }
    },
    "income": 500,   // per hour
    "level" : 1,
    "energy": 10,
    "base": 8 // base time
  }

};

var study = ( player , job ) => {
  let temp = {
    name: job.name,
    income: job.income,
    lv: job.level
  };
  player.jobs.push();
  player.time.minute += job.study.time.minute;
  player.time.hour   += job.study.time.hour;
  player.time.day    += job.study.day;
  player.time.month  += job.study.month;
  player.time.year   += job.study.year;
  player.money -= job.study.cost;
  player = validateTime(player);
  return player;
};

var validateTime = ( getPlayer ) => {
  let minute = 0;
  let hour = 0;
  let day = 0;
  let month = 0;
  minute = getPlayer.time.minute%60;
  if(getPlayer.time.minute%60 == 0) getPlayer.time.hour += 1;

  hour = getPlayer.time.hour%24;
  if(getPlayer.time.hour%24 == 0){
    getPlayer.time.day += 1;
  }

  day = getPlayer.time.day%4;
  if(getPlayer.time.day%4 == 0) getPlayer.time.month += 1;

  month = getPlayer.time.month%4;
  if(getPlayer.time.month%4 == 0) getPlayer.age += 1;

  return getPlayer;
}

var goto = ( menu , destination ) => {
  menu.currentMenu = destination.name;
  allMenu.filter((location)=>{
    if(location.name == destination.name){
      menu.go     = location.go;
      menu.action = location.action;
    }
  });
  menu.player.time.minute += destination.time;
  menu.player = validateTime(menu.player);
  return menu;
}

var workAs = ( player, job ) => {
  player.money += player.jobs.filter((j) => {
    j.lv += 0.15;   // work as
    return job.income * parseInt(j.lv);
  });
  player.time.hour += job.base;

  player = setEnergy(player, -job.energy);  // - is negative

  player = validateTime( player );
  return player;
}

var setEnergy = (player, en) => {
  if( player.energy + en < 35){
    player.health += (player.energy - en);
  }
  player.energy += en;
  if( player.energy > 100 ) player.energy = 100;
  return player;
}

var sleep = ( player ) => {
  if( player.energy < 35 ){
    player.time.hour += 8;
    player = setEnergy( player ,parseInt( (35 - player.energy) *  50/35 ) );
    player = validateTime( player );
    return player;
  }
  player.time.hour += parseInt((100 - player.energy)*8/65);
  player.energy = 100;
  player = validateTime( player );
  return player;
}

var takeSomeRest = ( player ) => {  // 2 hour
  if( player.energy < 35 ){
    player = sleep(player);
    return player;
  }
  player.time.hour += parseInt((100 - player.energy)*2/65);
  player.energy += 10;
  player = validateTime( player );
  return player;
}

var heal = ( player ) => { // max is 60
  player.money -= parseInt( (60 - player.health)* 120 );
  if( player.health < 60 )player.health = 60;
  return player;
}

module.exports = {
  allMenu : allMenu,
  allJob : allJob,
  study: study,
  validateTime: validateTime,
  goto: goto,
  workAs: workAs,
  setEnergy: setEnergy,
  sleep: sleep,
  takeSomeRest: takeSomeRest,
  heal: heal
};
