package com.smartFleetManagementSystem.TripService.TripService;
import java.time.LocalDateTime;
import java.util.*;
import org.springframework.stereotype.Service;

import com.smartFleetManagementSystem.TripService.DTO.Trip;
import com.smartFleetManagementSystem.TripService.Repository.TripRepository;
import com.smartFleetManagementSystem.TripService.TripStatus.TripStatus;



@Service
public class TripService {

   
    private final TripRepository tripRepository;
    public TripService(TripRepository tripRepository) {
    	this.tripRepository=tripRepository;
    }

    public Trip createTrip(Trip trip) {
        trip.setStatus(TripStatus.PLANNED);
        trip.setStartTime(LocalDateTime.now());
        return tripRepository.save(trip);
    }

    public Trip updateTripStatus(Long id, TripStatus status) {
        Trip trip = tripRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Trip not found"));
        trip.setStatus(status);
        if (status == TripStatus.COMPLETED || status == TripStatus.CANCELLED) {
            trip.setEndTime(LocalDateTime.now());
        }
        return tripRepository.save(trip);
    }

    public List<Trip> getAllTrips() {
        return tripRepository.findAll();
    }

    public Trip getTripById(Long id) {
        return tripRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Trip not found"));
    }
}

