# Use Maven to build, then switch to JDK to run
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

# Copy all source files
COPY . .

# Build the app (skip tests to save time)
RUN mvn clean package -DskipTests

# Second stage: use slim JDK image to run the built app
FROM openjdk:21-jdk-slim

WORKDIR /app

# Copy built jar from the builder stage
COPY --from=build /app/target/*.jar api-gateway-0.0.1-SNAPSHOT.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "api-gateway-0.0.1-SNAPSHOT.jar"]
