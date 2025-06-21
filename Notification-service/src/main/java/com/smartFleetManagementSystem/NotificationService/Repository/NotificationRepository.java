package com.smartFleetManagementSystem.NotificationService.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartFleetManagementSystem.NotificationService.DTO.Notification;



@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByRecipientTypeAndRecipientIdAndReadFalse(String recipientType, Long recipientId);
}
