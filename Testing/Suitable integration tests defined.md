INTEGRATION TESTING, somethimes called I&T is the next level above unit testing,
where individual and basic units are merged or integrated togheter in a sequence
or paralel order. This means that unit testing start to interact. The combination
of all small units tested previously should work correctly and have the expected
functionality working when connected. Tests and checks need to be performed again
to assure good quality software delivered to the customer. 
The success of one integration test generate a valid subsystem ready to continue to
build the final product. If the size of the project is small, the subsystem can be
considered as final system where manual, UI and functional tests should be applied.
Following images explain integration testing:

CircleCI is a great tool (software) to perform these tests. It has an extensive
commands library to define the sequence of steps to be executed in the job (I&T). It
has an option to choose the time of execute any test without interfering in the
working hours of the team.
Some of the unit tests to perform to our website are functionality ot he links,
connection between database and the webpages, test the security of the database,
performance of the web on different browsers, etc.
Finally, integration testing has diferent approaches as bing-bang, incremental,
bottom-up, top-down and sandwich (mix between two previous).
