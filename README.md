# Leetcode

Workspace for doing leetcode questions with bun!

## Usage
Its assumed that all leetcode questions will be solved using tests within the workspace. When ran as an executable, it will attempt to fetch a question from the leetcode api, and create the file system for solving and testing the given question.

When a question is fetched, the following file structure is used:
- `src/problems/<difficulty>/<title>`: root directory for the problem files
  - `description.md`: contains the problem description in markdown format
  - `solution.ts`: code snippet for typescript
- `test/problems/<difficulty>`: root directory for tests of a certain difficulty
  - `<title>.test.ts`: will contain stubbed out, not funcitoning tests for each of the example tests for the problem

```bash
# fetch a question and create the file system
bun run start --title two-sum

# test solution
bun test two-sum
```