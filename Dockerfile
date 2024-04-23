# Create image based on Ubuntu 22.04
FROM ubuntu:22.04

RUN mkdir /app
WORKDIR /app
ARG ARTIFACT_NAME1=bin/linux-amd64/grafana-server
ARG ARTIFACT_NAME2=bin/linux-amd64/grafana-cli
ARG ARTIFACT_NAME3=bin/linux-amd64/grafana
ARG ARTIFACT_NAME5=public/build
RUN mkdir -p /app/data
RUN mkdir -p /app/public/build
ARG ARTIFACT_NAME4= data
ARG CONF_FILE1=conf/defaults.ini
ARG CONF_FILE2=conf/provisioning
COPY ${ARTIFACT_NAME1} /app/
COPY ${ARTIFACT_NAME2} /app/
COPY ${ARTIFACT_NAME3} /app/
COPY ${ARTIFACT_NAME4}/ /app/data
COPY ${ARTIFACT_NAME5}/ /app/public/build
RUN mkdir /app/conf
RUN mkdir -p /app/conf/provisioning
COPY ${CONF_FILE1} /app/conf
COPY ${CONF_FILE2}/ /app/conf/provisioning
EXPOSE 3000
ENTRYPOINT [ "/app/grafana-server" ]