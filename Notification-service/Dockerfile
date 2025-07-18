# Stage 1: Build the application using Maven
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

# Copy all project files
COPY . .

# Build the JAR (skipping tests for faster CI)
RUN mvn clean package -DskipTests

# Stage 2: Use a lightweight JDK image for runtime
FROM openjdk:21-jdk-slim

WORKDIR /app

# Copy the built JAR from the Maven container
COPY --from=build /app/target/*.jar NotificationService-0.0.1-SNAPSHOT.jar

# Expose the correct port for the Notification Service
EXPOSE 8084

# Run the Notification Service JAR
ENTRYPOINT ["java", "-jar", "NotificationService-0.0.1-SNAPSHOT.jar"]
