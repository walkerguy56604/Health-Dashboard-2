// Sample activity
let activities = [
  { date: "2025-12-29", type: "Strength", duration: 14, exercises: 6, calories: 120, avgHR: 90 }
];

// Daily summary function
function getDailySummary(date) {
  let summary = { strengthDuration: 0, strengthExercises: 0, caloriesBurned: 0, avgHeartRate: 0 };

  let hrSum = 0, hrCount = 0;

  activities.forEach(a => {
    if (a.date === date) {
      summary.strengthDuration += a.duration || 0;
      summary.strengthExercises += a.exercises || 0;
      summary.caloriesBurned += a.calories || 0;
      if (a.avgHR) { hrSum += a.avgHR; hrCount++; }
    }
  });

  summary.avgHeartRate = hrCount ? Math.round(hrSum / hrCount) : "N/A";
  return summary;
}

// Event listener
document.getElementById('dailySummaryBtn').addEventListener('click', () => {
  const today = "2025-12-29"; // hardcoded for now
  const summary = getDailySummary(today);

  document.getElementById('dailySummaryOutput').innerHTML = `
    <h3>Daily Summary for ${today}</h3>
    <p><strong>Strength Duration:</strong> ${summary.strengthDuration} min (${summary.strengthExercises} exercises)</p>
    <p><strong>Calories Burned:</strong> ${summary.caloriesBurned}</p>
    <p><strong>Average Heart Rate:</strong> ${summary.avgHeartRate}</p>
  `;
});
