# Health Dashboard #2

## Recent Logs (most recent first)
- [Nov 17, 2025](daily-movement-2025-11-17.md) ← placeholder for tomorrow
- [Nov 16, 2025](daily-movement-2025-11-16.md)
- [Nov 18, 2025](daily-movement-2025-11-18.md) ← placeholder for the day after

## All Daily Movement Logs
- [Nov 16, 2025](daily-movement-2025-11-16.md)
- [Nov 17, 2025](daily-movement-2025-11-17.md)
- [Nov 18, 2025](daily-movement-2025-11-18.md)
- … (keep adding future days here)

## Daily Summary Placeholders
- **Nov 16, 2025:** `Primary Walk / Mini Walks / Strength Training / Notes`
- **Nov 17, 2025:** placeholder
- **Nov 18, 2025:** placeholder

## Notes & Highlights
- Observations, energy, BP trends, strength notes, any other relevant info


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
README.md      ← this fileSELECT 
    date,
    AVG(systolic) AS avg_sys,
    AVG(diastolic) AS avg_dia,
    AVG(pulse) AS avg_pulse
FROM bp_readings
GROUP BY date
ORDER BY date DESC;
Health Dashboard #2

Recent Logs (most recent first)
	•	Nov 17, 2025￼  ← today’s placeholder
	•	Nov 16, 2025￼

All Daily Movement Logs
	•	Nov 16, 2025￼
	•	Nov 17, 2025￼  ← new placeholder
	•	… (keep adding more days as you go)

Notes & Highlights
	•	Mini walk: 5 minutes (3:54–3:59 PM, Nov 17)
	•	Strength training: 16 minutes (4:04–4:20 PM, Nov 17)
	•	Exercises: 3 biceps, 3 lateral, 10 each
	•	Observations: Energy, BP trends, daily notes, and progress

Dashboard Placeholder
	•	SQL Totals & Analytics: [Link to SQL or placeholder]
	•	Primary Walk Session: [Link or placeholder for detailed activity]
	•	Future GitHub Pages Dashboard: [Placeholder link]
## Recent Logs (most recent first)
- [Nov 18, 2025](daily-movement-2025-11-18.md)
- [Nov 17, 2025](daily-movement-2025-11-17.md)
- [Nov 16, 2025](daily-movement-2025-11-16.md)

## All Daily Movement Logs
- [Nov 16, 2025](daily-movement-2025-11-16.md)
- [Nov 17, 2025](daily-movement-2025-11-17.md)
- [Nov 18, 2025](daily-movement-2025-11-18.md)
- … (you can keep adding more days here)

## Nov 17, 2025 — Daily Summary
### Daily Totals
- Steps: 
- Distance: 
- Calories (estimated): 
- Strength Training: 

### Walks & Movements
- Primary Walk: Start ___ / End ___
- Mini Walks / Movements: Start ___ / End ___

### Strength Training
- Exercise: Sets x Reps
- Notes:

### Notes & Highlights
- Energy, mood, observations:
- Blood Pressure / Pulse trends:
- Other notes:
# Siri Adaptive Core + Companion

**Owner:** Mark  
**Project:** Personal health shortcuts suite (blood pressure logging, notes, exports, dashboard)  
**Date:** 2025-11-29

## Overview
This repo contains a suite of iOS Shortcuts that together form the **Siri Adaptive Core + Companion** system — a modular, voice-first personal health platform. The core captures blood pressure (BP) readings, timestamps in multiple formats, device context, and stores readings as structured dictionaries in a master list (`AppReadings`). Companion shortcuts (Notes, GitHub sync, email, etc.) interact with the core by appending or reading `AppReadings`.

## Key Concepts
- **One reading = one dictionary.** Each reading is self-contained (Raw, Formatted, Device, Meta).
- **AppReadings** = list of dictionaries (the master history).
- **Repeat** blocks iterate **per dictionary** (Repeat Item → keys).
- **Modular companions** read/write to `AppReadings` so features can be added without changing core logic.

## Data schema (per reading)
```json
{
  "Raw": {
    "Sys": 125,
    "Dia": 80,
    "Pulse": 72
  },
  "Formatted": {
    "BPString": "125/80",
    "PulseString": "72 BPM",
    "ISOTime": "2025-11-29T10:49:32-08:00",
    "RFCTime": "Sat, 29 Nov 2025 10:49:32 -0800",
    "LocalTime": "10:49 AM"
  },
  "Device": {
    "Model": "iPad13,18",
    "Battery": 82,
    "Network": "TELUS1496",
    "LocationHint": "Walking"
  },
  "Meta": {
    "Version": "2.0",
    "DataType": "BloodPressureReading",
    "UUID": "D9F2A3C0-..."
  }
}
# Siri Adaptive Core + Companion

**Owner:** Mark  
**Project:** Personal health shortcuts suite (blood pressure logging, notes, exports, dashboard)  
**Date:** 2025-11-29

## Overview
This repo contains a suite of iOS Shortcuts that together form the **Siri Adaptive Core + Companion** system — a modular, voice-first personal health platform. The core captures blood pressure (BP) readings, timestamps in multiple formats, device context, and stores readings as structured dictionaries in a master list (`AppReadings`). Companion shortcuts (Notes, GitHub sync, email, etc.) interact with the core by appending or reading `AppReadings`.

## Key Concepts
- **One reading = one dictionary.** Each reading is self-contained (Raw, Formatted, Device, Meta).
- **AppReadings** = list of dictionaries (the master history).
- **Repeat** blocks iterate **per dictionary** (Repeat Item → keys).
- **Modular companions** read/write to `AppReadings` so features can be added without changing core logic.

## Data schema (per reading)
```json
{
  "Raw": {
    "Sys": 125,
    "Dia": 80,
    "Pulse": 72
  },
  "Formatted": {
    "BPString": "125/80",
    "PulseString": "72 BPM",
    "ISOTime": "2025-11-29T10:49:32-08:00",
    "RFCTime": "Sat, 29 Nov 2025 10:49:32 -0800",
    "LocalTime": "10:49 AM"
  },
  "Device": {
    "Model": "iPad13,18",
    "Battery": 82,
    "Network": "TELUS1496",
    "LocationHint": "Walking"
  },
  "Meta": {
    "Version": "2.0",
    "DataType": "BloodPressureReading",
    "UUID": "D9F2A3C0-..."
  }
}
```

## Shortcuts (naming convention)
- `CORE-01_HealthDashboard`
- `CORE-02_RunCommand`
- `CORE-03_DailyLogEngine`
- `CORE-04_TextMaster1`
- `CORE-05_MiniMovement`
- `SAP-01_SiriAdaptiveCorePlus`  ← main core
- `BP-01_BPEmailSync`
- `BP-02_TextMaster2_BPLog`
- `BP-03_BPTextMaster_Email`
- `COMP-01_NotesBP_Companion`
- `UTILITY-01_CoreMenu` (GetUpSync)
- `UTILITY-02_RESERVED`
- `UTILITY-03_RESERVED`

## How to use
1. Run `SAP-01_SiriAdaptiveCorePlus` to capture a reading.  
2. `COMP-01_NotesBP_Companion` adds timestamped notes that append to `AppReadings`.  
3. `BP-01_BPEmailSync` packages readings and sends/exports as needed.  
4. `CORE-01_HealthDashboard` reads stored data to create views/dashboards (GitHub-backed if desired).

## Export / GitHub sync
Use `CORE-02_RunCommand` to call a script (local/remote) that can push `AppReadings` JSON to the repo. Recommended formats: newline-delimited JSON or CSV for easy import.

## Contribution
- Keep every reading as a dictionary.
- If you add fields, maintain compatibility (Raw, Formatted, Device, Meta).
- New companions should append to `AppReadings` or read from it; avoid in-place merging.
