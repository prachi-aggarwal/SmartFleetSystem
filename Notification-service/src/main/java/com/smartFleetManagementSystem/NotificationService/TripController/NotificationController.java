package com.smartFleetManagementSystem.NotificationService.TripController;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smartFleetManagementSystem.NotificationService.DTO.Notification;
import com.smartFleetManagementSystem.NotificationService.TrackingService.NotificationService;

@RestController
@RequestMapping("/Notifications")
public class NotificationController {

    
    private final NotificationService notificationService;
    public NotificationController(NotificationService notificationService) {
    	this.notificationService=notificationService;
    }
    @GetMapping("/unread")
    public ResponseEntity<List<Notification>> getUnreadByRecipient(
        @RequestParam String recipientType,
        @RequestParam Long recipientId
    ) {
        return ResponseEntity.ok(notificationService.getUnreadByRecipient(recipientType, recipientId));
    }

}
