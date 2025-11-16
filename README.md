## 2025-11-16 (Sunday)

### 🩺 Blood Pressure
- AM Reading: 124/64/77 L
- Notes: Low hypertension, resting heart rate normal

### 🚶 Activity
- Mini Movements:
  - 5-min walk — 12:00 → 12:05 (Steps: ~550)
  - 5-min walk — 1:15 → 1:20 (Steps: ~550)
  - 5-min walk — 3:50 → 3:55 (Steps: ~550)
  - 5-min walk — 7:55 → 8:00 (Steps: ~550)
  - 5-min walk — 10:05 → 10:10 (Steps: ~550)
- Primary Walk Session:
  - Time: TBD (longer daily walk, future logs)
- Strength Training:
  - 8:46 → 9:00  
  - Exercises: 3 lateral + biceps  
  - Reps: 10 each  
  - Total Time: 14 minutes

### ☕ Nutrition
- Coffee with ~1 tbsp large scoop sugar + 1 tbsp honey  
  - Calories: 65 total  
  - Carbs: 1.6g  
  - Protein: 0.3g  
  - Potassium: 60mg  
  - Iron: 1.1mg

### 📝 Notes & Highlights
- Heart racing slightly while laying down, nothing extreme  
- Early morning Siri walks logged  
- Relaxed pace for all Mini Movements
- /data          ← your daily logs
/sql           ← optional scripts for analysis
/logs          ← optional daily summaries
README.md      ← this file
SELECT 
    date,
    AVG(systolic) AS avg_sys,
    AVG(diastolic) AS avg_dia,
    AVG(pulse) AS avg_pulse
FROM bp_readings
GROUP BY date
ORDER BY date DESC;
SELECT
    corr(pulse, systolic) AS pulse_sys_corr,
    corr(pulse, diastolic) AS pulse_dia_corr
FROM bp_readings;
