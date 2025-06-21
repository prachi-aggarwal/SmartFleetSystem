package com.smartFleetManagementSystem.Fleet_service.DTO;

import java.util.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "vehicle")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vehicle {
	  @Id @GeneratedValue
	    @Column(name="id")
	    private Long id;
	    @Column(name="plate_number")
	    private String plateNumber;
	    @Column(name="model")
	    private String model;
	    @Column(name="capacity")
	    private int capacity;
	    @Column(name="active")
	    private boolean active;
	    
	    @OneToMany(mappedBy = "vehicle", cascade = CascadeType.ALL)
	    @JsonManagedReference
	    private List<FuelLog> fuelLogs;

	    @OneToMany(mappedBy = "vehicle", cascade = CascadeType.ALL)
	    private List<MaintenanceRecord> maintenanceRecords;
	    @Override
	    public String toString() {
	        return "Vehicle{" +
	                "id=" + id +
	                ", plateNumber='" + plateNumber + '\'' +
	                ", model='" + model + '\'' +
	                ", capacity=" + capacity +
	                ", active=" + active +
	                '}';
	    }

}
