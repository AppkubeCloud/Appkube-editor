# Create image based on Ubuntu 22.04
FROM ubuntu:22.04

# Create directories for data and public assets
RUN mkdir -p /app/data /app/public/build /app/conf/provisioning

# Set working directory
WORKDIR /app

# Define build artifacts and configuration files
ARG ARTIFACT_NAME1=bin/linux-amd64/grafana-server
ARG ARTIFACT_NAME2=bin/linux-amd64/grafana-cli
ARG ARTIFACT_NAME3=bin/linux-amd64/grafana
ARG ARTIFACT_NAME4=data
ARG ARTIFACT_NAME5=public
ARG CONF_FILE1=conf/defaults.ini
ARG CONF_FILE2=conf/provisioning

# Copy build artifacts and configuration files into the Docker image
COPY ${ARTIFACT_NAME1} /app/
COPY ${ARTIFACT_NAME2} /app/
COPY ${ARTIFACT_NAME3} /app/
COPY ${ARTIFACT_NAME4} /app/data/
COPY ${ARTIFACT_NAME5} /app/public/
COPY ${CONF_FILE1} /app/conf/
COPY ${CONF_FILE2} /app/conf/provisioning/

# Expose the port for the service
EXPOSE 3000

# Set the entry point to start the service
ENTRYPOINT ["/app/grafana-server"]
