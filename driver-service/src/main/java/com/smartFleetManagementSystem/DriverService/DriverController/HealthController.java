package com.smartFleetManagementSystem.DriverService.DriverController;



import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
    @GetMapping("/")
    public String home() {
        return "Driver Service is running!";
    }

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }
}
