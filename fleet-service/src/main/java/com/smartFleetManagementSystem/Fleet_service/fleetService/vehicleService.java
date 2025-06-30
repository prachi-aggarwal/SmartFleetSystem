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
    public Map<String, Object>  getAllFleet() {
    	List<Vehicle> vehicles=vehicleRepository.findAll();
    	List<String> columnNames=vehicleRepository.getVehicleColumnNames();   	//System.out.println("vehicles"+vehicles);
    	vehicles.forEach(System.out::println);
    	 Map<String, Object> response = new HashMap<>();
    	    response.put("columns", columnNames);
    	    response.put("data", vehicles);
    	    return response;
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
	public Vehicle updateVehicle(Long id, Vehicle updatedVehicle) {
	    Vehicle existingVehicle = vehicleRepository.findById(id)
	        .orElseThrow(() -> new RuntimeException("Vehicle not found with id: " + id));

	    // Update fields manually
	    existingVehicle.setModel(updatedVehicle.getModel());
	    existingVehicle.setPlateNumber(updatedVehicle.getPlateNumber());
	    existingVehicle.setCapacity(updatedVehicle.getCapacity());
	    existingVehicle.setActive(updatedVehicle.isActive());

	    // Save updated entity
	    return vehicleRepository.save(existingVehicle);
	}
	public void deleteVehicleById(Long id) {
        if (!vehicleRepository.existsById(id)) {
            throw new RuntimeException("Vehicle not found with ID: " + id);
        }
        vehicleRepository.deleteById(id);
    }
}
