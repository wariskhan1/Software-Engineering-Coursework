# Create the image from mysql base
FROM mysql

# Set environment MYSQL_ROOT_PASSWORD to 123
ENV MYSQL_ROOT_PASSWORD 123
# Copy the database backup to docker-entrypoint-initdb.d
ADD sql_backup.sql /docker-entrypoint-initdb.d

# Expose port 3306 of the image
EXPOSE 3306
