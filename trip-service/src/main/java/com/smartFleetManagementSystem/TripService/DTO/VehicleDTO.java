package com.smartFleetManagementSystem.TripService.DTO;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehicleDTO {
    private Long id;
    private boolean active;
    private String plateNumber; // or whatever is needed
}
