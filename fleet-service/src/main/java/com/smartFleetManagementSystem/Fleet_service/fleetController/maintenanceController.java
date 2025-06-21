package com.smartFleetManagementSystem.Fleet_service.fleetController;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartFleetManagementSystem.Fleet_service.DTO.FuelLog;
import com.smartFleetManagementSystem.Fleet_service.DTO.MaintenanceRecord;
import com.smartFleetManagementSystem.Fleet_service.fleetService.maintenaceService;

@RestController
@RequestMapping("maintenance")
public class maintenanceController {

	private final maintenaceService maintenaceService;
	public maintenanceController(maintenaceService maintenaceService) {
		this.maintenaceService=maintenaceService;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity< List<MaintenanceRecord> > getMaintenanceById(@PathVariable Long id) {
		
		 List<MaintenanceRecord>  maintenanceRecords=maintenaceService.getMaintenanceRecordsById(id);
 		return ResponseEntity.ok(maintenanceRecords);
	}
	
}
