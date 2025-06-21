package com.smartFleetManagementSystem.TrackingService.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartFleetManagementSystem.TrackingService.DTO.TrackingRecord;



@Repository
public interface TrackingRepository extends JpaRepository<TrackingRecord, Long> {
    List<TrackingRecord> findByTripId(Long tripId);
    List<TrackingRecord> findByVehicleIdOrderByTimestampDesc(Long vehicleId);
}
