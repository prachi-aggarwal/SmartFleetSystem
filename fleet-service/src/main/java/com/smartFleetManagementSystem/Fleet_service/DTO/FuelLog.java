package com.smartFleetManagementSystem.Fleet_service.DTO;

import java.time.LocalDateTime;
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
@Table(name = "fuel_log")
public class FuelLog {
	 @Id @GeneratedValue
	    private Long id;
	    private LocalDateTime date;
	    private Double liters;
	    private Double cost;

	    @ManyToOne
	    @JsonBackReference
	    private Vehicle vehicle;

}
