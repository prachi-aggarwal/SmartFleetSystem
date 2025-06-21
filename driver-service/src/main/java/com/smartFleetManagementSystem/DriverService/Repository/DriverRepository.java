package com.smartFleetManagementSystem.DriverService.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartFleetManagementSystem.DriverService.DTO.Driver;




@Repository
public interface DriverRepository extends JpaRepository<Driver, Long> {
}
