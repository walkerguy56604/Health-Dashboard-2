// Example: load CSV and display in console
async function loadCSV(file) {
  const response = await fetch(`data/${file}`);
  const text = await response.text();
  const rows = text.split('\n').map(row => row.split(','));
  console.log(rows);
}

// Load your daily activity CSV
loadCSV('daily_activity.csv');
