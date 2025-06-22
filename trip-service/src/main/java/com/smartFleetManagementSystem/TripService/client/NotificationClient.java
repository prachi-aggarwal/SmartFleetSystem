package com.smartFleetManagementSystem.TripService.client;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.smartFleetManagementSystem.TripService.DTO.NotificationDTO;

@FeignClient(name = "notification-service")
public interface NotificationClient {

    @PostMapping("/notifications/sendNotification")
    void sendNotification(@RequestBody NotificationDTO notificationDTO);
}
