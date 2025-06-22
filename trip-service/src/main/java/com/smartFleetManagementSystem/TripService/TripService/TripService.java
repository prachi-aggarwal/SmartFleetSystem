package com.smartFleetManagementSystem.TripService.TripService;
import java.time.LocalDateTime;
import java.util.*;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.server.ResponseStatusException;

import com.smartFleetManagementSystem.TripService.DTO.DriverDTO;
import com.smartFleetManagementSystem.TripService.DTO.NotificationDTO;
import com.smartFleetManagementSystem.TripService.DTO.Trip;
import com.smartFleetManagementSystem.TripService.DTO.VehicleDTO;
import com.smartFleetManagementSystem.TripService.Repository.TripRepository;
import com.smartFleetManagementSystem.TripService.TripStatus.TripStatus;
import com.smartFleetManagementSystem.TripService.client.DriverClient;
import com.smartFleetManagementSystem.TripService.client.FleetClient;
import com.smartFleetManagementSystem.TripService.client.NotificationClient;

import feign.FeignException;
import lombok.RequiredArgsConstructor;



@Service
@RequiredArgsConstructor
public class TripService {

	private final FleetClient fleetClient;
    private final DriverClient driverClient;
    private final NotificationClient notificationClient;

    private final TripRepository tripRepository;
  
    public Trip createTrip(Trip trip) {
    	try {
    	VehicleDTO vehicle=fleetClient.getFleetById(trip.getVehicleId());
    	}
    	catch (FeignException.InternalServerError e) {
    		throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Vehicle not available");
	
		}
    	try {
       	 DriverDTO driver = driverClient.getDriver(trip.getDriverId());

		} catch (FeignException.InternalServerError  e) {
       	 throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Vehicle not available");
		}
        
        trip.setStatus(TripStatus.PLANNED);
        trip.setStartTime(LocalDateTime.now());
       Trip saved= tripRepository.save(trip);
        NotificationDTO notification = new NotificationDTO(
                "DRIVER",
                trip.getDriverId(),
                "New trip assigned: #" + saved.getId()
        );
        notificationClient.sendNotification(notification);

        return saved;
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

