# Automation-Test-Assigment
Part 2: UI Automation Test
# Step 1: Ensure the following tools are installed:
+ Node.js 
+ npm (comes with Node.js)
+ Docker (to run the web application locally)
+ Java (for generating Allure reports)
# Step 2: Install Dependencies
Run below commands at your Windows Powershell:
+ git clone https://github.com/canary-94/Automation-Test-Assignment.git
  ![image](https://github.com/user-attachments/assets/6f090588-9e0a-4605-bec5-fb75a078e300)

+ cd PART 2 - UI AUTOMATION TEST
+ npm init -y
+ npm install webdriverio cucumber --save
+ npm install --save-dev @wdio/allure-reporter
# Step 3: Run the test
npx wdio run wdio.conf.ts --spec ./tests/features/<feature-file>.feature
