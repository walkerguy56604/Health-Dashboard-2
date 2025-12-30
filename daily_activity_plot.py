import pandas as pd
import matplotlib.pyplot as plt

# Load the CSV (make sure your CSV is in the same folder or adjust the path)
df = pd.read_csv("daily_activity_log.csv", parse_dates=["DateTime"])

# Example: assume your CSV has columns:
# DateTime, Activity, Duration, HeartRate, Calories

# Create a plot
plt.figure(figsize=(10, 5))

# Filter and plot walks
walks = df[df["Activity"] == "Walk"]
plt.plot(walks["DateTime"], walks["HeartRate"], label="Walk HR", marker='o')

# Filter and plot treadmill
treadmill = df[df["Activity"] == "Treadmill"]
plt.plot(treadmill["DateTime"], treadmill["HeartRate"], label="Treadmill HR", marker='s')

# Filter and plot strength training
strength = df[df["Activity"] == "Strength"]
plt.plot(strength["DateTime"], strength["HeartRate"], label="Strength HR", marker='^')

plt.xlabel("Time")
plt.ylabel("Heart Rate")
plt.title("Daily Activity Heart Rate")
plt.legend()
plt.tight_layout()

# Save the plot to the output folder
plt.savefig("output/daily_activity_plot.png")
plt.show()
