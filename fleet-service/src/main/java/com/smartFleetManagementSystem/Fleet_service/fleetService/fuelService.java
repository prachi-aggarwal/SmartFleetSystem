package com.smartFleetManagementSystem.Fleet_service.fleetService;

import java.util.List;

import org.springframework.stereotype.Service;

import com.smartFleetManagementSystem.Fleet_service.DTO.FuelLog;
import com.smartFleetManagementSystem.Fleet_service.Repository.fuelLogRepository;

@Service
public class fuelService {
	private final fuelLogRepository fuelLogRepository;
	public fuelService(fuelLogRepository fuelLogRepository) {
		this.fuelLogRepository=fuelLogRepository;
	}

	public  List<FuelLog> getFuelLogById(Long id) {
		List<FuelLog> FuelLog=fuelLogRepository.findByVehicleId(id);
		return FuelLog;
	}

}
