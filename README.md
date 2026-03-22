# beeandrst

## Prerequisites
- Node.js
- npm
- k6

## Project setup
```bash
npm run setup
```

## Performance testing

### How to run
```bash
k6 run --summary-export=performance/summary.json performance/users.get.page1.perf.ts
```
The command exports the performance summary to performance/summary.json.

## UI testing

### How to run
```bash
npx playwright test
```

### Artifacts
- Playwright HTML report is generated in `playwright-report/`
- Test artifacts such as traces and screenshots are stored in `test-results/`

The report can be opened locally using:
```bash
npx playwright show-report
```