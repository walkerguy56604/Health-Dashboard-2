// app.js - Merged activity log for PWA

const activities = [
  {
    type: "Walk",
    startTime: "08:05",
    endTime: "08:10",
    durationMinutes: 5,
    distanceKm: null,
    calories: null,
    heartRateAvg: null,
    heartRateMax: null,
    notes: "Short walk before strength training",
    bp: null
  },
  {
    type: "Strength Training",
    startTime: "08:20",
    endTime: "08:34",
    durationMinutes: 14,
    exercises: [
      { name: "Lateral", sets: 3, reps: 10 },
      { name: "Biceps", sets: 3, reps: 10 }
    ],
    bp: { systolic: 128, diastolic: 67, hr: 96, category: "M hypertension IHB" }
  },
  {
    type: "Treadmill",
    startTime: "13:42",
    endTime: "13:52",
    durationMinutes: 10,
    distanceKm: 0.24,
    calories: 11,
    heartRateAvg: 107,
    heartRateMax: 117,
    speed: 1.4,
    bp: null
  },
  {
    type: "Walk",
    startTime: "14:02",
    endTime: "14:32",
    durationMinutes: 30,
    distanceKm: null,
    calories: null,
    heartRateAvg: null,
    heartRateMax: null,
    notes: "Post-treadmill walk",
    bp: null
  },
  {
    type: "Strength Training",
    startTime: "15:50",
    endTime: "16:12",
    durationMinutes: 22,
    exercises: [
      { name: "Lateral", sets: 3, reps: 10 },
      { name: "Biceps", sets: 3, reps: 10 }
    ],
    bp: { systolic: 130, diastolic: 71, hr: 94, category: "H hypertension plus" }
  },
  {
    type: "Walk",
    startTime: "16:20",
    endTime: "16:25",
    durationMinutes: 5,
    notes: "Evening walk",
    bp: null
  }
];

export default activities;
