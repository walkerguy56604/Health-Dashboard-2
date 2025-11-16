-- Correlates pulse with blood pressure trends
SELECT date,
       CORR(pulse, systolic) AS corr_pulse_systolic,
       CORR(pulse, diastolic) AS corr_pulse_diastolic
FROM blood_pressure
WHERE date = '2025-11-16';
