-- Example: Calculate daily average blood pressure
SELECT
    date,
    AVG(systolic) AS avg_systolic,
    AVG(diastolic) AS avg_diastolic,
    AVG(pulse) AS avg_pulse
FROM blood_pressure
GROUP BY date
ORDER BY date DESC;
