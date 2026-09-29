# Teams Hand Assistant

Extensión para navegadores basados en Chromium diseñada para ayudar a usuarios de Microsoft Teams Web a conocer su posición dentro de la cola de manos levantadas durante una reunión.

## Objetivo

Teams Hand Assistant busca detectar la posición del usuario cuando levanta la mano en una reunión de Microsoft Teams y generar avisos cuando se acerca su turno.

Ejemplo:

- Posición #6 → seguimiento activo.
- Posición #3 → aviso por voz.
- Posición #2 → aviso de preparación.
- Posición #1 → aviso de que el usuario es el siguiente.

En versiones posteriores también se estudiará el envío de notificaciones al teléfono.

## Navegador principal

El proyecto se desarrolla inicialmente para:

- Brave Browser
- Microsoft Teams Web

Brave está basado en Chromium, por lo que la extensión utilizará APIs compatibles con Chromium y Manifest V3.

## Funciones planificadas

- Detectar Microsoft Teams Web.
- Detectar participantes con la mano levantada.
- Identificar al usuario actual.
- Determinar su posición en la cola.
- Emitir alertas por voz.
- Mostrar notificaciones de escritorio.
- Configurar la posición en la que se activa una alerta.
- Enviar notificaciones al teléfono.
- Añadir un panel de configuración.

## Estructura del proyecto

```text
teams-hand-assistant/
├── assets/
│   └── icons/
├── docs/
├── src/
│   ├── background/
│   ├── content/
│   ├── popup/
│   └── utils/
├── .gitignore
├── LICENSE
├── manifest.json
└── README.md