## Desarrollador
- CORTES CORTES BRYAN AXEL

# Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Create project
ng new <project-name>


# Install components UI
npm install primeng @primeng/themes

npm install primeicons

npm install tailwindcss

npm install tailwindcss-primeui

npm install primeflex. (para utilidades css)

# Install components in the WSL
ng generate component shared/components/header

## Estructura de archivos

frontend/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   ├── home/
│   │   │   │   │   ├── home.component.ts
│   │   │   │   │   ├── home.component.html
│   │   │   │   │   ├── home.component.css
│   │   │   │   ├── login/
│   │   │   │   │   ├── login.component.ts
│   │   │   │   │   ├── login.component.html
│   │   │   │   │   ├── login.component.css
│   │   │   │   ├── register/
│   │   │   │   │   ├── register.component.ts
│   │   │   │   │   ├── register.component.html
│   │   │   │   │   ├── register.component.css
│   │   │   │   ├── auth.routes.ts
│   │   │   ├── not-found/
│   │   │   │   │   ├── not-found.component.ts
│   │   │   │   │   ├── not-found.component.html
│   │   │   │   │   ├── not-found.component.css
│   │   │   ├── papeleria/
│   │   │   │   ├── card/
│   │   │   │   │   ├── card.component.ts
│   │   │   │   │   ├── card.component.html
│   │   │   │   │   ├── card.component.css
│   │   │   │   ├── carrito/
│   │   │   │   │   ├── carrito.component.ts
│   │   │   │   │   ├── carrito.component.html
│   │   │   │   │   ├── carrito.component.css
│   │   │   │   ├── compra/
│   │   │   │   │   ├── compra.component.ts
│   │   │   │   │   ├── compra.component.html
│   │   │   │   │   ├── compra.component.css
│   │   │   │   ├── cuadernos/
│   │   │   │   │   ├── cuadernos.component.ts
│   │   │   │   │   ├── cuadernos.component.html
│   │   │   │   │   ├── cuadernos.component.css
│   │   │   │   ├── materiales/
│   │   │   │   │   ├── materiales.component.ts
│   │   │   │   │   ├── materiales.component.html
│   │   │   │   │   ├── materiales.component.css
│   │   │   │   ├── plumas/
│   │   │   │   │   ├── plumas.component.ts
│   │   │   │   │   ├── plumas.component.html
│   │   │   │   │   ├── plumas.component.css
│   │   │   │   ├── tijeras/
│   │   │   │   │   ├── tijeras.component.ts
│   │   │   │   │   ├── tijeras.component.html
│   │   │   │   │   ├── tijeras.component.css
│   │   │   │   ├── papeleria.routes.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   ├── assets/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
├── angular.json
├── package.json
├── tsconfig.json


## Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/nombre_proyecto.git
   cd nombre_proyecto
