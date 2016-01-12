[![Build Status](https://travis-ci.org/sbstnmsch/nginx-errors.svg?branch=master)](https://travis-ci.org/sbstnmsch/nginx-errors)

# Nginx error pages

Some posh custom error pages for use with nginx.

## Install
```
$ npm install
$ grunt
$ copy dist/*.html /usr/share/nginx/custom-errors/
$ copy dist/custom-errors.conf /etc/nginx/
```
Now, for each virtual host, add:
```
include /etc/nginx/custom-errors*.conf
```
Reload nginx and you're done.

## Examples
Hit http://sebastian-misch.de/non-existent-bla-bla-file to get a 404.

Hit http://sebastian-misch.de with a good old Internet Explorer 8 to
test the vintage browser detection.

## Image credits

### Ghost

This icon is licensed as Creative Commons – Attribution (CC BY 3.0)

Source: http://thenounproject.com/term/ghost/120580/

Created by Andres Flores

Commerce, CA, US 2015

Waka Waka

### Tape

This icon is licensed as Creative Commons – Attribution (CC BY 3.0)

Source: http://thenounproject.com/term/cassette/922/

Created by Mathies Janssen

Hamburg, DE 2011
