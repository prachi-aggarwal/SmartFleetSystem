package com.smartFleetManagementSystem.DriverService.DriverController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartFleetManagementSystem.DriverService.driverService.DriverService;
import com.smartFleetManagementSystem.DriverService.DTO.Driver;


@RestController
@RequestMapping("/drivers")
public class DriverController {

   private final DriverService driverService;
   public DriverController(DriverService driverService) {
	   this.driverService=driverService;
   }
    @PostMapping("addDriver")
    public ResponseEntity<Driver> addDriver(@RequestBody Driver driver) {
        return new ResponseEntity<>(driverService.addDriver(driver), HttpStatus.CREATED);
    }

    @GetMapping("getAllDriver")
    public ResponseEntity<List<Driver>> getAllDrivers() {
        return ResponseEntity.ok(driverService.getAllDrivers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Driver> getDriver(@PathVariable Long id) {
        return ResponseEntity.ok(driverService.getDriverById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Driver> updateDriver(@PathVariable Long id, @RequestBody Driver driver) {
        return ResponseEntity.ok(driverService.updateDriver(id, driver));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDriver(@PathVariable Long id) {
        driverService.deleteDriver(id);
        return ResponseEntity.noContent().build();
    }
}
