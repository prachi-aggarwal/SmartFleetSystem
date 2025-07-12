# Use OpenJDK 21 slim image as base
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy built JAR into container
COPY target/*.jar TripService-0.0.1-SNAPSHOT.jar

# Expose the application's port
EXPOSE 8082

# Add a startup delay to wait for DB
CMD sh -c "sleep 15 && java -jar TripService-0.0.1-SNAPSHOT.jar"
