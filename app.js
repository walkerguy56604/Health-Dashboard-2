const activities = [
  {
    date: "2025-12-28",
    type: "Strength Training",
    start_time: "11:59",
    end_time: "12:15",
    exercises: [
      { name: "Lateral", sets: 3, reps: 10 },
      { name: "Biceps", sets: 3, reps: 10 }
    ],
    pre_bp: { systolic: 121, diastolic: 73, hr: 96, note: "M hypertension" },
    post_bp: { systolic: 136, diastolic: 70, hr: 94, note: "H hypertension" }
  },
  {
    date: "2025-12-28",
    type: "Strength Training",
    start_time: "08:22",
    end_time: "08:36",
    exercises: [
      { name: "Lateral", sets: 3, reps: 10 },
      { name: "Biceps", sets: 3, reps: 10 }
    ],
    pre_bp: { systolic: 121, diastolic: 73, hr: 96, note: "M hypertension" },
    post_bp: { systolic: 114, diastolic: 59, hr: 94, note: "L hypertension" }
  },
  {
    date: "2025-12-29",
    type: "Walk",
    start_time: "08:05",
    end_time: "08:10",
    duration_minutes: 5,
    notes: "Short walk before strength training"
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
    pre_bp: { systolic: 128, diastolic: 67, hr: 96, note: "M hypertension IHB" }
  },
  {
    date: "2025-12-29",
    type: "Treadmill",
    start_time: "13:42",
    end_time: "13:52",
    duration_minutes: 10,
    distance_km: 0.24,
    calories_burnt: 11,
    avg_hr: 107,
    max_hr: 117,
    speed: 1.4
  },
  {
    date: "2025-12-29",
    type: "Walk",
    start_time: "14:00",
    duration_minutes: 5,
    notes: "Short walk after treadmill"
  },
  {
    date: "2025-12-29",
    type: "Strength Training",
    start_time: "15:50",
    end_time: "16:12",
    exercises: [
      { name: "Lateral", sets: 3, reps: 10 },
      { name: "Biceps", sets: 3, reps: 10 }
    ],
    post_bp: { systolic: 130, diastolic: 71, hr: 94, note: "H hypertension plus" }
  }
];

// Export activities for PWA use
export default activities;
