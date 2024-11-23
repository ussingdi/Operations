import os

def modify_file():
    """Modify the 'calculate_sum' function in 'complex_operations.py'."""
    filename = "complex_operations.py"
    with open(filename, "r") as file:
        lines = file.readlines()
    
    # Simulate a change by adding a debug statement in `calculate_sum`
    for i in range(len(lines)):
        if "def calculate_sum" in lines[i]:
            lines.insert(i + 1, '    print(f"Debug: Adding {a} and {b}")\n')
            break


    print(f"Modified {filename}: Added debug statement in 'calculate_sum'.")

def commit_changes():
    """Stage and commit the changes."""
    os.system("git add .")
    os.system('git commit -m "Modified calculate_sum for testing"')
    os.system("git push")
    print("Changes committed and pushed to the repository.")

if __name__ == "__main__":
    modify_file()
    commit_changes()
