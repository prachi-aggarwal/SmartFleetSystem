package com.smartFleetManagementSystem.TrackingService.DTO;

import java.time.LocalDateTime;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "tracking")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TrackingRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long tripId;       // Reference to trip
    private Long vehicleId;    // Redundant but helpful for lookup
    private Double latitude;
    private Double longitude;

    private LocalDateTime timestamp;
}
