# Automation-Test-Assigment
Part 2: UI Automation Test
# Step 1: Ensure the following tools are installed:
+ Node.js 
+ npm (comes with Node.js)
+ Docker (to run the web application locally)
+ Java (for generating Allure reports)
# Step 2: Install Dependencies
+ git clone https://github.com/saucelabs/the-internet.git
+ cd the-internet
+ npm init -y
+ npm install webdriverio cucumber --save
+ npm install --save-dev @wdio/allure-reporter
# Step 3: Run the test
npx wdio run wdio.conf.ts --spec ./tests/features/<feature-file>.feature




