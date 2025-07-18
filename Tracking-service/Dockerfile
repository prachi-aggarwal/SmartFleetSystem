# Stage 1: Build the application using Maven
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

# Copy all project files into the container
COPY . .

# Build the JAR file (skip tests for faster builds)
RUN mvn clean package -DskipTests

# Stage 2: Use slim JDK for running the app
FROM openjdk:21-jdk-slim

WORKDIR /app

# Copy the JAR file from the build container
COPY --from=build /app/target/*.jar TrackingService-0.0.1-SNAPSHOT.jar

# Expose the port your service listens on
EXPOSE 8083

# Run the JAR
ENTRYPOINT ["java", "-jar", "TrackingService-0.0.1-SNAPSHOT.jar"]
