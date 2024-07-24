### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
The project presents USDA nutrition info from common grocery products to users, allowing them to easily find nutrition information. The user has the ability to search to find a specific product's FDC ID, brand names and descriptions. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1) Access the form here: https://github.com/Sterling47/backend-stretch
2) Copy the SSH repository URL git@github.com:Sterling47/backend-stretch.git
3) Open terminal and 'cd' into the directory you wish to clone 
4) Clone the repository by submitting `git clone git@github.com:Sterling47/backend-stretch.git`

For Testing:
1) cd into the directory and run 'npm run dev' in the terminal
2) In another tab in your terminal, run 'npm run cypress:open'
3) Choose e2e testing
4) Run on your browser of choice (Preferebly Chrome)
5) Select 'rt-test.cy.js' in the browser
0
### Preview of App:
[Preview of main page](https://imgur.com/DKBxmCx)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This project was assigned in week 15 of Turing's School of Software and Design. 

This project was a "stretch tech" project in Mod 3, with each module being six weeks in length and a "back end" project hosting a server for retrieving USDA nutrition info for common grocery projects. After successfully formatting and hosting the data in CSV files, this portion of the project was to fetch the API and render the nutrition data.  

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
Peter Kim: https://github.com/peterkimpk1
Adam Konber: https://github.com/Sterling47
David Swatzell: https://github.com/Swatzell
Zach Wolek: https://github.com/zachwolek/

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The primary learning goal of this project was to build a back end server hosting nutritional data, then using a single app using React page to render the API data.  

Technologies across the project:

Vite, Express, Knex, PostgreSQL, PGAdmin 4, React, JSX, Cypress, React Hooks, HTML, JS/ES6, and CSS. 


### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
1) The distant challenge of the project was ensuring the configuration of seeded data was able to be accessed on routes across all local machines. This required a great amount of collaboration and communication to learn the technologies together in order to make sure everyone's local machine was able to retrieve the API data. 
2) The next largest challenge was understanding the scope of the project as a whole, namely understanding the relationship between Express, Knex, and Postgres in retreiving the data from our front end. Initial data fetches ended up receiving USDA data that had tens of thousands of rows and was very difficult on our page loads, which required an large amount of collaboration to hone down the data for page load. 
