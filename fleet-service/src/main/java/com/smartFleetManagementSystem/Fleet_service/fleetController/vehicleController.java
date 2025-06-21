package com.smartFleetManagementSystem.Fleet_service.fleetController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartFleetManagementSystem.Fleet_service.DTO.FuelLog;
import com.smartFleetManagementSystem.Fleet_service.DTO.Vehicle;
import com.smartFleetManagementSystem.Fleet_service.fleetService.fuelService;
import com.smartFleetManagementSystem.Fleet_service.fleetService.vehicleService;

@RestController
@RequestMapping("fleet-service")
public class vehicleController {
	
	private final vehicleService vehicleService;
	public vehicleController(vehicleService fleetService) {
		this.vehicleService=fleetService;
	}
	@GetMapping("allFleet")
	public ResponseEntity<List<Vehicle>> getAllFleetString() {
		
    List<Vehicle> vehicles=	vehicleService.getAllFleet();
    		return ResponseEntity.ok(vehicles);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Vehicle> getFleetById(@PathVariable Long id) {
		
    Vehicle vehicles=	vehicleService.getFleetById(id);
    		return ResponseEntity.ok(vehicles);
	}
	@PostMapping("add")
    public ResponseEntity<Vehicle> createVehicle(@RequestBody Vehicle vehicle) {
        return new ResponseEntity<>(vehicleService.addVehicle(vehicle), HttpStatus.CREATED);
    }


}
