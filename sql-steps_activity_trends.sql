-- Example: Track daily steps, Mini Movements, and PrimaryWalk
SELECT
    date,
    SUM(CASE WHEN activity_type = 'Mini Movement' THEN steps ELSE 0 END) AS mini_movement_steps,
    SUM(CASE WHEN activity_type = 'PrimaryWalk' THEN steps ELSE 0 END) AS primary_walk_steps,
    SUM(steps) AS total_daily_steps
FROM daily_activity
GROUP BY date
ORDER BY date DESC;
