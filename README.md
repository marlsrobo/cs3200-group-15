## Project Name: Northeastern University Clubs
### Team: Group 15
### Team Members: Shaan Arora, Ilana Druskin, Rithesh Kayathi, Marley Robinson
</br>  

### Project Description  
Our project is a database represenation of clubs at Northeastern. Example clubs may include: Northeastern Women in Technology (NUWIT), Northeastern Skate Club, or any of the fraternities and sororities. Each club has certain attributes that describe it, and students can become members of the clubs with certain levels of membership (e.x. President, Treasurer, Member, etc.).  

### UML Class Diagram: https://github.com/marlsrobo/cs3200-group-15/blob/b42a2d263b2849505a3ffce2958ce18a41852ec2/db_design_final_project_UML.pdf

### User Data Model Description  

Our user data model is a basic representation of a Student at Northeastern. We do not store any academic information for a student, we simply store the follow fields:
- id (Integer, primary key): the unique NUID of the student 
- firstName (String): the student's first name
- lastName (String): the student's last name
- username (String): the student's username
- password (String): the student's password
- email (String): the student's email
- dateOfBirth (Date): the student's date of birth

### Domain Object Data Models Descriptions

Our first domain object data model is a Club, which represents a single Northeastern club. The object contains the following fields:  
- id (Integer, primary key): the club's unique id
- category (String): the club's category (e.x. fraternity, sport, religious, etc.)
- advisor (String): the full name of the academic advisor of the club
- budget (Integer): the club's budget represented in USD
- size (Integer): the number of members in the club
- locationId (Integer, foreign key): the id of the location that this club meets at regularly


### User to Domain Object Relationship Description

### Domain Object to Domain Object Description

### Portable Enumeration Description

### User Interface Requirements Description
