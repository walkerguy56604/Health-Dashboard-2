const activities = [
  {
    date: "2025-12-29",
    type: "Walk",
    start_time: "08:05",
    end_time: "08:10",
    duration_minutes: 5,
    notes: "Short walk before strength training",
    pre_bp: "",
    post_bp: ""
  },
  {
    date: "2025-12-29",
    type: "Strength Training",
    start_time: "08:20",
    end_time: "08:34",
    exercises: [
      { name: "Lateral Raises", sets: 3, reps: 10 },
      { name: "Biceps Curl", sets: 3, reps: 10 }
    ],
    pre_bp: "121/73/96 M hypertension",
    post_bp: "128/67/96 M hypertension IHB"
  },
  {
    date: "2025-12-29",
    type: "Walk",
    start_time: "13:00",
    end_time: "13:30",
    duration_minutes: 30,
    notes: "Afternoon walk",
    pre_bp: "",
    post_bp: ""
  },
  {
    date: "2025-12-29",
    type: "Treadmill",
    start_time: "13:42",
    end_time: "13:52",
    duration_minutes: 10,
    distance_km: 0.24,
    speed: 1.4,
    calories_burned: 12,
    heart_rate_avg: 107,
    heart_rate_max: 117,
    notes: "",
    pre_bp: "",
    post_bp: "120/63/95 M hypertension plus"
  },
  {
    date: "2025-12-29",
    type: "Strength Training",
    start_time: "15:50",
    end_time: "16:12",
    exercises: [
      { name: "Lateral Raises", sets: 3, reps: 10 },
      { name: "Biceps Curl", sets: 3, reps: 10 }
    ],
    pre_bp: "",
    post_bp: "130/71/94 H hypertension plus"
  },
  {
    date: "2025-12-29",
    type: "Walk",
    start_time: "17:00",
    end_time: "17:30",
    duration_minutes: 30,
    notes: "Evening walk",
    pre_bp: "",
    post_bp: ""
  },
  {
    date: "2025-12-29",
    type: "Treadmill",
    start_time: "17:20",
    end_time: "17:30",
    duration_minutes: 10,
    distance_km: 0.24,
    speed: 1.4,
    calories_burned: 12,
    heart_rate_avg: 109,
    heart_rate_max: 119,
    notes: "",
    pre_bp: "",
    post_bp: "128/76/98 M hypertension"
  }
];

export default activities;
