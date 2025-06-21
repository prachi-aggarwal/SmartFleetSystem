package com.smartFleetManagementSystem.Fleet_service.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartFleetManagementSystem.Fleet_service.DTO.MaintenanceRecord;

@Repository
public interface maitenanceRepository extends JpaRepository<MaintenanceRecord, Long> {
List<MaintenanceRecord> findByVehicleId(Long id);
}
