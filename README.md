# Playwright coverage example

Run `npm install` and then `VITE_COVERAGE=true npm test` to see the problem.
I get the following output:

```
> playwright-coverage-example@0.0.1 test
> playwright test


Running 1 test using 1 worker

[WebServer] 
[WebServer] 
[WebServer] 
  ✓  1 test.ts:5:1 › index page has expected h1 (272ms)
This is always undefined: undefined


  1 passed (5.8s)
```

The line `This is always undefined: undefined` displays the problem.
The output statement is located on `tests/baseFixtures.ts:25`.
