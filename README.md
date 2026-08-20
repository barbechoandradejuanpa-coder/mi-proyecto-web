# Aplicaciones HTML educativas

Repositorio para organizar aplicaciones educativas independientes, ligeras y fáciles de publicar. Cada aplicación vive en su propia carpeta y puede ejecutarse abriendo su `index.html`.

> El `index.html` de la raíz se conserva como aplicación existente. La nueva estructura se añade sin modificarla.

## Estructura

```text
.
├── index.html                  # Aplicación existente
├── apps/
│   ├── README.md               # Índice de aplicaciones
│   └── plantilla/              # Base para crear una nueva app
│       ├── index.html
│       └── assets/
│           ├── css/styles.css
│           └── js/app.js
├── shared/
│   ├── css/base.css            # Estilos comunes
│   └── js/storage.js           # Utilidades de almacenamiento local
├── docs/
│   └── GUIA-NUEVA-APP.md
└── .github/
    └── PULL_REQUEST_TEMPLATE.md
```

## Convenciones

- Una carpeta por aplicación: `apps/nombre-corto/`.
- HTML semántico y accesible; diseño adaptable a celular.
- CSS y JavaScript propios dentro de `assets/`.
- Recursos compartidos solo cuando dos o más aplicaciones los reutilizan.
- Sin datos personales reales, historias clínicas identificables ni credenciales.
- Los cambios se preparan en una rama y se integran mediante pull request.

## Inicio rápido

1. Duplica `apps/plantilla/`.
2. Renombra la carpeta con minúsculas y guiones, por ejemplo `semiologia-dolor`.
3. Actualiza título, objetivos, contenido y evaluación.
4. Prueba navegación, teclado, celular y almacenamiento local.
5. Añade la aplicación a `apps/README.md`.

Consulta [la guía para crear una aplicación](docs/GUIA-NUEVA-APP.md).

## Modelo recomendado para cada aplicación

Cada app debe tener un propósito docente claro y un recorrido breve:

- Introducción y objetivos.
- Contenido o simulación interactiva.
- Caso clínico o actividad aplicada.
- Autoevaluación con retroalimentación.
- Aviso de uso educativo y bibliografía cuando corresponda.

## Privacidad

Este repositorio es público actualmente. Usa únicamente casos ficticios o completamente anonimizados. No subas nombres, números de historia clínica, resultados identificables, claves ni información institucional reservada.
