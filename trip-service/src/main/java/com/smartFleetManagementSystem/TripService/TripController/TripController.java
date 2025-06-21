package com.smartFleetManagementSystem.TripService.TripController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smartFleetManagementSystem.TripService.DTO.Trip;
import com.smartFleetManagementSystem.TripService.TripService.TripService;
import com.smartFleetManagementSystem.TripService.TripStatus.TripStatus;

@RestController
@RequestMapping("/trips")
public class TripController {

    
    private final TripService tripService;
    public TripController(TripService tripService) {
    	this.tripService=tripService;
    }

    @PostMapping("createTrip")
    public ResponseEntity<Trip> createTrip(@RequestBody Trip trip) {
        return new ResponseEntity<>(tripService.createTrip(trip), HttpStatus.CREATED);
    }

    @GetMapping("getAllTrips")
    public ResponseEntity<List<Trip>> getAllTrips() {
        return ResponseEntity.ok(tripService.getAllTrips());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Trip> getTripById(@PathVariable Long id) {
        return ResponseEntity.ok(tripService.getTripById(id));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Trip> updateTripStatus(@PathVariable Long id, @RequestParam TripStatus status) {
        return ResponseEntity.ok(tripService.updateTripStatus(id, status));
    }
}
