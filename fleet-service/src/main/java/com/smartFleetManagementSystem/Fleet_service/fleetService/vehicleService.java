package com.smartFleetManagementSystem.Fleet_service.fleetService;
import java.util.*;
import org.springframework.stereotype.Service;

import com.smartFleetManagementSystem.Fleet_service.DTO.FuelLog;
import com.smartFleetManagementSystem.Fleet_service.DTO.Vehicle;
import com.smartFleetManagementSystem.Fleet_service.Repository.vehicleRepository;

@Service
public class vehicleService {
    private final vehicleRepository vehicleRepository;
    public vehicleService(vehicleRepository vehicleRepository) {
    	this.vehicleRepository=vehicleRepository;
    }
    public List<Vehicle> getAllFleet() {
    	List<Vehicle> vehicles=vehicleRepository.findAll();
    	//System.out.println("vehicles"+vehicles);
    	vehicles.forEach(System.out::println);
    	return vehicles;
    }
	public Vehicle getFleetById(Long id) {
		// TODO Auto-generated method stub
	 Vehicle vehicles= vehicleRepository.findById(id).orElseThrow(()->new RuntimeException("id not found"));
		return vehicles;
	}
	public Vehicle addVehicle(Vehicle vehicle) {
		// TODO Auto-generated method stub
		return vehicleRepository.save(vehicle) ;
	}
	
}
