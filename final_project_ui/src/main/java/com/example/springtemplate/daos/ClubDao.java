package com.example.springtemplate.daos;

import com.example.springtemplate.models.Club;
import com.example.springtemplate.repositories.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClubDao {
    @Autowired
    ClubRepository repository;

    @GetMapping("/clubs")
    public List<Club> findAllClubs() {
        return repository.findAllClubs();
    }


    @GetMapping("/clubs/{id}")
    public Club findClubById(@PathVariable("id") Integer id) {
        return repository.findClubById(id);
    }


    @GetMapping("/create/club/{name}/{category}/{advisor}/{budget}/{capacity}")
    public Club createClub(@PathVariable("name") String name,
                                 @PathVariable("category") String category,
                                 @PathVariable("advisor") String advisor,
                                 @PathVariable("budget") Integer budget,
                                 @PathVariable("capacity") Integer capacity) {
        Club club = new Club(name, category, advisor, budget, capacity);
        return repository.save(club);
    }

    @PutMapping("/clubs/{clubId}")
    public Club updateClub(
            @PathVariable("clubId") Integer id,
            @RequestBody Club clubUpdates) {
        Club club = repository.findClubById(id);

        club.setName(clubUpdates.getName());
        club.setCategory(clubUpdates.getCategory());
        club.setAdvisor(clubUpdates.getAdvisor());
        club.setBudget(clubUpdates.getBudget());
        club.setCapacity(clubUpdates.getCapacity());
        return repository.save(club);
    }

    @GetMapping("/clubs/delete/{id}")
    public void deleteClub(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
}
