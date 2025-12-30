import pandas as pd
import matplotlib.pyplot as plt

# Read CSV
df = pd.read_csv("daily_activity_log.csv", parse_dates=["DateTime"])

# Example: after-strength training marker
after_strength_training = df[df["Activity"] == "Strength"]

# Plot all heart rates
plt.figure(figsize=(10,5))
plt.plot(df["DateTime"], df["HeartRate"], marker='o', linestyle='-', label="All Activities")

# Highlight after-strength training in red
plt.scatter(after_strength_training["DateTime"], after_strength_training["HeartRate"], 
            color='red', s=100, label="After Strength Training")

plt.title("Daily Activity Heart Rate")
plt.xlabel("Time")
plt.ylabel("Heart Rate")
plt.grid(True)
plt.xticks(rotation=45)
plt.legend()

# Save as PNG
plt.savefig("daily_activity_plot.png", bbox_inches='tight')
plt.show()
