# What is Integration Testing?
Integration Testing which is also somethimes called I&T is the next level above unit testing. During this part of the testing we can an
individual and basic unit which is then merged or integrated together in a sequence
or parallel order, this means that the unit testing starts to interact and give results from the test which is run

The combination of all small units tested previously should work correctly and have the expected
functionality working when connected. Tests are carried out when the program checks and depending on the result it might need to be performed again
to assure good quality software delivered to the customer, since sometimes even though it may say there is no errors a second test will give full assurance

The success of one integration test can be used to generate a valid subsystem ready to continue to
build the final product. Normally if the size of the project is small, the subsystem can be
considered as final system where manual, UI and functional tests should be applied.
Following images explain integration testing:

![alt text](https://i.ibb.co/d6vnZhK/Screenshot-2022-03-23-235858.jpg)
![alt text](https://i.ibb.co/nnJ9SQc/Screenshot-2022-03-24-000130.jpg)

# Example of software for integration testing
CircleCI is a great tool (software) to perform these tests. It has an extensive
commands library to define the sequence of steps to be executed in the job (I&T). It
has an option to choose the time of execute any test without interfering in the
working hours of the team.
Some of the unit tests to perform to our website are functionality ot he links,
connection between database and the webpages, test the security of the database,
performance of the web on different browsers, etc.
Finally, integration testing has diferent approaches as bing-bang, incremental,
bottom-up, top-down and sandwich (mix between two previous).
