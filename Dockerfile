# Imagen base ligera
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias primero para aprovechar la caché
COPY package*.json ./

# Instalar solo dependencias necesarias (modo producción)
RUN npm install --omit=dev

# Copiar el resto del código del proyecto
COPY --chown=node:node . .

# Cambiar a usuario no root
USER node

# Exponer el puerto 3000
EXPOSE 3000

# Comando por defecto para ejecutar la app
CMD ["npm", "start"]

