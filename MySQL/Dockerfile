# Create the image from mysql base
FROM mysql

ENV MYSQL_USER SE
ENV MYSQL_PASSWORD soft_eng_csw
ENV MYSQL_DATABASE world
# Set environment MYSQL_ROOT_PASSWORD to 123
ENV MYSQL_ROOT_PASSWORD soft_eng_csw
# Copy the database backup to docker-entrypoint-initdb.d
ADD sql_backup.sql /docker-entrypoint-initdb.d

# Expose port 8081 of the image
EXPOSE 8081

###docker exec mysql-phpmyadmin_db_1 /usr/bin/mysqldump -u root --password=foobar world > sql_backup.sql
