FROM python:3 
# # used to be 3.4 but 3.4 is deprecated and limits the range of available requirements that can be installed. 
ENV PYTHONUNBUFFERED 1

ARG DJANGO_ALLOWED_HOSTS
ARG DJANGO_SECRET_KEY
ARG DJANGO_CORS_ORIGIN_WHITELIST

ENV DJANGO_ALLOWED_HOSTS $DJANGO_ALLOWED_HOSTS
ENV DJANGO_SECRET_KEY $DJANGO_SECRET_KEY
ENV DJANGO_CORS_ORIGIN_WHITELIST $DJANGO_CORS_ORIGIN_WHITELIST

# RUN apt-get update \
#     && apt-get install -y --no-install-recommends \
#         postgresql-client \
#     && rm -rf /var/lib/apt/lists/*

WORKDIR /app/api
COPY requirements.txt /app/api
RUN pip install -r requirements.txt


# ENV PYTHONUNBUFFERED 1

# ARG DJANGO_ALLOWED_HOSTS
# ARG DJANGO_SECRET_KEY
# ARG DJANGO_CORS_ORIGIN_WHITELIST

# ENV DJANGO_ALLOWED_HOSTS $DJANGO_ALLOWED_HOSTS
# ENV DJANGO_SECRET_KEY $DJANGO_SECRET_KEY
# ENV DJANGO_CORS_ORIGIN_WHITELIST $DJANGO_CORS_ORIGIN_WHITELIST

# RUN mkdir /backend
# WORKDIR /backend
# COPY requirements.txt /backend/
# EXPOSE 8000
# RUN pip install -r requirements.txt
COPY . /app/api/
RUN python manage.py makemigrations
RUN python manage.py migrate

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]