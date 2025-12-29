// Sample data for testing
const activities = [
  { time: "8:05-8:10", activity: "5 min walk" },
  { time: "8:20-8:34", activity: "Strength Training" }
];

const bpEntries = [
  { time: "8:00", reading: "129/73/84 M hypertension" },
  { time: "8:35", reading: "136/70/94 H hypertension" }
];

const glucoseEntries = [
  { time: "8:00", reading: "6.9 mmol/L" },
  { time: "12:00", reading: "3.8 mmol/L" }
];

// Helper function to populate lists
function populateList(id, data, key) {
  const ul = document.getElementById(id);
  data.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.time} - ${entry[key]}`;
    ul.appendChild(li);
  });
}

// Populate dashboard
populateList("activities", activities, "activity");
populateList("bp-entries", bpEntries, "reading");
populateList("glucose-entries", glucoseEntries, "reading");
