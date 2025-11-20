import yaml
import os

os.makedirs("docs", exist_ok=True)

for file in os.listdir("data"):
    if file.endswith(".yaml"):
        base = file.replace(".yaml","")
        with open(f"data/{file}") as f:
            data = yaml.safe_load(f)
        with open(f"docs/{base}.md","w") as out:
            out.write(f"# {data.get('date','No Date')}\n\n")
            out.write(f"**Summary:** {data.get('summary','')}\n\n")
            # Activities
            out.write("## Activities\n")
            for act in data.get("activities", []):
                out.write(f"- {act['type']} ({act.get('start_time','')} - {act.get('end_time','')}): {act.get('details','')}\n")
            # Notes
            out.write("\n## Notes\n")
            out.write(data.get("notes",""))
