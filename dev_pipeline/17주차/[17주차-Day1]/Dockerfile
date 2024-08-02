FROM httpd:latest

RUN echo "<html><body><h1>Docker build test</h1></body></html>" > /usr/local/apache2/htdocs/index.html

ENTRYPOINT /usr/local/bin/httpd-foreground