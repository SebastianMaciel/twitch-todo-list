# Todo List

Esta es una aplicación de lista de tareas simple construida con React/Typescript, utilizando Material UI. Usando Zustand como gestor de estado, Formik y Yup para la validación de inputs.

## Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/6d9e3df1-f6fc-4bf4-8b39-90ed5dc122fd/deploy-status)](https://app.netlify.com/sites/twitch-todo-app/deploys)
Visitá la app en [https://twitch-todo-app.netlify.app/](https://twitch-todo-app.netlify.app/)

## Características

- Agregar, editar y eliminar tareas.
- Marcar tareas como completadas o pendientes.
- Filtrar tareas por estado.
- Validación de formulario.
- Persistencia de datos en el navegador.

## Extras

- Configuración de la app
- Opción para permitir tareas repetidas
- Descarga de la lista de tareas en formato JSON
- Eliminación del localStorage
- Resumen de tareas en el título de la página

### Requisitos

- Node.js >= 12.0.0
- Yarn >= 1.22.0

### Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/SebastianMaciel/twitch-todo-list.git
cd twitch-todo-list
```

2. Instala las dependencias:

```bash
yarn install
```

### Uso

1. Ejecuta la aplicación en modo de desarrollo:

```bash
yarn dev
```

2. Abre http://localhost:5173 en tu navegador.

### Construcción

Para construir la aplicación, ejecuta:

```bash
yarn build
```

Esto generará una versión optimizada para producción en el directorio `dist`.

### Licencia

Este proyecto está bajo la Licencia MIT.
