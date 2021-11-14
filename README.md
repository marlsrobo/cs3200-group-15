## Project Name: Northeastern University Clubs
### Team: Group 15
### Team Members: Shaan Arora, Ilana Druskin, Rithesh Kayathi, Marley Robinson
</br>  

### Project Description  
Our project is a database represenation of clubs at Northeastern. Example clubs may include: Northeastern Women in Technology (NUWIT), Northeastern Skate Club, or any of the fraternities and sororities. Each club has certain attributes that describe it, and students can become members of the clubs with certain levels of membership (e.x. President, Treasurer, Member, etc.).  

### UML Class Diagram  
https://github.com/marlsrobo/cs3200-group-15/blob/04ff9fd8522697eb88c0d151bd3f48a5f0e7deaf/db_design_final_project_UML.pdf

### User Data Model Description  

Our user data model is a basic representation of a **Student** at Northeastern. We do not store any academic information for a student, we simply store the follow fields:
- studentId (Integer, primary key): the unique NUID of the student 
- firstName (String): the student's first name
- lastName (String): the student's last name
- username (String): the student's username
- password (String): the student's password
- email (String): the student's email
- dateOfBirth (Date): the student's date of birth

### Domain Object Data Models Descriptions

Our first domain object data model is a **Club** which represents a single Northeastern club. The object contains the following fields:  
- clubId (Integer, primary key): the club's unique id
- locationId (Integer, foreign key): the id of the location that this club meets at regularly
- name (String): the name of the club
- category (String): the club's category (e.x. fraternity, sport, religious, etc.)
- advisor (String): the full name of the academic advisor of the club
- budget (Unsigned Integer): the club's budget represented in USD
- capacity (Unsigned Integer): the maximum number of members that can be in the club

Our other domain object data model is a **Location** which represents a location on one of Northeastern's campuses that clubs can meet at. The object contains the following fields:
- locationId (Integer, primary key): the location's unique id
- virtual (Boolean): whether this location is virtual or not (e.x. held on Zoom, Teams, or in person)
- campus (String): the name of the Northeastern campus where this location is found (e.x. Boston, Seattle, etc.)
- building (String): the name of the building where the location is found (e.x. Hurtig, Richards, etc.)
- roomNumber (Unsigned Integer): the room number of the location

### User to Domain Object Relationship Description

Our user (Student) can be a member of any number of Clubs, and Clubs can have any number of Students as members. Therefore, there is a many-to-many relationship between Clubs and Students. In order to reify the relationship and also include the membership status of a Student for a particular Club, we created an **Enrollment** class. There is a one-to-many relationship between a Club and an Enrollment, and also a one-to-many relationship between a Student and an Enrollment. An Enrollment has the following fields:
- studentId (Integer, foreign key): the NUID of the student in this enrollment record
- clubId(Integer, foreign key): the id of the club that the student in this record is a member of
- membershipStatus (MembershipStatus, foreign key): the membership status (our defined enumeration) of the student for the particular club in this record

For instance, if a student with studentId 1 is the president of a club with clubId 3, the record would be (studentId: 1, clubId: 3, membershipStatus: PRESIDENT). 

The **Enrollment** has a superkey comprised of the studentId and clubId fields so that we can ensure that a student can only have 1 membership status per club that they are enrolled in.

### Domain Object to Domain Object Relationship Description  

There is a one-to-many relationship between a Club and a Location because a Club can only meet at one Location, but a Location can host many different Clubs.

### Portable Enumeration Description  

Our enumeration is **MembershipStatus** which represents the membership status of a Student for a Club. The possible values are:
- MEMBER: the Student is just a member of a club and does not hold any leadership positions
- PRESIDENT: the Student is the President of the club
- VICE PRESIDENT: the Student is the Vice President of the club
- TREASURER: the Student is the Treasurer of the club
- SECRETARY: the Student is the Secretary of the club
- INACTIVE: the Student is an inactive member of the club (e.x. they have not participated in a long time, have graduated, etc.)

### User Interface Requirements Description
