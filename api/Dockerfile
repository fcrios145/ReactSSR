#FROM python:3.7.4-alpine
#MAINTAINER FranRios
#
#ENV PYTHONUNBEFFERED 1
#
#RUN apk update \
#    && apk add gcc \
#    && apk add libpq postgresql-dev \
#    && apk add build-base \
#    && apk add jpeg-dev \
#    && apk add zlib-dev
#
#COPY ./requirements.txt /requirements.txt
#RUN pip install -r /requirements.txt



ARG PYTHON_VERSION=3.7.0-alpine3.8

FROM python:${PYTHON_VERSION} as builder
ENV PYTHONUNBUFFERED 1
RUN apk add --no-cache \
            --upgrade \
            --repository http://dl-cdn.alpinelinux.org/alpine/edge/main \
        alpine-sdk \
        postgresql-dev

WORKDIR /wheels
COPY ./requirements.txt /wheels/requirements.txt
RUN pip install -U pip \
        && pip wheel -r ./requirements.txt


FROM python:${PYTHON_VERSION}
ENV PYTHONUNBUFFERED=1

RUN apk add --no-cache \
            --upgrade \
            --repository http://dl-cdn.alpinelinux.org/alpine/edge/main \
        gettext \
        libpq \
        postgresql-client \
    && apk add --no-cache \
               --upgrade \
               --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing \
    && rm -rf /var/cache/apk/*

COPY --from=builder /wheels /wheels
RUN pip install -U pip \
        && pip install --no-cache-dir \
                       -r /wheels/requirements.txt \
                       -f /wheels \
        && rm -rf /wheels

# RUN mkdir /fransonal_project
WORKDIR /usr/src/app
COPY ./api_project /usr/src/app

RUN adduser -D api_user
USER api_user