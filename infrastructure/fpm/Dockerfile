FROM realpage/php:7.0-fpm
LABEL application="laravel" \
      com.realpage.php.version="7.0" \
      com.realpage.php.type="fpm"

# Copy the application files to the container
ADD . /var/www/html

WORKDIR /var/www/html

# Install Composer dependencies
RUN apt-get update && apt-get install -y git zip unzip \
    && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Create SymLink for Legacy compatibility
RUN ln -s /usr/bin/nodejs /usr/bin/node

# Install Composer
RUN php /var/www/html/infrastructure/install_composer.php

# Ownership of the app dir for www-data
RUN chown -R www-data:www-data /var/www/html

# Run composer as www-data
# USER www-data

# parallel dependency installation
RUN composer global require hirak/prestissimo \
    # production-ready dependencies
    && composer install  --no-interaction --optimize-autoloader --no-dev --prefer-dist

# Switch back to root
# USER root

# Remove composer installation dependencies
RUN apt-get remove git zip unzip