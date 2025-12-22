---
description: Standard process for analyzing a new issue and preparing a fix plan.
---

Step 1: Context Gathering
Analyze the current code
base and the issue description provided by the user.
Identify the specific functions and files involved in the reported b
ehavior.

Step 2: Reproduction
Create a new test file tests/reproduce_issue.py (or relevant extension).
Write a failing test case that demonstrates the
bug.
Run the test and confirm it fails as expected.

Step 3: Implementation Plan
Propose a fix that adheres to our project's coding standards:
Small, focused functions.
Descriptive variable names.
No global variables.

Step 4: Execution
Apply the fix to the source code.
Run the reproduction test again to ensure it passes.
Run the full test suite to check for regressions.

Step 5: Documentation
Update the relevant docstrings or README
Delete the temporary reproduction test file.
if the logic ch