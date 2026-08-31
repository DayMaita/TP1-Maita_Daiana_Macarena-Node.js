# Trabajo práctico 01

## Descripción

Este proyecto corresponde al Trabajo Práctico 01 de Fundamentos de Node.js.

El proyecto contiene dos programas. El primero utiliza información del estudiante y de un videojuego para construir una ficha y guardarla automáticamente en un archivo de texto. El segundo demuestra el orden de ejecución del código principal y una tarea programada con `setTimeout`.

## Cómo ejecutar

### Programa 1: ficha del videojuego

Desde la carpeta del proyecto ejecutar:

```bash
node index.js
```

También se puede indicar el nombre del estudiante:

```bash
node index.js Camila
```

Si no se proporciona un nombre, el programa utiliza un nombre alternativo.

### Programa 2: orden del event loop

Ejecutar:

```bash
node orden-event-loop.js
```

La salida esperada respeta este orden:

1. Comienza el programa
2. Termina el código principal
3. Se ejecuta la tarea programada

## Archivo generado

Al ejecutar `index.js`, se crea automáticamente la carpeta `salida` y dentro de ella el archivo:

`salida/ficha-videojuego.txt`

La misma ficha que aparece en la terminal se guarda en ese archivo.

## Conceptos

### 1. ¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js?

JavaScript es el lenguaje de programación. V8 es el motor que interpreta y ejecuta JavaScript, desarrollado originalmente para Chrome. Node.js es un runtime que utiliza V8 y agrega herramientas y APIs para poder ejecutar JavaScript fuera del navegador, por ejemplo para trabajar con archivos y rutas.

### 2. ¿Por qué el callback de setTimeout(..., 0) se ejecuta después del código principal?

Aunque el tiempo indicado sea 0, el callback no se ejecuta inmediatamente. Se programa para ejecutarse cuando termina el código principal y el event loop puede procesar esa tarea. Por eso primero aparece el mensaje del código principal y después el mensaje del `setTimeout`.

### 3. ¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?

El I/O bloqueante detiene la ejecución hasta que termina una operación de entrada o salida. El I/O no bloqueante permite continuar con otras tareas mientras se espera que termine la operación.

### 4. ¿Qué responsabilidades cumplen node:path y node:fs en index.js?

`node:path` permite trabajar con rutas de archivos y carpetas de forma segura, y `path.join` se utiliza para construirlas. `node:fs` permite trabajar con el sistema de archivos: en este proyecto se utiliza para crear la carpeta de salida y escribir la ficha en un archivo de texto.
