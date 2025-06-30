package com.smartFleetManagementSystem.TripService.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.smartFleetManagementSystem.TripService.DTO.Trip;




@Repository
public interface TripRepository extends JpaRepository<Trip, Long> {
	@Query(value = "SELECT column_name FROM information_schema.columns WHERE table_name = 'trip'", nativeQuery = true)
	List<String> getDriverColumnNames();
}
