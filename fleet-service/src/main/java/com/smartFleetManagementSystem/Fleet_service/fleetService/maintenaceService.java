package com.smartFleetManagementSystem.Fleet_service.fleetService;

import java.util.List;

import org.springframework.stereotype.Service;

import com.smartFleetManagementSystem.Fleet_service.DTO.MaintenanceRecord;
import com.smartFleetManagementSystem.Fleet_service.Repository.maitenanceRepository;

@Service
public class maintenaceService {
	
private final maitenanceRepository maitenanceRepository;
public maintenaceService(maitenanceRepository maitenanceRepository) {
	this.maitenanceRepository=maitenanceRepository;
}
 public List<MaintenanceRecord> getMaintenanceRecordsById(Long Id){
	 List<MaintenanceRecord> maintenanceRecords=maitenanceRepository.findByVehicleId(Id);
	 return  maintenanceRecords;
 }

}
