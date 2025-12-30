// Only one event listener for daily summary
document.getElementById('dailySummaryBtn').addEventListener('click', () => {
  const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
  const summary = getDailySummary(today);

  // Calculate average heart rate if you have HR in activities
  let hrTotal = 0, hrCount = 0;
  activities.forEach(a => {
    if (a.date === today && a.avgHR) {
      hrTotal += a.avgHR;
      hrCount++;
    }
  });
  const avgHR = hrCount ? Math.round(hrTotal / hrCount) : "N/A";

  // Display summary
  document.getElementById('dailySummaryOutput').innerHTML = `
    <h3>Daily Summary for ${today}</h3>
    <p><strong>Walk Duration:</strong> ${summary.walkDuration} min (${summary.walkDistance || 0} km)</p>
    <p><strong>Treadmill Duration:</strong> ${summary.treadmillDuration} min (${summary.treadmillDistance || 0} km)</p>
    <p><strong>Strength Duration:</strong> ${summary.strengthDuration} min (${summary.strengthExercises} exercises)</p>
    <p><strong>Calories Burned:</strong> ${summary.caloriesBurned}</p>
    <p><strong>Average Heart Rate:</strong> ${avgHR}</p>
  `;
});
