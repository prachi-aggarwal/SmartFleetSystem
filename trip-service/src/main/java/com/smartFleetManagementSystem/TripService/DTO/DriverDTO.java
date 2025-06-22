package com.smartFleetManagementSystem.TripService.DTO;

import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor
public class DriverDTO {
    private Long id;
    private String name;
    private boolean available;
}
