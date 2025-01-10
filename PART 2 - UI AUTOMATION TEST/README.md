# Automation-Test-Assigment
Part 2: UI Automation Test
# Ensure the following tools are installed:
+ Node.js 
+ npm (comes with Node.js)
+ Docker (to run the web application locally)
+ Java (for generating Allure reports)
+ Visual Studio Code
# Make sure you have Docker and lanch app on local:
![image](https://github.com/user-attachments/assets/4a716431-db9f-48fa-9715-fe13a3983f29)

# Step 1: Clone repositories
Select a folder and run below command at your Windows Powershell to clone repo:
+ git clone https://github.com/canary-94/Automation-Test-Assignment.git
  ![image](https://github.com/user-attachments/assets/6f090588-9e0a-4605-bec5-fb75a078e300)

# Step 2: 
+ Using Visual Studio Code to open folder PART 2 - UI AUTOMATION TEST
+ Run command **npm install** to install node modules

# Step 3: Run the test:
Config and run the test feature file by Terminal with 
**npx wdio run wdio.conf.ts --spec ./tests/features/login.feature**
![image](https://github.com/user-attachments/assets/11e4eae7-5593-450d-90ae-2fdf44d60578)
you would see the test result:

![image](https://github.com/user-attachments/assets/6805f96a-415b-4c00-8d8f-4bbefbdc1681)

# Step 4: Run Allure report 
Using command: npm run report to generate Allure report as below:
![image](https://github.com/user-attachments/assets/492b881f-c54a-4554-baf7-cc9eed7012fe)

![image](https://github.com/user-attachments/assets/49fa27c1-9129-4376-bfb9-62cd5ab8fe0e)

