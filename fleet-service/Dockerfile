# Stage 1: Build the application using Maven
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

# Copy all project files
COPY . .

# Package the application (skip tests for faster build)
RUN mvn clean package -DskipTests

# Stage 2: Use a slim JDK image to run the built jar
FROM openjdk:21-jdk-slim

WORKDIR /app

# Copy the built JAR from the Maven container
COPY --from=build /app/target/*.jar fleet-service-0.0.1-SNAPSHOT.jar

# Expose service port (adjusted for fleet-service)
EXPOSE 8085

# Run the application
ENTRYPOINT ["java", "-jar", "fleet-service-0.0.1-SNAPSHOT.jar"]
