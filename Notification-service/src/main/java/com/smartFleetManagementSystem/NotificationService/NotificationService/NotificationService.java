package com.smartFleetManagementSystem.NotificationService.NotificationService;
import java.time.LocalDateTime;
import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.smartFleetManagementSystem.NotificationService.DTO.Notification;
import com.smartFleetManagementSystem.NotificationService.Repository.NotificationRepository;
import com.smartFleetManagementSystem.NotificationService.event.NotificationEvent;


@Service
public class NotificationService {

    private final NotificationRepository notificationRepository;
    public NotificationService(NotificationRepository notificationRepository) {
    	this.notificationRepository=notificationRepository;
    }
    public List<Notification> getUnreadByRecipient() {
      List<Notification> unreadNotifications=  notificationRepository.findAll();
        
        unreadNotifications.forEach(n -> n.setRead(true));
        notificationRepository.saveAll(unreadNotifications);

        return unreadNotifications;
    }
    public Notification createNotification(Notification dto) {
        Notification notification = new Notification();
        notification.setRecipientType(dto.getRecipientType());
        notification.setRecipientId(dto.getRecipientId());
        notification.setMessage(dto.getMessage());
        notification.setRead(false);
        notification.setTimestamp(LocalDateTime.now());

        return notificationRepository.save(notification);
    }
//    @KafkaListener(topics = "notification-topic", groupId = "smart-fleet")
//    public void consume(NotificationEvent event) {
//        Notification notification = new Notification();
//        notification.setRecipientType(event.getRecipientType());
//        notification.setRecipientId(Long.parseLong(event.getRecipientId()));
//        notification.setMessage(event.getMessage());
//        notification.setTimestamp(event.getTimestamp());
//        notification.setRead(false);
//        notificationRepository.save(notification);
//    }
    
    public List<Notification> getAll() {
        return notificationRepository.findAll();
    }
	


}
