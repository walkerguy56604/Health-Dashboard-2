// app.js - Pre-filled Activity Logger for PWA

// Main array holding all activity logs
let activities = [
  // Dec 28, 2025
  {
    date: "2025-12-28",
    type: "Walk",
    start_time: "08:05",
    end_time: "08:10",
    duration_minutes: 5,
    distance_km: null,
    notes: "Morning Siri walk before strength training",
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
    time: "13:47",
    reading: "135/70/94 H",
    notes: "After 5-min treadmill"
  },
  {
    date: "2025-12-28",
    type: "Blood Pressure",
    time: "13:52",
    reading: "120/63/95 M",
    notes: "After 10-min treadmill"
  },
  {
    date: "2025-12-28",
    type: "Walk",
    start_time: "14:05",
    end_time: "14:35",
    duration_minutes: 30,
    distance_km: null,
    notes: "Afternoon walk"
  },
  {
    date: "2025-12-28",
    type: "Strength Training",
    start_time: "15:50",
    end_time: "16:12",
    exercises: [
      { name: "Lateral", sets: 3, reps: 10 },
      { name: "Biceps", sets: 3, reps: 10 }
    ],
    notes: "Afternoon session",
    pre_bp: "",
    post_bp: "130/71/94 H"
  },
  {
    date: "2025-12-29",
    type: "Blood Pressure",
    time: "08:22",
    reading: "129/73/84 M",
    notes: "Morning check #1"
  },
  {
    date: "2025-12-29",
    type: "Blood Pressure",
    time: "08:24",
    reading: "127/70/84 M",
    notes: "Morning check #2"
  },
  {
    date: "2025-12-29",
    type: "Walk",
    start_time: "08:30",
    end_time: "08:35",
    duration_minutes: 5,
    distance_km: null,
    notes: "Morning Siri walk"
  },
  {
    date: "2025-12-29",
    type: "Strength Training",
    start_time: "08:20",
    end_time: "08:34",
    exercises: [
      { name: "Lateral", sets: 3, reps: 10 },
      { name: "Biceps", sets: 3, reps: 10 }
    ],
    notes: "Morning session"
  },
  {
    date: "2025-12-29",
    type: "Treadmill",
    start_time: "10:45",
    end_time: "10:55",
    duration_minutes: 10,
    distance_km: 0.24,
    avg_hr: 107,
    max_hr: 117,
    calories: 12,
    speed: 1.4,
    notes: "Pre-strength treadmill"
  },
  {
    date: "2025-12-29",
    type: "Walk",
    start_time: "11:05",
    end_time: "11:35",
    duration_minutes: 30,
    distance_km: null,
    notes: "Midday walk"
  }
];

// Function to add a new activity
function addActivity(activity) {
  activities.push(activity);
  // Save to localStorage so PWA can access offline
  localStorage.setItem("activities", JSON.stringify(activities));
  console.log("Activity added:", activity);
}

// Optional: Function to export CSV
function exportCSV() {
  if (!activities.length) return;
  const header = Object.keys(activities[0]).join(",");
  const rows = activities.map(obj =>
    Object.values(obj)
      .map(v => (typeof v === "object" ? JSON.stringify(v) : `"${v}"`))
      .join(",")
  );
  const csvContent = [header, ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "daily_log.csv";
  link.click();
}
