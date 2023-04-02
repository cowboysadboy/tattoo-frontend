# Определяем исходный образ
FROM nginx:alpine

# Устанавливаем рабочую директорию
WORKDIR /usr/share/nginx/html

# Удаляем стандартный index.html
RUN rm -rf ./*

# Копируем файлы из директории "dist" в контейнер
COPY ./dist /usr/share/nginx/html

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]