# Stage 1: Build the Spring Boot app using Maven
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

# Copy the entire project
COPY . .

# Build the JAR, skipping tests
RUN mvn clean package -DskipTests

# Stage 2: Use OpenJDK 21 slim image to run the app
FROM openjdk:21-jdk-slim

WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/*.jar DriverService-0.0.1-SNAPSHOT.jar

# Expose the service port
EXPOSE 8081

# Run the jar
ENTRYPOINT ["java", "-jar", "DriverService-0.0.1-SNAPSHOT.jar"]
