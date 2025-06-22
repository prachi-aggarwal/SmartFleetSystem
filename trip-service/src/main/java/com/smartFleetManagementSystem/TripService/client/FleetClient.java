package com.smartFleetManagementSystem.TripService.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.smartFleetManagementSystem.TripService.DTO.VehicleDTO;

@FeignClient("fleet-service")
public interface FleetClient {
	 @GetMapping("/{id}")
	    VehicleDTO getFleetById(@PathVariable("id") Long id);
}
