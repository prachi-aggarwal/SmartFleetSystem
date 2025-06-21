package com.smartFleetManagementSystem.TrackingService.TrackingService;
import java.time.LocalDateTime;
import java.util.*;
import org.springframework.stereotype.Service;

import com.smartFleetManagementSystem.TrackingService.DTO.TrackingRecord;
import com.smartFleetManagementSystem.TrackingService.Repository.TrackingRepository;


@Service
public class TrackingService {

    private final TrackingRepository trackingRepository;
    public TrackingService(TrackingRepository trackingRepository) {
    	this.trackingRepository=trackingRepository;
    }

    public TrackingRecord saveLocation(TrackingRecord record) {
        record.setTimestamp(LocalDateTime.now());
        return trackingRepository.save(record);
    }

    public List<TrackingRecord> getTripTracking(Long tripId) {
        return trackingRepository.findByTripId(tripId);
    }

    public Optional<TrackingRecord> getLatestVehicleLocation(Long vehicleId) {
        return trackingRepository.findByVehicleIdOrderByTimestampDesc(vehicleId).stream().findFirst();
    }
}
