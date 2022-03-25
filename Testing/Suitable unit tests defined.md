# What is Unit Testing?

Unit testing is the process of verifying and validating smaller parts of source code or sometimes it can be used to validate
the whole program. It is the most imporatnt part of QA testing and it is normally the first stage of QA testing. 
Unit testing usually is done automatically but can be executed manually as well. 

Sometimes DevOps teams uses an inverse technique called TDD (Test Driven Development) to create
software based on initial requirements. This means that a software development team writes
test code before any production of solution code.

The diagram below shows Unit testing works.

![alt text](https://i.ibb.co/7jCGnnh/pic.jpg)

CircleCI is software that the team is using. It is great because it runs on a cloud
and the environment is clan each time, this means no previous executions or code will
be found in a new execution or unit testing. One unit test can have many jobs and
builds. And the files have a .yml extension.

Remember that unit testing is an important part of an AGILE philosophy and style of
work these days. It reduces risks and delivers good quality software to the
customer. CI stands for Continuous Integration, and this is the unit testing lifecycle 
described in the next image.
 
For our website connected to a database, some examples of unit testing can be
verification that each web page is displayed correctly, buttons on each web page
works correctly, connection to a database, access to information from the database
and more. Unit testing would also be fundemental for our website so we can always know the status of our pages before the user acesses it, and it can alert our team if there is any issue with the web page.

