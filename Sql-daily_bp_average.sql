-- Calculates daily averages of blood pressure
SELECT date, 
       AVG(systolic) AS avg_systolic, 
       AVG(diastolic) AS avg_diastolic, 
       AVG(pulse) AS avg_pulse
FROM blood_pressure
WHERE date = '2025-11-16'
GROUP BY date;
