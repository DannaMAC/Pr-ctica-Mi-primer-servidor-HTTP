# Práctica | Mi primer servidor HTTP

Este proyecto implementa un servidor HTTP utilizando Node.js. Permite servir archivos estáticos desde una carpeta `WWW` y maneja solicitudes de registro enviadas mediante el método POST.

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas. 

### Prerrequisitos

Necesitarás tener instalado Node.js en tu máquina. Puedes descargarlo e instalarlo desde [Node.js](https://nodejs.org/).

### Instalación

Una serie de pasos para tener un entorno de desarrollo en funcionamiento:

1. Clona el repositorio del proyecto:
```
git clone https://github.com/DannaMAC/Practica-Mi-primer-servidor-HTTP
```
2. Navega al directorio del proyecto:
```
cd tu_proyecto
```
3. Instala las dependencias necesarias (si las hubiera, aunque este proyecto no requiere dependencias adicionales):
```
npm install
```

### Ejecución

Para iniciar el servidor HTTP:

1. Ejecuta el siguiente comando en la raíz del proyecto:
node server.js
2. Abre tu navegador web y navega a `http://localhost:4444` para ver la página principal.

## Probando el Proyecto

### Pruebas Manuales

Para probar el manejo de formularios de registro:

1. Envía una solicitud POST a `http://localhost:4444/registro` con algunos datos de formulario. 

### Pruebas Automáticas

(No se han definido pruebas automatizadas para este proyecto, pero podrían añadirse en el futuro usando frameworks de pruebas como Mocha o Jest).

## Despliegue

Para desplegar este servidor en un sistema en vivo:

1. Asegúrate de tener Node.js instalado en el servidor de producción.
2. Sigue los pasos de instalación descritos anteriormente.
3. Configura el servidor para que el script se ejecute en segundo plano


## Construido con

* [Node.js](https://nodejs.org/) - Entorno de ejecución de JavaScript

## Versionado

Usamos [SemVer](http://semver.org/) para el versionado. Para las versiones disponibles, mira los [tags en este repositorio](https://github.com/your/project/tags). 

## Autores

* **Danna Corral** - *358147* - [DannaMAC](https://github.com/DannaMAC)

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Agradecimientos

* Accesor: Luis Ramirez 

