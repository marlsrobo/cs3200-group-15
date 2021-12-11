## Project Name: Northeastern University Clubs
### Team: Group 15, CS3200 CRN 15731
### Team Members: Shaan Arora, Ilana Druskin, Rithesh Kayathi, Marley Robinson
</br>  

### Project Description  
Our project is a database represenation of clubs at Northeastern. Example clubs may include: Northeastern Women in Technology (NUWIT), Northeastern Skate Club, or any of the fraternities and sororities. Each club has certain attributes that describe it, including a reference to where the club meets, and students can become members of the club.

### UML Class Diagram  
https://github.com/marlsrobo/cs3200-group-15/blob/76614ac3447b8409ce90f5ed428747ffe242e0f3/db_design_final_project_UML.pdf

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
- category (ClubCategory): the club's category (e.x. ACADEMIC, SPORTS, etc.)
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

For instance, if a student with studentId 1 is in a club with clubId 3, the record would be (studentId: 1, clubId: 3). 

The **Enrollment** has a superkey comprised of the studentId and clubId fields so that we can ensure that a student can only be listed once per club that they are enrolled in.

### Domain Object to Domain Object Relationship Description  

There is a one-to-many relationship between a Club and a Location because a Club can only meet at one Location, but a Location can host many different Clubs.

### Portable Enumeration Description  

Our enumeration is **ClubCategory** which represents the type of category that a Club can be categorized as. The possible values are:
- ACADEMIC
- ART
- BUSINESS
- CULTURAL
- SOCIAL
- SPORTS

### User Interface Requirements Description

**Club List:** a list of all the clubs in the clubs database. For each club, name of the club is shown. A link to all of the students in the club is also displayed.  
**Club Editor:** an editor form for a single club that allows its fields to be modified. 

**Location List:** a list of all the locations in the locations database. For each location, the campus, building, room number, and in-person fields are shown. A link to all of the clubs that meet at this location are displayed.  
**Location Editor:** an editor form for a single location that allows its fields to be modified.

**Student List:** a list of all the students in the students database. For each student, the first name, last name, and username fields are shown. A link to all of the clubs that this student are a member of is also shown which will list the membership status of the student in particular clubs.  
**Student Editor:** an editor form for a single student that allows its fields to be modified.
