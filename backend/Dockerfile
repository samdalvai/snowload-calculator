FROM maven:3.5-jdk-8-alpine

WORKDIR .

COPY pom.xml ./
COPY src ./src

CMD mvn spring-boot:run