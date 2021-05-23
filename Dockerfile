FROM php:7.4-fpm

# establecer directorio de trabajo
WORKDIR /var/www/html

# Instalar dependencias
RUN apt-get update && apt-get install -y libmcrypt-dev --no-install-recommends
RUN apt-get install -y default-mysql-client --no-install-recommends
RUN apt-get install -y libmagickwand-dev --no-install-recommends
RUN apt-get update -y && apt-get install -y openssl zip unzip git
RUN pecl install imagick
RUN docker-php-ext-enable imagick
RUN docker-php-ext-install pdo_mysql

# limpiar cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Instalar composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# añadir usuario para la aplicacion laravel
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# copiar el contenido del directorio de la aplicacion existente
COPY . /var/www/html

#  copiar  aplicacion y establecer permisos
COPY --chown=www:www . /var/www/html

# cambiar usuario actual a www
USER www

# abir puerto 9000 y empezar proceso php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
