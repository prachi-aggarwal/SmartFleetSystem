package com.smartFleetManagementSystem.TripService.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartFleetManagementSystem.TripService.DTO.Trip;




@Repository
public interface TripRepository extends JpaRepository<Trip, Long> {
}
