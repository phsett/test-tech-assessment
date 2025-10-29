# Shady Meadows B&B Test Suite

## Initial Setup Requirements

1. Java 21 
2. Node v20 
3. VSCode (recommended) or an IDE of your choosing

## Installation of repository

`git clone https://github.com/phsett/test-tech-assessment.git`

This will clone the repository into your specified folder on your local machine. Once this is done, open the correct folder in your IDE of choice and run the below commands to install dependencies: - 

 ` npm install `

 ` npx playwright install ` (this step will install the browsers required for Playwright)

## Running the tests 

### Commandline test runs

Tests can be run using the following commands: - 

` npx playwright test `

This command runs the tests in headless mode. A report is generated and opened afterwards showing the results of the run. 

` npx playwright test --headed `

This command runs the test in headed mode. A report is generated and opened afterwards showing the results of the run. 

` npx playwright test --grep @regression `

This command runs all tests with the '@regression' tag. This can be adapted for any tag in the repository (e.g. @accessibility)

`npx playwright test filename.spec.ts `

This command runs a specific test file depending on which you specify - e.g. 'admin-create-room.spec.ts' 

`npx playwright test --grep 'test name' `

This command can be used to run a specific test within a file based on the name - e.g. 'Booking a Room - Happy Path'

### Playwright Test Extension for VSCode (Optional)






  



