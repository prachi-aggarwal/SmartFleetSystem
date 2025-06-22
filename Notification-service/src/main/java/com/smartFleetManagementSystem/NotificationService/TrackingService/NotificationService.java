package com.smartFleetManagementSystem.NotificationService.TrackingService;
import java.time.LocalDateTime;
import java.util.*;
import org.springframework.stereotype.Service;

import com.smartFleetManagementSystem.NotificationService.DTO.Notification;
import com.smartFleetManagementSystem.NotificationService.Repository.NotificationRepository;


@Service
public class NotificationService {

    private final NotificationRepository notificationRepository;
    public NotificationService(NotificationRepository notificationRepository) {
    	this.notificationRepository=notificationRepository;
    }
    public List<Notification> getUnreadByRecipient(String type, Long id) {
      List<Notification> unreadNotifications=  notificationRepository.findByRecipientTypeAndRecipientIdAndReadFalse(type, id);
        
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


}
