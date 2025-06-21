package com.smartFleetManagementSystem.TrackingService.TripController;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartFleetManagementSystem.TrackingService.DTO.TrackingRecord;
import com.smartFleetManagementSystem.TrackingService.TrackingService.TrackingService;

@RestController
@RequestMapping("/tracking")
public class TrackingController {

    
    private final TrackingService trackingService;
    public TrackingController(TrackingService trackingService) {
    	this.trackingService=trackingService;
    }

    @PostMapping("/addLocation")
    public ResponseEntity<TrackingRecord> logLocation(@RequestBody TrackingRecord record) {
        return new ResponseEntity<>(trackingService.saveLocation(record), HttpStatus.CREATED);
    }

    @GetMapping("/trip/{tripId}")
    public ResponseEntity<List<TrackingRecord>> getTripHistory(@PathVariable Long tripId) {
        return ResponseEntity.ok(trackingService.getTripTracking(tripId));
    }

    @GetMapping("/vehicle/{vehicleId}/latest")
    public ResponseEntity<TrackingRecord> getLatestVehicleLocation(@PathVariable Long vehicleId) {
        return trackingService.getLatestVehicleLocation(vehicleId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
