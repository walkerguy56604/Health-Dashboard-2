// app.js - Central Activity Logger for PWA

// Main array holding all activity logs
let activities = [
  // Sample previous activities
  {
    date: "2025-12-28",
    type: "Walk",
    start_time: "08:05",
    end_time: "08:10",
    duration_minutes: 5,
    distance_km: null,
    notes: "Short walk after strength training",
    pre_bp: "",
    post_bp: ""
  },
  {
    date: "2025-12-28",
    type: "Strength Training",
    start_time: "08:20",
    end_time: "08:34",
    exercises: [
      { name: "Lateral", sets: 3, reps: 10 },
      { name: "Biceps", sets: 3, reps: 10 }
    ],
    notes: "Morning session",
    pre_bp: "121/73/96 M",
    post_bp: "114/59/94 L"
  },
  {
    date: "2025-12-28",
    type: "Treadmill",
    start_time: "13:42",
    end_time: "13:52",
    duration_minutes: 10,
    distance_km: 0.24,
    avg_hr: 107,
    max_hr: 117,
    calories: 11,
    speed: 1.4,
    notes: "Post-walk treadmill"
  },
  {
    date: "2025-12-28",
    type: "Blood Pressure",
    time: "14:17",
    reading: "135/70/94 H",
    notes: "After treadmill"
  }
];

// Function to add a new activity
function addActivity(activity) {
  activities.push(activity);
  // Save to localStorage so PWA can access offline
  localStorage.setItem("activities", JSON.stringify(activities));
  console.log("Activity added:", activity);
}

// Example: adding a new walk
// addActivity({
//   date: "2025-12-29",
//   type: "Walk",
//   start_time: "10:00",
//   end_time: "10:05",
//   duration_minutes: 5,
//   notes: "Morning walk"
// });

// Optional: Function to export CSV
function exportCSV() {
  const header = Object.keys(activities[0]).join(",");
  const rows = activities.map(obj => Object.values(obj).map(v => `"${v}"`).join(","));
  const csvContent = [header, ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "daily_log.csv";
  link.click();
}
