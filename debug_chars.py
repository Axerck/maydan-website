
import unicodedata

filepath = "/Users/axerck/Sites/maydan/src/pages/it/pubblicazioni/vol-1.md"

lines_to_check = [25, 40, 43, 56, 59]

with open(filepath, 'r') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    line_num = i + 1
    if line_num in lines_to_check:
        print(f"--- Line {line_num} ---")
        print(line.strip())
        for char in line.strip():
            if ord(char) > 127:
                print(f"  {char}: U+{ord(char):04X} ({unicodedata.name(char, 'UNKNOWN')})")
