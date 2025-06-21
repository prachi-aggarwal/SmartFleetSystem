package com.smartFleetManagementSystem.Fleet_service.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartFleetManagementSystem.Fleet_service.DTO.FuelLog;


@Repository
public interface fuelLogRepository extends JpaRepository<FuelLog, Long> {
     List<FuelLog> findByVehicleId(Long VehicleId);
}
