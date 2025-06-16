# Dockerfile
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto que usa React
EXPOSE 3000

# Correr la app
CMD ["npm", "run", "dev"]
