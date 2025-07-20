package com.smartFleetManagementSystem.NotificationService.TripController;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smartFleetManagementSystem.NotificationService.DTO.Notification;
import com.smartFleetManagementSystem.NotificationService.NotificationService.NotificationService;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    
    private final NotificationService notificationService;
    public NotificationController(NotificationService notificationService) {
    	this.notificationService=notificationService;
    }
    @GetMapping("/unread")
    public ResponseEntity<List<Notification>> getUnreadByRecipient() {
        return ResponseEntity.ok(notificationService.getUnreadByRecipient());
    }
    @PostMapping("sendNotification")
    public ResponseEntity<Notification> sendNotification(
        @RequestBody Notification notificationDTO) {
        Notification saved = notificationService.createNotification(notificationDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    } 
    @GetMapping("/all")
    public ResponseEntity<List<Notification>> getAll() {
        return ResponseEntity.ok(notificationService.getAll());
    }

}
