# Stage 1: Build the Spring Boot app using Maven
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

# Copy the entire project
COPY . .

# Build the JAR, skipping tests for faster CI/CD
RUN mvn clean package -DskipTests

# Stage 2: Run the built app with OpenJDK
FROM openjdk:21-jdk-slim

WORKDIR /app

# Copy only the built JAR from the previous stage
COPY --from=build /app/target/*.jar TripService-0.0.1-SNAPSHOT.jar

# Expose the port your service runs on
EXPOSE 8082

# Add a startup delay and run the service
CMD sh -c "sleep 15 && java -jar TripService-0.0.1-SNAPSHOT.jar"
