package com.smartFleetManagementSystem.TripService.DTO;

import java.time.LocalDateTime;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.smartFleetManagementSystem.TripService.TripStatus.TripStatus;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Table(name = "trip")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long driverId;   // from driver-service
    private Long vehicleId;  // from fleet-service

    private String origin;
    private String destination;
    
    private LocalDateTime startTime;
    private LocalDateTime endTime;

    @Enumerated(EnumType.STRING)
    private TripStatus status; // PLANNED, ONGOING, COMPLETED, CANCELLED
}
