# Usa una imagen base de Node.js con Debian (no Alpine)
FROM node:18-bullseye

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos de manifiesto e instala las dependencias
COPY package.json package-lock.json ./

# Limpieza previa para evitar problemas de cache
RUN rm -rf node_modules package-lock.json && npm install

# Copia el resto del código de tu aplicación
COPY . .

# Expón el puerto que usa Vite
EXPOSE 5173

# Comando para iniciar la aplicación en desarrollo
CMD ["npm", "run", "dev"]
