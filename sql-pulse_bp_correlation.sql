-- Example: Correlate pulse and blood pressure
SELECT
    date,
    CORR(pulse, systolic) AS pulse_systolic_corr,
    CORR(pulse, diastolic) AS pulse_diastolic_corr
FROM blood_pressure
GROUP BY date
ORDER BY date DESC;
