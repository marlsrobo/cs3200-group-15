package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Club;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClubRepository extends CrudRepository<Club, Integer> {
    @Query(value = "SELECT * FROM clubs", nativeQuery = true)
    public List<Club> findAllClubs();

    @Query(value = "SELECT * FROM clubs WHERE clubs.club_id=:clubId", nativeQuery = true)
    public Club findClubById(@Param("clubId") Integer clubId);
}
