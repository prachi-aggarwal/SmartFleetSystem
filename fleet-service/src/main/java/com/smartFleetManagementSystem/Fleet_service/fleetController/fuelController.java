package com.smartFleetManagementSystem.Fleet_service.fleetController;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartFleetManagementSystem.Fleet_service.DTO.FuelLog;
import com.smartFleetManagementSystem.Fleet_service.fleetService.fuelService;

@RestController
@RequestMapping("fuel")
public class fuelController {
 private final fuelService fuelService;
 public fuelController(fuelService fuelService) {
	 this.fuelService=fuelService;
 }
 @GetMapping("/{id}")
	public ResponseEntity<List<FuelLog>> getFuelLogById(@PathVariable Long id) {
		
		List<FuelLog> FuelLogs=	fuelService.getFuelLogById(id);
 		return ResponseEntity.ok(FuelLogs);
	}
}
