package com.smartFleetManagementSystem.Fleet_service.fleetController;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
    @GetMapping("/")
    public String home() {
        return "Fleet Service is running!";
    }

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }
}
