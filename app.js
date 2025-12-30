// Load existing activities from localStorage or start fresh
let activities = JSON.parse(localStorage.getItem("activities")) || [];

// Save to localStorage
function saveActivities() {
  localStorage.setItem("activities", JSON.stringify(activities));
}

// Logging functions
function logWalk() {
  let entry = {
    type: "Walk",
    duration: 5,
    timestamp: new Date().toLocaleTimeString()
  };
  activities.push(entry);
  saveActivities();
  updateSummary();
}

function logTreadmill() {
  let entry = {
    type: "Treadmill",
    duration: 10,
    speed: 1.4,
    calories: 12,
    timestamp: new Date().toLocaleTimeString()
  };
  activities.push(entry);
  saveActivities();
  updateSummary();
}

function logStrength() {
  let entry = {
    type: "Strength",
    sets: 3,
    reps: 10,
    exercises: ["Lateral", "Biceps"],
    timestamp: new Date().toLocaleTimeString()
  };
  activities.push(entry);
  saveActivities();
  updateSummary();
}

function logBP() {
  let entry = {
    type: "BP",
    systolic: 130,
    diastolic: 71,
    pulse: 94,
    timestamp: new Date().toLocaleTimeString()
  };
  activities.push(entry);
  saveActivities();
  updateSummary();
}

function logGlucose() {
  let entry = {
    type: "Glucose",
    value: 6.9,
    timestamp: new Date().toLocaleTimeString()
  };
  activities.push(entry);
  saveActivities();
  updateSummary();
}

// Generate daily summary
function updateSummary() {
  let summaryDiv = document.getElementById("summary-content");
  summaryDiv.innerHTML = "";
  activities.forEach(a => {
    let div = document.createElement("div");
    div.textContent = `[${a.timestamp}] ${a.type}: ${JSON.stringify(a)}`;
    summaryDiv.appendChild(div);
  });
}

// Export CSV
function exportCSV() {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Type,Details,Timestamp\n";
  activities.forEach(a => {
    let details = JSON.stringify(a).replace(/,/g, ";"); // avoid CSV commas
    csvContent += `${a.type},${details},${a.timestamp}\n`;
  });

  let encodedUri = encodeURI(csvContent);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "daily_log.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Optional: Clear all activities
function clearActivities() {
  if(confirm("Clear all activities?")) {
    activities = [];
    saveActivities();
    updateSummary();
  }
}

// Initialize summary on page load
updateSummary();
