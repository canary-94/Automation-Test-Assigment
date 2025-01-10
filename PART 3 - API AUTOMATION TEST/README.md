# Part 3: API Automation Test

Pre-condition: You have Docker and can lanch the JSON Server http://localhost:3000 to see APIs.
![image](https://github.com/user-attachments/assets/7cb43590-2154-466f-b8dc-e493f7b0af96)


Below we can setup and excute test using POSTMAN:
# Step 1: Download & Install POSTMAN tool
You can download here: https://www.postman.com/downloads/
# Step 2: Download & Import postman collection to your postman
![image](https://github.com/user-attachments/assets/076b2826-5ecc-47dc-bdf1-e30ab628c6c8)

# Step 3: Run the test
1/ Open the Collection Runner:
In Postman, go to the Collections tab.
Hover over your collection name and click on the three dots (options menu).
Select Run Collection.
![image](https://github.com/user-attachments/assets/d4c8f582-63d7-449d-afb9-76cd9561f0b0)


2/ Configure the Run Settings
+ Select the Environment: If you're using an environment (e.g., for dynamic variables), select it here.
+ Run Options: Data File: upload a CSV file that contains input data for each iteration
+ Request Settings:
Delay: You can introduce a delay between requests if needed.
Save responses: Optionally save the responses for later review.

3/ Start the Run
Click the Run button to start executing the requests in the collection. You can run all requests in the collection, or select specific ones. 
![image](https://github.com/user-attachments/assets/c9e3dc7e-2089-431c-a4ba-67e68a620e20)


# Step 4: Review Results
Once the run is completed, you will be able to view:
Request results: Each request will show whether it passed or failed.
Test results: Any tests you’ve written in the Tests tab will be displayed here (e.g., whether the response has the correct status code).
Logs: View the request and response details for debugging.
![image](https://github.com/user-attachments/assets/15d43763-25ec-4aca-a165-e215d46202cd)


 # Step5: Export the Results
If you need to share the results, you can export them:
Click on the Export Results button.
Choose the format you want to export the results in (e.g., HTML, JSON).

