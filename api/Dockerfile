FROM python:3.7.4-alpine
MAINTAINER FranRios

ENV PYTHONUNBEFFERED 1

RUN apk update \
    && apk add gcc \
    && apk add libpq postgresql-dev \
    && apk add build-base \
    && apk add jpeg-dev \
    && apk add zlib-dev

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

# RUN mkdir /fransonal_project
WORKDIR /usr/src/app
COPY ./api_project /usr/src/app

RUN adduser -D api_user
USER api_user