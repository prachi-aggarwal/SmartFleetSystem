package com.smartFleetManagementSystem.Fleet_service.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.smartFleetManagementSystem.Fleet_service.DTO.Vehicle;



@Repository
public interface vehicleRepository extends JpaRepository<Vehicle, Long> {
  // List<Vehicle> findAll();
	@Query(value = "SELECT column_name FROM information_schema.columns WHERE table_name = 'vehicle'", nativeQuery = true)
	List<String> getVehicleColumnNames();

}
