-- Tracks all movements including mini and primary walks
SELECT date, activity_type, duration, steps
FROM activity_log
WHERE date = '2025-11-16';
