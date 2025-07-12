# Use OpenJDK 17 slim image as base
FROM openjdk:21-jdk-slim


# Create a directory inside the container
WORKDIR /app

# Copy the built JAR file from your local machine into the container
COPY  target/*.jar APIgateway-0.0.1-SNAPSHOT.jar

# Expose the port the app runs on (adjust per service if needed)
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "APIgateway-0.0.1-SNAPSHOT.jar"]
