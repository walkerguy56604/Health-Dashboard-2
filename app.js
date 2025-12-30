// --- CSV Export Function ---
function downloadCSV(activities) {
    if (!activities || activities.length === 0) {
        alert("No activity data to export!");
        return;
    }

    // Extract headers
    const headers = Object.keys(activities[0]);
    const csvRows = [];

    // Add header row
    csvRows.push(headers.join(','));

    // Add data rows
    activities.forEach(activity => {
        const values = headers.map(header => {
            let val = activity[header];
            // Escape commas and quotes
            if (typeof val === 'string') {
                val = `"${val.replace(/"/g, '""')}"`;
            }
            return val;
        });
        csvRows.push(values.join(','));
    });

    // Create CSV string
    const csvString = csvRows.join('\n');

    // Create a Blob and trigger download
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'daily_activities.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// --- Example Usage ---
// Suppose this is your existing activity array
// let activities = [
//     { date: "2025-12-29", activity: "Walk", duration_minutes: 30, pre_bp: "130/70", post_bp: "125/68" },
//     { date: "2025-12-29", activity: "Strength Training", duration_minutes: 16, pre_bp: "128/67", post_bp: "130/69" }
// ];

// Call this whenever you want to export CSV
// downloadCSV(activities);
