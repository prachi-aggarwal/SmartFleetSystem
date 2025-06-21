package com.smartFleetManagementSystem.Fleet_service.DTO;
import java.time.LocalDate;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "maintenance_record")
public class MaintenanceRecord {
	
	
	    @Id @GeneratedValue
	    private Long id;
	    private String description;
	    private LocalDate maintenanceDate;
	    private Double cost;

	    @ManyToOne
	    @JsonBackReference
	    private Vehicle vehicle;
	

}
