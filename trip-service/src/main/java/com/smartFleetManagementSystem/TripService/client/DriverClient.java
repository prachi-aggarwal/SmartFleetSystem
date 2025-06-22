package com.smartFleetManagementSystem.TripService.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.smartFleetManagementSystem.TripService.DTO.DriverDTO;

@FeignClient(name = "driver-service")
public interface DriverClient {

    @GetMapping("/drivers/{id}")
    DriverDTO getDriver(@PathVariable("id") Long id);
}
