package com.smartFleetManagementSystem.NotificationService.TrackingService;
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

}
