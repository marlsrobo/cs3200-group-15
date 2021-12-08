package com.example.springtemplate.daos;

import com.example.springtemplate.models.Club;
import com.example.springtemplate.models.Enrollment;
import com.example.springtemplate.models.Location;
import com.example.springtemplate.models.MembershipStatus;
import com.example.springtemplate.models.Student;
import com.example.springtemplate.repositories.ClubRepository;
import com.example.springtemplate.repositories.LocationRepository;
import com.example.springtemplate.repositories.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ClubDao {
    @Autowired
    ClubRepository clubRepository;
    
    @Autowired
    StudentRepository studentRepository;

    @Autowired
    LocationRepository locationRepository;

    @PostMapping("/api/clubs")
    public Club createClub(@RequestBody Club club) {
        return clubRepository.save(club);
    }

    @PostMapping("/api/students/{studentId}/clubs/{mshipStatus}")
    public Club createClubForStudent(
            @PathVariable("studentId") Integer studentId,
            @PathVariable("mshipStatus") String mshipStatus,
            @RequestBody Club club) {
        club = clubRepository.save(club);
        Student student = studentRepository.findStudentById(studentId);
        Enrollment enrollment = new Enrollment(student, club, MembershipStatus.valueOf(mshipStatus));
        List<Enrollment> studentEnrollments = student.getEnrollments();
        studentEnrollments.add(enrollment);
        student.setEnrollments(studentEnrollments);

        List<Enrollment> clubEnrollments = club.getEnrollments();
        clubEnrollments.add(enrollment);
        club.setEnrollments(clubEnrollments);
        studentRepository.save(student);
        return clubRepository.save(club);
    }

    @PostMapping("/api/locations/{locationId}/clubs")
    public Club createClubForLocation(
            @PathVariable("locationId") Integer locationId,
            @RequestBody Club club) {
        club = clubRepository.save(club);
        Location location = locationRepository.findLocationById(locationId);
        List<Club> locationClubs = location.getClubs();
        locationClubs.add(club);
        location.setClubs(locationClubs);
        club.setLocation(location);
        return clubRepository.save(club);
    }

    @GetMapping("/api/clubs")
    public List<Club> findAllClubs() {
        return clubRepository.findAllClubs();
    }

    @GetMapping("/api/clubs/{clubId}")
    public Club findClubById(@PathVariable("clubId") Integer clubId) {
        return clubRepository.findClubById(clubId);
    }

    @PutMapping("/api/clubs/{clubId}")
    public Club updateClub(
            @PathVariable("clubId") Integer clubId,
            @RequestBody Club clubUpdates) {
        Club club = clubRepository.findClubById(clubId);

        club.setName(clubUpdates.getName());
        club.setCategory(clubUpdates.getCategory());
        club.setAdvisor(clubUpdates.getAdvisor());
        club.setBudget(clubUpdates.getBudget());
        club.setCapacity(clubUpdates.getCapacity());
        return clubRepository.save(club);
    }

    @DeleteMapping("/api/clubs/{clubId}")
    public void deleteClub(
            @PathVariable("clubId") Integer clubId) {
        clubRepository.deleteById(clubId);
    }
}
