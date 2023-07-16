const dailyBtn = document.getElementById("daily-btn")
const weeklyBtn = document.getElementById("weekly-btn")
const monthlyBtn = document.getElementById("monthly-btn")
let workHrsEl = document.getElementById("work-hrs-el")
let lastworkHrsEl = document.getElementById("last-work-hrs-el")
let playHrsEl = document.getElementById("play-hrs-el")
let lastplayHrsEl = document.getElementById("last-play-hrs-el")
let studyHrsEl = document.getElementById("study-hrs-el")
let laststudyHrsEl = document.getElementById("last-study-hrs-el")
let exerciseHrsEl = document.getElementById("exercise-hrs-el")
let lastexerciseHrsEl = document.getElementById("last-exercise-hrs-el")
let socialHrsEl = document.getElementById("social-hours-el")
let lastsocialHrsEl = document.getElementById("last-social-hrs-el")
let selfcareHrsEl = document.getElementById("selfcare-hours-el")
let lastselfcareHrsEl = document.getElementById("last-selfcare-hrs-el")

let hoursJson = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

console.log(hoursJson)

dailyBtn.addEventListener('click', function() {
  workHrsEl.textContent = hoursJson[0].timeframes.daily.current + " Hrs";
  lastworkHrsEl.textContent = "Last Week " + hoursJson[0].timeframes.daily.previous + " hrs";

  playHrsEl.textContent = hoursJson[1].timeframes.daily.current + " Hrs";
  lastplayHrsEl.textContent = "Last Week " + hoursJson[1].timeframes.daily.current

  studyHrsEl.textContent = hoursJson[2].timeframes.daily.current + " Hrs"; 
  laststudyHrsEl.textContent = "Last Week " + hoursJson[2].timeframes.daily.previous + " hrs";

  exerciseHrsEl.textContent = hoursJson[3].timeframes.daily.current + " Hrs"; 
  lastexerciseHrsEl.textContent = "Last Week " + hoursJson[3].timeframes.daily.previous + " hrs";

  socialHrsEl.textContent = hoursJson[4].timeframes.daily.current + " Hrs"; 
  lastsocialHrsEl.textContent = "Last Week " + hoursJson[4].timeframes.daily.previous + " hrs";

  selfcareHrsEl.textContent = hoursJson[5].timeframes.daily.current + " Hrs"; 
  lastselfcareHrsEl.textContent = "Last Week " + hoursJson[5].timeframes.daily.previous + " hrs";
})

weeklyBtn.addEventListener('click', function() {
  workHrsEl.textContent = hoursJson[0].timeframes.weekly.current + " Hrs";
  lastworkHrsEl.textContent = "Last Week " + hoursJson[0].timeframes.weekly.previous + " hrs";

  playHrsEl.textContent = hoursJson[1].timeframes.weekly.current + " Hrs";
  lastplayHrsEl.textContent = "Last Week " + hoursJson[1].timeframes.weekly.current

  studyHrsEl.textContent = hoursJson[2].timeframes.weekly.current + " Hrs"; 
  laststudyHrsEl.textContent = "Last Week " + hoursJson[2].timeframes.weekly.previous + " hrs";

  exerciseHrsEl.textContent = hoursJson[3].timeframes.weekly.current + " Hrs"; 
  lastexerciseHrsEl.textContent = "Last Week " + hoursJson[3].timeframes.weekly.previous + " hrs";

  socialHrsEl.textContent = hoursJson[4].timeframes.weekly.current + " Hrs"; 
  lastsocialHrsEl.textContent = "Last Week " + hoursJson[4].timeframes.weekly.previous + " hrs";

  selfcareHrsEl.textContent = hoursJson[5].timeframes.weekly.current + " Hrs"; 
  lastselfcareHrsEl.textContent = "Last Week " + hoursJson[5].timeframes.weekly.previous + " hrs";
})

monthlyBtn.addEventListener('click', function (){
  workHrsEl.textContent = hoursJson[0].timeframes.monthly.current + " Hrs";
  lastworkHrsEl.textContent = "Last Month " + hoursJson[0].timeframes.monthly.previous + " hrs";

  playHrsEl.textContent = hoursJson[1].timeframes.monthly.current + " Hrs";
  lastplayHrsEl.textContent = "Last Month " + hoursJson[1].timeframes.monthly.current

  studyHrsEl.textContent = hoursJson[2].timeframes.monthly.current + " Hrs"; 
  laststudyHrsEl.textContent = "Last Month " + hoursJson[2].timeframes.monthly.previous + " hrs";

  exerciseHrsEl.textContent = hoursJson[3].timeframes.monthly.current + " Hrs"; 
  lastexerciseHrsEl.textContent = "Last Month " + hoursJson[3].timeframes.monthly.previous + " hrs";

  socialHrsEl.textContent = hoursJson[4].timeframes.monthly.current + " Hrs"; 
  lastsocialHrsEl.textContent = "Last Month " + hoursJson[4].timeframes.monthly.previous + " hrs";

  selfcareHrsEl.textContent = hoursJson[5].timeframes.monthly.current + " Hrs"; 
  lastselfcareHrsEl.textContent = "Last Month " + hoursJson[5].timeframes.monthly.previous + " hrs";
})