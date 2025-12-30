// =========================
// PWA Activity Tracker - app.js
// =========================

// Existing activity data
let activities = [
  // Example entries - replace or append your own
  {
    date: "2025-12-29",
    type: "Walk",
    start_time: "08:05",
    end_time: "08:10",
    duration_minutes: 5,
    distance_km: 0.0,
    calories: 0,
    heart_rate_avg: 0,
    heart_rate_max: 0,
    notes: "Short walk before strength training"
  },
  {
    date: "2025-12-29",
    type: "Strength Training",
    start_time: "08:20",
    end_time: "08:34",
    duration_minutes: 14,
    exercises: [
      { name: "Lateral Raises", sets: 3, reps: 10 },
      { name: "Biceps Curls", sets: 3, reps: 10 }
    ],
    notes: "Morning strength training session"
  },
  {
    date: "2025-12-29",
    type: "Treadmill",
    start_time: "10:45",
    end_time: "10:55",
    duration_minutes: 10,
    distance_km: 0.24,
    speed_kmh: 1.4,
    calories: 12,
    heart_rate_avg: 107,
    heart_rate_max: 117,
    notes: "Morning treadmill"
  }
];

// Blood pressure readings
let bloodPressures = [
  { date: "2025-12-29", time: "08:34", systolic: 128, diastolic: 67, pulse: 96, type: "M hypertension" },
  { date: "2025-12-29", time: "12:21", systolic: 136, diastolic: 70, pulse: 94, type: "H hypertension" },
  { date: "2025-12-29", time: "12:26", systolic: 120, diastolic: 63, pulse: 95, type: "M hypertension" },
  { date: "2025-12-29", time: "17:30", systolic: 128, diastolic: 76, pulse: 98, type: "M hypertension" }
];

// =========================
// Functions
// =========================

// Add new activity
function addActivity(activity) {
  activities.push(activity);
}

// Add new blood pressure reading
function addBP(bp) {
  bloodPressures.push(bp);
}

// Generate CSV from activities
function generateCSV() {
  let csv = "Date,Type,Start,End,Duration,Distance,Calories,HR Avg,HR Max,Notes\n";
  activities.forEach(a => {
    csv += `${a.date},${a.type},${a.start_time || ""},${a.end_time || ""},${a.duration_minutes || ""},${a.distance_km || ""},${a.calories || ""},${a.heart_rate_avg || ""},${a.heart_rate_max || ""},"${a.notes || ""}"\n`;
  });
  return csv;
}

// Generate CSV from BP readings
function generateBPCSV() {
  let csv = "Date,Time,Systolic,Diastolic,Pulse,Type\n";
  bloodPressures.forEach(bp => {
    csv += `${bp.date},${bp.time},${bp.systolic},${bp.diastolic},${bp.pulse},${bp.type}\n`;
  });
  return csv;
}

// Save CSV to local (for PWA offline)
function downloadCSV(filename, csvContent) {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =========================
// Example usage
// =========================

// downloadCSV("daily_activities_2025.csv", generateCSV());
// downloadCSV("blood_pressure_2025.csv", generateBPCSV());
