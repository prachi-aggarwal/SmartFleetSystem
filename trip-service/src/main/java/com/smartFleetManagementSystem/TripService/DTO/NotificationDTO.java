package com.smartFleetManagementSystem.TripService.DTO;

import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor
public class NotificationDTO {
    private String recipientType;
    private Long recipientId;
    private String message;
}
