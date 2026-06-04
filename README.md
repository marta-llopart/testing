# Dev Playground 🧪

Proyecto base de HTML, CSS y JS para hacer pruebas con **GitHub** y **Claude Code**.

## Estructura

```
dev-playground/
├── index.html    # Estructura principal
├── style.css     # Estilos (variables CSS, componentes)
├── app.js        # Lógica JS (navegación, consola, API tester)
└── README.md
```

## Secciones

- **Inicio** — Vista principal con cards descriptivas
- **Componentes** — Botones, inputs, badges, toggles y barras de progreso
- **API Test** — Prueba llamadas HTTP a cualquier endpoint y visualiza la respuesta

## Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl/Cmd + `` ` | Abrir/cerrar consola JS |
| `Esc` | Cerrar consola |

## Cómo usar con GitHub

```bash
# 1. Inicializa el repositorio
git init
git add .
git commit -m "feat: proyecto base dev-playground"

# 2. Sube a GitHub
git remote add origin https://github.com/TU_USUARIO/dev-playground.git
git push -u origin main
```

## Cómo usar con Claude Code

```bash
# Instala Claude Code (requiere Node.js)
npm install -g @anthropic-ai/claude-code

# Dentro del proyecto
cd dev-playground
claude
```

## Ideas para extender el proyecto

- [ ] Añadir modo claro/oscuro
- [ ] Persistir historial de consola con localStorage
- [ ] Añadir editor de código en vivo
- [ ] Integrar pruebas unitarias con Vitest
