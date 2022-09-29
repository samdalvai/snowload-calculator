FROM maven:3.5-jdk-8-alpine

WORKDIR .

COPY backend/pom.xml ./
COPY backend/src ./src

CMD mvn spring-boot:run