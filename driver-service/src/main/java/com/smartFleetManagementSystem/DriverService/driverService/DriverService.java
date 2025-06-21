package com.smartFleetManagementSystem.DriverService.driverService;
import java.util.*;
import org.springframework.stereotype.Service;

import com.smartFleetManagementSystem.DriverService.DTO.Driver;
import com.smartFleetManagementSystem.DriverService.Repository.DriverRepository;



@Service
public class DriverService {

    
    private final DriverRepository driverRepository;
    public DriverService(DriverRepository driverRepository) {
    	this.driverRepository=driverRepository;
    }

    public Driver addDriver(Driver driver) {
        return driverRepository.save(driver);
    }

    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

    public Driver getDriverById(Long id) {
        return driverRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Driver not found with id: " + id));
    }

    public void deleteDriver(Long id) {
        driverRepository.deleteById(id);
    }

    public Driver updateDriver(Long id, Driver updated) {
        Driver existing = getDriverById(id);
        existing.setName(updated.getName());
        existing.setLicenseNumber(updated.getLicenseNumber());
        existing.setPhoneNumber(updated.getPhoneNumber());
        existing.setAvailable(updated.getAvailable());
        return driverRepository.save(existing);
    }
}
