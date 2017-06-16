# planets-jaskarang
Boiler plate for angularjs 1.x, jasmine and karma

# Overview of steps for setup
Create app and test folders <br />
*npm init* to create the packages.json <br />
*npm install karma-jasmine --save-dev* to install test frame work <br />
*npm install karma-chrome-launcher --save-dev* to install chrome front end <br />
*npm install -g jasmine-core* (if this is missing) <br />
*karma init* to setup karma configuration <br />
<br/>
>> location of source files app\\\*\*\\\*.js<br/>
>> location of tests test\\\*\*\\\*.js
<br/>

*bower install angular*<br />
*bower install angular-mocks*<br />
*bower install angular-resource*<br />
<br/>
Use *karma start* in a command window at the root of the project to kick off the karma test session
<br/><br/>
To run the front end you can use "http-server" (install through npm). The URL localhost:8080/app should be enough to run up the front end.<br/>
This project can also be linked to the back end project "astro-data-self-hosting-service" which runs as a self hosting service (see configuration\config.js for the configuration line).

