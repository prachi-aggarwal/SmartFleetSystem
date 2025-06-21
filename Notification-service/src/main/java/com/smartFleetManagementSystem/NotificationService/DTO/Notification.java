package com.smartFleetManagementSystem.NotificationService.DTO;

import java.time.LocalDateTime;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "notifications")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type; // e.g., TRIP_UPDATE, MAINTENANCE
    private String message;

    private String recipientType; // e.g., DRIVER, ADMIN, DISPATCHER
    private Long recipientId;

    private Boolean read = false;
    private LocalDateTime timestamp;
}
