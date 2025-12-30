// app.js - Merged Health & Activity Logger

// =======================
// DATA STORAGE
// =======================
let activities = [
  // Walks
  { date: "2025-12-29", type: "Walk", start: "08:05", end: "08:10", duration: 5, distance: null, calories: null, avgHR: null, maxHR: null, speed: null, notes: "5 min Siri walk" },
  { date: "2025-12-29", type: "Treadmill", start: "10:45", end: "10:55", duration: 10, distance: 0.24, calories: 12, avgHR: 107, maxHR: 117, speed: 1.4, notes: "Treadmill session" },
  { date: "2025-12-29", type: "Treadmill", start: "17:20", end: "17:30", duration: 10, distance: 0.24, calories: 12, avgHR: 109, maxHR: 119, speed: 1.4, notes: "Afternoon treadmill session" },
  // Strength Training
  { date: "2025-12-29", type: "Strength", start: "08:20", end: "08:34", exercises: [{name:"Lateral", sets:3, reps:10},{name:"Biceps", sets:3, reps:10}], notes: "Morning strength training" },
  { date: "2025-12-29", type: "Strength", start: "15:50", end: "16:12", exercises: [{name:"Lateral", sets:3, reps:10},{name:"Biceps", sets:3, reps:10}], notes: "Afternoon strength training" },
];

// Blood Pressure
let bloodPressureReadings = [
  { date: "2025-12-29", time: "08:05", systolic: 129, diastolic: 73, pulse: 84, category: "M Hypertension" },
  { date: "2025-12-29", time: "08:10", systolic: 127, diastolic: 70, pulse: 84, category: "M Hypertension" },
  { date: "2025-12-29", time: "12:05", systolic: 136, diastolic: 70, pulse: 94, category: "H Hypertension" },
  { date: "2025-12-29", time: "12:10", systolic: 120, diastolic: 63, pulse: 95, category: "M Hypertension" },
  { date: "2025-12-29", time: "16:12", systolic: 130, diastolic: 71, pulse: 94, category: "H Hypertension+" },
  { date: "2025-12-29", time: "17:30", systolic: 128, diastolic: 76, pulse: 98, category: "M Hypertension" },
];

// =======================
// CSV EXPORT FUNCTION
// =======================
function exportToCSV() {
  const headers = ["Date","Activity Type","Start Time","End Time","Duration","Distance","Calories","Avg HR","Max HR","Speed","Notes"];
  const csvRows = [headers.join(",")];

  activities.forEach(a => {
    const row = [
      a.date || "",
      a.type || "",
      a.start || "",
      a.end || "",
      a.duration || "",
      a.distance || "",
      a.calories || "",
      a.avgHR || "",
      a.maxHR || "",
      a.speed || "",
      a.notes || ""
    ];
    csvRows.push(row.join(","));
  });

  const csvString = csvRows.join("\n");
  const blob = new Blob([csvString], {type: "text/csv"});
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", `daily_activity_${new Date().toISOString().slice(0,10)}.csv`);
  a.click();
}

// =======================
// ADD ACTIVITY FUNCTION
// =======================
function addActivity(activity) {
  activities.push(activity);
  console.log("Activity added:", activity);
}

// =======================
// ADD BP FUNCTION
// =======================
function addBloodPressure(bpReading) {
  bloodPressureReadings.push(bpReading);
  console.log("BP Reading added:", bpReading);
}

// =======================
// USAGE EXAMPLES
// =======================
// addActivity({ date:"2025-12-29", type:"Walk", start:"18:00", end:"18:05", duration:5, notes:"Evening walk" });
// addBloodPressure({ date:"2025-12-29", time:"18:05", systolic:125, diastolic:72, pulse:85, category:"M Hypertension" });
// exportToCSV();

console.log("Activities loaded:", activities);
console.log("Blood Pressure Readings loaded:", bloodPressureReadings);
