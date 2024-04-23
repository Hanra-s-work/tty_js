FROM httpd:2.4.59
ENV WEB_PATH /usr/local/apache2/htdocs
COPY . $WEB_PATH
RUN mkdir -p $WEB_PATH
WORKDIR $WEB_PATH
EXPOSE 8080
