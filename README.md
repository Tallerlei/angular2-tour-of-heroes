# Tour of Heroes - Angular Tutorial

This repository contains the modernized version of the Angular Tour of Heroes tutorial application, updated to use Angular 16+ with modern patterns and build tools.

![Tour of Heroes Application](https://github.com/user-attachments/assets/479ea5a6-1939-42ef-a070-4e6f28de3363)

## Features

- **Hero List**: Display a list of heroes with styled badges
- **Hero Selection**: Click on any hero to view and edit details
- **Hero Editing**: Two-way data binding allows real-time name editing
- **Modern Angular**: Uses Angular 16 with modern component patterns
- **Webpack Build**: Modern build pipeline with hot reload

![Hero Selection and Editing](https://github.com/user-attachments/assets/af833654-a4d8-4b9c-a406-2423e6f73942)

## What's Modern

This updated version includes:

- ✅ **Angular 16+** instead of Angular 2 beta
- ✅ **Modern import paths** (`@angular/core` instead of `angular2/core`)  
- ✅ **Updated template syntax** (`let hero` instead of `#hero`)
- ✅ **Modern component patterns** (removed deprecated directives metadata)
- ✅ **Webpack build system** for development and production
- ✅ **TypeScript 5.1+** with modern configuration
- ✅ **Zone.js integration** for change detection
- ✅ **Modern service injection** with `providedIn: 'root'`

## Development Setup

### Prerequisites

- Node.js 16+ and npm

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tallerlei/angular2-tour-of-heroes.git
   cd angular2-tour-of-heroes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   
   The application will open at `http://localhost:3000` with hot reload enabled.

4. **Build for production**
   ```bash
   npm run build
   ```

### Available Scripts

- `npm start` - Start development server with hot reload
- `npm run dev` - Same as start (alias)
- `npm run build` - Build for production

## Project Structure

```
app/
├── app.component.ts      # Main app component with hero list
├── app.module.ts         # Angular module configuration  
├── hero-detail.component.ts # Hero detail/editing component
├── hero.service.ts       # Hero data service
├── hero.ts              # Hero model interface
├── mock-heroes.ts       # Sample hero data
└── main.ts              # Application bootstrap

src/
├── index.html           # Main HTML template
└── styles.css          # Global styles

webpack.config.js        # Webpack build configuration
tsconfig.json           # TypeScript configuration
```

## Tutorial Progress

This implementation covers the fundamental concepts from the Angular tutorial:

- [x] Component architecture
- [x] Data binding (interpolation, property, event, two-way)
- [x] Directives (*ngFor, *ngIf, [class])
- [x] Services and dependency injection
- [x] Component communication (@Input)
- [x] Lifecycle hooks (OnInit)
- [x] Modern build tooling

## Contributing

This repository is designed to stay in sync with the official Angular tutorial. When contributing:

1. Ensure compatibility with modern Angular versions
2. Follow Angular style guide recommendations  
3. Maintain tutorial simplicity while using current best practices
4. Test changes across different browsers

## License

This project is licensed under the ISC License.
