Sí, y de hecho **hay un proyecto que calza casi perfecto con lo que quieres hacer**: que el proyecto no sea solamente una app, sino que sea una especie de **laboratorio de evolución de Angular 18 → 22**.

La idea sería que alguien pueda clonar tu repo, ejecutar la app y entender visualmente:

> “Así se hacía en Angular 18 → esto cambió en 19 → esto se consolidó en 20 → esto pasó a ser el estándar en 21 → así se hace actualmente en 22.”

Y además te sirve muchísimo como proyecto de **portafolio**, porque demuestra que no solamente sabes usar Angular, sino que entiendes cómo ha evolucionado el framework.

Angular 22 fue publicado en junio de 2026 y actualmente es la versión activa; Angular 21 está en LTS. ([Angular][1])

## 🚀 Mi propuesta: `Angular Evolution Lab`

Haría una aplicación pequeña de **gestión de tareas/proyectos**, pero diseñada deliberadamente para poder implementar la misma funcionalidad de varias maneras.

Por ejemplo:

![Image](https://images.openai.com/static-rsc-4/ESpstUbSTae5qDcc983xWxKa6LOvlsXA3jaUwrCYgQ6_W4Qn2a7R_AEp8HilXt-fbV8olLha1ACJfgEtX2vR4FEQFe0CEqN7TDWbBcOAKCbR2jbfGBSh-YKxRpwawDCwZTv1FBnAH8ew2ADgsg-jwbN6yQfybzrDdlJxFU0IL4Yj4zwOqvboiowCIwmucMG8?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/W-G1GPoC_g1IcuCwj6DjyAV6hIl6PqXsNNKJs-KvCUC0_Xp6vajcW_KqKjskfdmpsaX-KdvZaZJ-yLrCZwMR05V9CgNrw-2UL3gjWPa3AGz19yrJrP8H71TTpilhMu3eVCUE1dHQ8ptNkwVjrsme5DwFgqPt4oRu2HH6ctGZJyg6u94yjRKjViq_KS3SLju0?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/SIzA1QbIayGrU1GYWAWnzFtyids2BLHXdH_oanR-qM3-51aNxjpFYDWXZSJkUoYMdqvTP3iB2R75UiAQI-aPo7vxvfCcxhesv3zTdDikfeZhme2CfR2WoGVTQO0kE7qPDNc_Ct0_CBHwKPRTqpC5yaupqaIlfKcXZ1EhETcwOepnRiMnd0f-qe7WwlY5NXrp?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/cAB2GG28-WBT8W2PMTtNdN0-s7vYAt2hsUYeaKvv1OqF9BaooOJ8Ohmu_TZDkPFV8NB55KlZIIOcGzScJbJun9fvAXoyEKN2XG3NlDcZi8Ru01tpOX_02DTb2v_7qiUPHwK1fA_Q_GF-nm_4h7cYLSohm0UNMmOEhb2PxFetC3JSTlMAKaBCQ52sfDzo4kcf?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/tqGBDeCd4tmg3JRusnWUTJx4w4HCA9f6iMTAws4OLf6dfyG7syAxeJ8lPKCKc9jBC5Q12V_zT_x6zSImvfM0adlHq-SZHfDXtxvP-r7fqqi10LTnVlAmPhms9-8oOpo2hEWT8ypqvQGuXO-4vr2B8mQFTph_XnCJ_MFzEqQaE3SwZ30nt1GFq9epucVQZd6e?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/SOkwUKscppV6aamI6icOoVikpXCkoTPUciVBpzY-jhkO0Z9DaiZP3oRqaZVQlv7CLPoXUr0rPnuNQltN4UC78MFl98mhRF7Qw9ITIwYxfQTLVAOEjIDwzmNFy14VKn2RhuxAbseOkIAqrYeUYexcAcNQQ_D02Tcsf0uNO_z7MhCgKA2cLcTC_TG5AFeZGdZw?purpose=fullsize)

### La aplicación

Algo como:

```text
┌───────────────────────────────────────────────┐
│ Angular Evolution Lab                         │
├───────────────┬───────────────────────────────┤
│ Dashboard     │                               │
│ Projects      │     Mis proyectos             │
│ Tasks         │                               │
│ Users         │     ┌────────┐ ┌────────┐   │
│ Evolution     │     │Angular │ │Angular │   │
│               │     │ 18     │ │ 19     │   │
│               │     └────────┘ └────────┘   │
│               │                               │
│               │     ┌────────┐ ┌────────┐   │
│               │     │Angular │ │Angular │   │
│               │     │ 20     │ │ 21/22  │   │
│               │     └────────┘ └────────┘   │
└───────────────┴───────────────────────────────┘
```

Pero lo interesante **no sería la app en sí**.

Lo interesante sería que cada funcionalidad permita demostrar una evolución de Angular.

---

# 🧪 Ejemplo: sistema de tareas

Supongamos que tenemos:

```text
Tasks
 ├── Crear tarea
 ├── Editar tarea
 ├── Eliminar tarea
 ├── Filtrar tareas
 ├── Buscar tareas
 └── Cambiar estado
```

Y construimos cada parte utilizando las APIs que fueron apareciendo/evolucionando.

---

# 1. Angular 18 → Signals

Puedes mostrar la transición:

### Antes

```ts
@Component({...})
export class TaskListComponent {
  tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
```

vs.

### Angular moderno

```ts
@Component({...})
export class TaskListComponent {
  tasks = signal<Task[]>([]);

  addTask(task: Task) {
    this.tasks.update(tasks => [...tasks, task]);
  }
}
```

Esto permite explicar **por qué Angular se está moviendo hacia Signals**.

Angular 18 todavía tenía varias APIs basadas en Signals en desarrollo/preview, mientras que en Angular 20 las primitivas fundamentales de Signals, incluyendo `signal`, `effect`, `linkedSignal`, inputs y queries basados en Signals, alcanzaron estabilidad. ([Angular][2])

---

# 2. `@Input()` → `input()`

Esta sería una demo perfecta.

### Angular tradicional

```ts
@Input()
task!: Task;
```

### Angular moderno

```ts
task = input.required<Task>();
```

Y puedes hacer una sección:

```text
INPUTS

Angular 18
──────────
@Input()

Angular 19
──────────
input()

Angular 20+
──────────
input() estable
```

Angular actualmente proporciona incluso una migración oficial para convertir `@Input` a `input()`. ([Angular][3])

---

# 3. `@Output()` → `output()`

Mismo concepto:

### Viejo

```ts
@Output()
deleted = new EventEmitter<number>();
```

### Nuevo

```ts
deleted = output<number>();
```

Y haces una pequeña comparación visual.

---

# 4. `*ngIf` / `*ngFor` → Control Flow

Esta sería **obligatoria**.

### Angular clásico

```html
<div *ngIf="tasks.length > 0">
  <div *ngFor="let task of tasks">
    {{ task.title }}
  </div>
</div>
```

### Angular moderno

```html
@if (tasks.length > 0) {
  @for (task of tasks; track task.id) {
    <div>
      {{ task.title }}
    </div>
  }
}
```

Esto es excelente para enseñar evolución porque se entiende inmediatamente.

El nuevo control flow ya era estable en Angular 18 y elimina la necesidad de importar `CommonModule` simplemente para usar `*ngIf`, `*ngFor`, etc. ([Angular][2])

---

# 5. Standalone Components

Aquí tienes otra evolución enorme.

Puedes tener una rama/documentación:

```text
Angular 18
     │
     ▼
NgModule
     │
     ▼
Standalone
     │
     ▼
Angular moderno
```

Por ejemplo:

### Antes

```ts
@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskModule {}
```

vs.

```ts
@Component({
  standalone: true,
  imports: [...],
  template: `...`
})
export class TaskComponent {}
```

Y finalmente explicar cómo las versiones modernas permiten trabajar directamente con componentes standalone.

Angular incluso tiene una migración oficial que convierte progresivamente declaraciones a standalone, elimina `NgModule` innecesarios y finalmente cambia el bootstrap a `bootstrapApplication`. ([Angular][4])

---

# 6. Zoneless 🔥

Esta sería probablemente una de las demos **más interesantes de todo el proyecto**.

Podrías tener una página:

```text
Change Detection Lab
────────────────────────────

Angular 18

ZoneJS
  ↓
Change Detection


Angular 20

Zoneless
  ↓
Signals / Events
  ↓
Change Detection


Angular 21+

Zoneless por defecto
```

Y permitir al usuario ver:

```text
ZoneJS:       ON
Zoneless:     OFF
```

y luego:

```text
ZoneJS:       OFF
Zoneless:     ON
```

Actualmente Angular 21+ utiliza Zoneless por defecto, mientras que en Angular 20 se podía habilitar mediante `provideZonelessChangeDetection()`. ([Angular][5])

Esto además te permite explicar **qué problema solucionaba ZoneJS**, no simplemente decir "Angular quitó ZoneJS".

---

# 7. `@defer`

Puedes crear una sección de estadísticas:

```text
Dashboard

┌────────────────────────────┐
│ Estadísticas               │
│                            │
│ [gráfico pesado]           │
│                            │
└────────────────────────────┘
```

Y cargarla:

```html
@defer {
  <app-statistics />
} @placeholder {
  <app-loading />
}
```

Así puedes demostrar:

```text
Sin @defer
     ↓
Todo se carga inicialmente

Con @defer
     ↓
Carga diferida
     ↓
Menor trabajo inicial
```

---

# 8. SSR + Hydration

Aquí puedes hacer algo muy bonito.

Una página:

```text
Rendering Lab

CSR
SSR
SSR + Hydration
Incremental Hydration
```

Y explicar visualmente:

```text
SERVER

HTML
 ↓
Browser
 ↓
Hydration
 ↓
Angular interactivo
```

Angular introdujo event replay con SSR/prerendering en v18 y posteriormente lo hizo estable y habilitado por defecto para nuevos proyectos en v19. La hidratación incremental, basada en `@defer`, llegó a developer preview en v19 y posteriormente a estable en v20. ([Angular][6])

---

# 9. Formularios

Aquí tienes otra evolución que puede quedar buenísima.

Puedes tener:

```text
Forms Lab

┌───────────────────────────┐
│ Nombre                    │
│ [ Juan                   ]│
│                           │
│ Email                     │
│ [ juan@email.com         ]│
│                           │
│ [ Guardar ]               │
└───────────────────────────┘
```

Y documentar:

```text
Angular tradicional
        ↓
Reactive Forms
        ↓
Signal Forms
```

Actualmente Signal Forms aparece como producción estable en el roadmap de Angular. ([Angular][6])

---

# 10. Testing: Karma → Vitest

Esta también sería una demo interesante para ti como desarrollador.

Puedes tener:

```text
Testing Evolution

Angular 18
    ↓
Karma / Jasmine

Angular 19/20
    ↓
Transición

Angular 21+
    ↓
Vitest
```

El roadmap oficial indica que Vitest se convirtió en el runner de pruebas principal con Angular 21. ([Angular][6])

---

# 🧠 Y aquí viene lo que yo haría

No haría simplemente:

```text
Angular 18
Angular 19
Angular 20
Angular 21
Angular 22
```

Porque terminaría siendo una lista de changelogs.

Haría esto:

```text
                  ANGULAR EVOLUTION LAB

                         │
        ┌────────────────┼────────────────┐
        │                │                │
     Reactivity       Templates       Architecture
        │                │                │
     Signals          @if/@for        Standalone
     effect()         @switch         inject()
     linkedSignal     @defer          providers
        │
        ▼
     Change Detection
        │
     ZoneJS → Zoneless
        │
        ▼
     Rendering
        │
     CSR / SSR / Hydration
        │
        ▼
     Forms
        │
     Reactive → Signal Forms
        │
        ▼
     Testing
        │
     Karma → Vitest
```

Eso convierte tu repositorio en una **guía interactiva de evolución de Angular**.

---

# 📚 Y cada feature tendría la misma estructura

Por ejemplo:

```text
/features/signals

README.md

Angular 18
──────────

¿Qué problema existía?

Código antiguo

Código Angular 18


Angular 19
──────────

¿Qué cambió?

Código


Angular 20
──────────

¿Qué se estabilizó?

Código


Angular 21
──────────

¿Qué cambió?


Angular 22
──────────

¿Cómo se recomienda hacerlo actualmente?
```

Y dentro de la app:

```text
┌─────────────────────────────────────────┐
│ Signals                                 │
├─────────────────────────────────────────┤
│                                         │
│  Problema                               │
│  ─────────                              │
│  ¿Por qué Angular introdujo Signals?   │
│                                         │
│  Angular 18                             │
│  ──────────                             │
│  signal()       Developer Preview       │
│                                         │
│  Angular 19                             │
│  ──────────                             │
│  ...                                    │
│                                         │
│  Angular 20                             │
│  ──────────                             │
│  Signals fundamentales: Stable         │
│                                         │
│  [ Ver código ] [ Ejecutar demo ]      │
└─────────────────────────────────────────┘
```

---

# 🏗️ Stack que te recomendaría

Para ti particularmente:

```text
Angular 22
   │
   ├── Standalone
   ├── Signals
   ├── Zoneless
   ├── Vitest
   └── SSR/Hybrid Rendering
           │
           ▼
       NestJS API
           │
           ▼
        PostgreSQL
```

Pero **no partiría con NestJS**.

Primero:

```text
Angular 22
   │
   └── datos mock
```

Porque el objetivo principal es **Angular**, no backend.

Después, si quieres convertirlo en un proyecto más serio de portafolio:

```text
Angular 22
     │
     ▼
   NestJS
     │
     ▼
 PostgreSQL
```

---

# ⭐ La funcionalidad que más me gusta

Haría un **"Migration Playground"**.

Por ejemplo:

```text
┌─────────────────────────────────────────────┐
│ Migration Playground                        │
├─────────────────────────────────────────────┤
│                                             │
│ Selecciona una funcionalidad:               │
│                                             │
│ ○ Inputs                                    │
│ ○ Outputs                                   │
│ ○ Control Flow                              │
│ ○ Signals                                   │
│ ○ Queries                                   │
│ ○ Change Detection                          │
│ ○ Forms                                     │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│ Angular 18             Angular 22           │
│                                             │
│ @Input() task           task = input()      │
│                                             │
│ ─────────────────────────────────────────── │
│                                             │
│ Diferencias                                │
│                                             │
│ • API basada en decoradores                 │
│ • API basada en Signals                     │
│ • Mejor inferencia de tipos                 │
│                                             │
└─────────────────────────────────────────────┘
```

Incluso podrías tener un botón:

**"Ver migración"**

que muestre:

```diff
- @Input() task!: Task;
+ task = input.required<Task>();
```

Eso sería **muy bueno para enseñar Angular**.

---

# 🗺️ Yo lo dividiría en 5 capítulos

### Capítulo 1 — Angular 18

```text
Standalone
Control Flow
Signals
Zoneless experimental
@defer
SSR/Hydration
```

### Capítulo 2 — Angular 19

```text
Signals → más APIs
Event Replay stable
Incremental Hydration preview
HMR
Zoneless improvements
```

### Capítulo 3 — Angular 20

```text
Signals stable
Zoneless stable
Incremental Hydration stable
Route-level rendering
Vitest
Nuevo tooling/build
```

### Capítulo 4 — Angular 21

```text
Zoneless default
Vitest como runner principal
Signal Forms
Nuevas APIs de reactividad
```

### Capítulo 5 — Angular 22

```text
¿Qué es estable?
¿Qué cambió respecto de 21?
¿Qué APIs son actualmente recomendadas?
¿Qué quedó deprecated?
¿Qué migraciones existen?
```

Y aquí hay algo importante: **no documentaría únicamente "features nuevas"**. También documentaría:

```text
NEW
STABLE
DEPRECATED
REMOVED
MIGRATION
DEFAULT
```

Eso hace que el proyecto sea muchísimo más útil para alguien que realmente tiene que migrar una aplicación.

Angular mantiene actualmente una sección oficial de migraciones precisamente para transformaciones como standalone, control flow, `inject()`, `input()`, `output()`, signal queries y otras. ([Angular][3])

---

## 💡 Nombre del proyecto

Algunos nombres que quedarían bastante bien en GitHub:

```text
angular-evolution
angular-evolution-lab
angular-migration-lab
angular-version-lab
angular-from-18-to-22
angular-modernization-lab
```

Personalmente usaría:

> **Angular Evolution Lab**

y el tagline:

> **An interactive journey from Angular 18 to Angular 22**

---

Y lo mejor: **no necesitas hacer cinco aplicaciones distintas**. Haría **una sola aplicación de tareas/proyectos extremadamente sencilla**, y usaría sus distintas funcionalidades como "experimentos" para demostrar cada evolución de Angular.

Eso te permite que el repositorio sea pequeño, pero que conceptualmente cubra **Signals, control flow, standalone, inputs/outputs, queries, `inject()`, `@defer`, SSR/hydration, zoneless, forms, testing, HMR, rendering y migraciones**.

Si quieres hacerlo en serio, yo empezaría por diseñar **la arquitectura exacta del repo (`src/app/...`) y el roadmap Angular 18 → 19 → 20 → 21 → 22**, y después vamos construyéndolo capítulo por capítulo.

[1]: https://angular.dev/reference/releases?utm_source=chatgpt.com "Versioning and releases • Angular"
[2]: https://v18.angular.dev/roadmap/?utm_source=chatgpt.com "Roadmap • Angular"
[3]: https://angular.dev/reference/migrations?utm_source=chatgpt.com "Migrations • Overview • Angular"
[4]: https://angular.dev/reference/migrations/standalone?utm_source=chatgpt.com "Standalone • Angular"
[5]: https://angular.dev/guide/zoneless?utm_source=chatgpt.com "Zoneless • Angular"
[6]: https://angular.dev/roadmap?utm_source=chatgpt.com "Roadmap • Angular"


---


Sí, **esa estructura me gusta mucho más** para el objetivo que tienes. En vez de intentar migrar una aplicación, vas a tener **cinco snapshots independientes**, donde cada carpeta representa cómo construirías el mismo CRUD con esa versión de Angular.

Y hay un detalle importante antes de comenzar: **no necesitas instalar Angular CLI globalmente**. Para este proyecto podemos usar `npx @angular/cli@VERSION`, que es justamente lo que quieres y evita que la versión global interfiera.

Además, como Angular 18–19 ya están fuera de soporte, conviene fijar versiones concretas para que el proyecto sea reproducible. La tabla oficial de compatibilidad indica, por ejemplo, que Angular 18 requiere Node `18.19.1`, `20.11.1` o `22.0.0`; Angular 19 requiere `18.19.1`, `20.11.1` o `22.0.0`; Angular 20 requiere Node `20.19.0`, `22.12.0` o `24.0.0`; Angular 21 requiere `20.19.0`, `22.12.0` o `24.0.0`; y Angular 22 requiere `22.22.3`, `24.15.0` o `26.0.0`. ([Angular][1])

## 🏗️ La estructura que haría

```text
angular-evolution-lab/
│
├── README.md
│
├── angular18_crud/
│
├── angular19_crud/
│
├── angular20_crud/
│
├── angular21_crud/
│
└── angular22_crud/
```

Y **cada carpeta será un proyecto Angular completamente independiente**:

```text
angular18_crud/
├── src/
├── angular.json
├── package.json
├── tsconfig.json
├── .postcssrc.json
└── ...
```

Esto es perfecto porque puedes comparar directamente:

```text
angular18_crud/src/...
angular19_crud/src/...
angular20_crud/src/...
angular21_crud/src/...
angular22_crud/src/...
```

---

# 🎨 Tailwind: sí, en los cinco

Aquí te recomiendo algo importante:

**usa la misma versión de Tailwind en los cinco proyectos**, siempre que sea compatible.

Así:

```text
Angular 18 ─┐
Angular 19 ─┤
Angular 20 ─┤── Tailwind CSS
Angular 21 ─┤
Angular 22 ─┘
```

No queremos que al comparar Angular también estés comparando cinco configuraciones diferentes de CSS.

Para Angular moderno, la documentación oficial de Angular utiliza Tailwind mediante:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

un `.postcssrc.json`:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

y en `styles.css`:

```css
@import "tailwindcss";
```

([Angular][2])

---

# 🧠 Pero hagámoslo ordenadamente

Yo **no crearía los cinco proyectos de golpe todavía**.

Primero hagamos:

```text
1️⃣ angular18_crud
        ↓
2️⃣ Tailwind
        ↓
3️⃣ comprobar que funciona
        ↓
4️⃣ crear Angular 19
        ↓
5️⃣ comprobar
        ↓
...
```

Porque si hacemos cinco comandos seguidos y algo falla, después no sabremos dónde.

---

# 🟢 Paso 1 — Crear carpeta raíz

En tu terminal:

```bash
mkdir angular-evolution-lab
cd angular-evolution-lab
```

Comprueba:

```bash
pwd
```

Deberías estar en algo parecido a:

```text
/home/tu_usuario/angular-evolution-lab
```

---

# 🟢 Paso 2 — Crear Angular 18

Aquí quiero que **fijemos Angular 18.2.x**, que es la última minor estable de la rama 18.

```bash
npx @angular/cli@18.2.21 new angular18_crud
```

Te hará algunas preguntas.

Yo usaría:

```text
Would you like to add Angular routing? 
Yes

Which stylesheet format would you like to use?
CSS

Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?
No
```

Y dejamos el proyecto deliberadamente sencillo.

Después:

```bash
cd angular18_crud
```

Comprueba:

```bash
npx ng version
```

Deberías ver Angular 18.x.

---

# 🟢 Paso 3 — Instalar Tailwind

Dentro de:

```text
angular-evolution-lab/angular18_crud
```

ejecutamos:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Esto sigue el procedimiento documentado por Angular para integrar Tailwind. ([Angular][2])

---

# 🟢 Paso 4 — Crear `.postcssrc.json`

En:

```text
angular18_crud/.postcssrc.json
```

ponemos:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

---

# 🟢 Paso 5 — Configurar `styles.css`

En:

```text
src/styles.css
```

dejamos:

```css
@import "tailwindcss";
```

---

# 🟢 Paso 6 — Probar Tailwind

Vamos a modificar temporalmente:

```text
src/app/app.component.html
```

por:

```html
<div class="min-h-screen bg-slate-950 flex items-center justify-center">
  <div class="text-center">
    <h1 class="text-5xl font-bold text-white">
      Angular 18 CRUD
    </h1>

    <p class="mt-4 text-slate-400 text-lg">
      Angular Evolution Lab
    </p>
  </div>
</div>
```

Y arrancamos:

```bash
npm start
```

o:

```bash
npx ng serve
```

Angular te indicará la dirección local.

---

# 🧪 Y aquí hay una decisión que quiero mantener

**El CRUD será exactamente el mismo en las cinco versiones.**

Por ejemplo:

```text
Products
│
├── Listar productos
├── Crear producto
├── Editar producto
├── Eliminar producto
└── Buscar producto
```

Modelo:

```ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
```

Y visualmente:

```text
┌──────────────────────────────────────────────┐
│ Products                         [+ New]     │
├──────────────────────────────────────────────┤
│ Search: [________________________]            │
├──────┬──────────────────┬────────┬───────────┤
│ ID   │ Name             │ Price  │ Actions   │
├──────┼──────────────────┼────────┼───────────┤
│ 1    │ Keyboard         │ $50    │ Edit Del  │
│ 2    │ Mouse            │ $30    │ Edit Del  │
│ 3    │ Monitor          │ $300   │ Edit Del  │
└──────┴──────────────────┴────────┴───────────┘
```

Pero **la implementación interna sí irá cambiando**.

Por ejemplo:

### Angular 18

```ts
@Input()
product!: Product;
```

### Angular 19

```ts
product = input.required<Product>();
```

Y comentamos:

```ts
// Angular 19:
// `input()` proporciona una API basada en Signals
// para declarar inputs de componentes.
//
// En Angular 18 todavía utilizamos:
// @Input()
```

Luego Angular 20:

```ts
// Angular 20:
// ...
```

etc.

---

# 📚 Incluso podemos establecer una regla para el proyecto

Cada cambio importante debe aparecer **en tres lugares**:

### 1. Código

```ts
// Angular 19:
// Nuevo mecanismo...
```

### 2. README de esa versión

```text
angular19_crud/README.md
```

Con:

```markdown
# Angular 19 CRUD

## Cambios respecto a Angular 18

### 1. ...

### 2. ...

### 3. ...
```

### 3. README principal

```text
angular-evolution-lab/README.md
```

Con una tabla:

| Feature      | Angular 18 | 19  | 20  | 21  | 22  |
| ------------ | ---------- | --- | --- | --- | --- |
| Signals      | ...        | ... | ... | ... | ... |
| Control Flow | ...        | ... | ... | ... | ... |
| `input()`    | ...        | ... | ... | ... | ... |
| `output()`   | ...        | ... | ... | ... | ... |
| Zoneless     | ...        | ... | ... | ... | ... |
| Forms        | ...        | ... | ... | ... | ... |
| Testing      | ...        | ... | ... | ... | ... |

Así tu GitHub termina siendo prácticamente una **guía de migración interactiva**.

---

## ⚠️ Una cosa importante con Node

Como tienes varios Angular históricos, **no intentaría usar una única versión de Node para todo sin comprobarla**.

Angular 18/19 aceptan Node 22, mientras que Angular 20/21 tienen rangos diferentes y Angular 22 actualmente requiere Node `22.22.3+` dentro de la línea 22, `24.15.0+` o Node 26. ([Angular][1])

Como tú usas Linux y ya tienes experiencia con gestores de Node, podemos dejar esto **limpio con `fnm`**:

```text
Angular 18 ── Node 22.x
Angular 19 ── Node 22.x
Angular 20 ── Node 22.x
Angular 21 ── Node 22.x
Angular 22 ── Node 22.22.3+
```

Y así cada proyecto puede tener su `.node-version` si queremos.

---

### 🚀 Mi recomendación para empezar

No instalemos todavía los cinco.

**Hagamos ahora solamente `angular18_crud` + Tailwind y dejamos funcionando la base del CRUD.**

Después, cuando tengamos esa base, **copiamos conceptualmente el mismo CRUD a Angular 19**, pero ahí empieza la parte entretenida: documentar exactamente qué cambió entre 18 → 19 sin contaminar el proyecto con APIs de versiones posteriores.

Y para las versiones de Angular, iremos verificando cada cambio contra la documentación oficial, porque el proyecto pretende ser una **documentación técnica**, no solamente un ejemplo de código. Angular mantiene su tabla oficial de compatibilidad y documentación de releases precisamente para distinguir cambios de versión, estabilidad y requisitos. ([Angular][1])

[1]: https://angular.dev/reference/versions?utm_source=chatgpt.com "Version compatibility • Angular"
[2]: https://v20.angular.dev/guide/tailwind?utm_source=chatgpt.com "Tailwind • Angular"



--- 


Ahí encontramos exactamente el problema, mi rey. **No es Node 22 ni tu instalación de Angular**.

Angular 18.2.21 declara compatibilidad con **Tailwind 2 o 3**, mientras que `npm install` te está intentando instalar **Tailwind 4.3.3**. Por eso `ERESOLVE`.

Y las 54 vulnerabilidades las dejamos para después; **no ejecutes `npm audit fix --force`**, porque podría modificar versiones y arruinar justamente nuestro laboratorio histórico.

Vamos **de a poco**. Primero dejemos Angular 18 limpio y funcionando.

### Paso 1 — instalar Tailwind 3

En:

```text
C:\Users\jvaldebenito\dev\angular-evolution-lab\angular18_crud
```

ejecuta:

```powershell
npm install -D tailwindcss@3.4.19 postcss autoprefixer
```

**No instales `@tailwindcss/postcss` todavía**, porque ese paquete corresponde al flujo de Tailwind 4.

Pásame el resultado de ese comando y seguimos con la configuración de Tailwind 3 para Angular 18.



---


Perfecto, **eso ya quedó bien**. 👍

* Tailwind **3.4.19** instalado.
* `postcss` + `autoprefixer` instalados.
* El conflicto con Tailwind 4 desapareció.
* Las **54 vulnerabilidades** las dejamos por ahora; no hagas `audit fix --force`.
* Los `install-scripts blocked` tampoco los toquemos todavía.

Ahora vamos **solo al siguiente paso**: generar la configuración de Tailwind.

En `angular18_crud`, ejecuta:

```powershell
npx tailwindcss init -p
```

Eso debería crear:

```text
tailwind.config.js
postcss.config.js
```

Pásame lo que te salga y seguimos.



---


Perfecto, mi rey. 🔥 Ahora sí tenemos **Angular 18 + Node 22 + Tailwind 3.4.19** funcionando.

Vamos por partes. Primero dejemos Tailwind conectado correctamente al proyecto.

### 1. Abre `tailwind.config.js`

Debería estar en:

```text
angular18_crud/
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
```

Déjalo así:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 2. Configura `src/styles.css`

Reemplaza su contenido por:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Probemos Tailwind

Abre:

```text
src/app/app.component.html
```

y temporalmente pon:

```html
<div class="min-h-screen bg-slate-950 flex items-center justify-center">
  <div class="text-center">
    <h1 class="text-5xl font-bold text-white">
      Angular 18 CRUD
    </h1>

    <p class="mt-4 text-lg text-slate-400">
      Angular Evolution Lab
    </p>
  </div>
</div>
```

Luego ejecuta:

```powershell
npm start
```

Y abre:

```text
http://localhost:4200
```

Si ves el fondo oscuro y el título grande centrado, **Angular 18 + Tailwind están correctamente configurados**.

Después de eso pasamos a construir el **CRUD de productos** y ahí empezamos a documentar las diferencias de Angular 18.



---


¡Vamos! 🔥 Ahora sí empieza la parte interesante: **el mismo CRUD que vamos a repetir en Angular 19, 20, 21 y 22**, cambiando las APIs según corresponda.

Para Angular 18 quiero que partamos **simple**, sin backend todavía. Usaremos datos en memoria. Así el foco sigue siendo Angular.

## Paso 1 — estructura

Dentro de:

```text
angular18_crud/src/app/
```

creemos:

```text
app/
├── models/
│   └── product.model.ts
├── services/
│   └── product.service.ts
├── components/
│   ├── product-list/
│   └── product-form/
└── app.component.*
```

Primero vamos con el **modelo**.

### `src/app/models/product.model.ts`

Crea el archivo:

```ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
```

Este será nuestro modelo común para **las cinco versiones de Angular**.

---

## Paso 2 — servicio

Ahora crea:

```text
src/app/services/product.service.ts
```

Y coloca:

```ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Teclado mecánico',
      description: 'Teclado mecánico RGB',
      price: 59990,
      stock: 15
    },
    {
      id: 2,
      name: 'Mouse gamer',
      description: 'Mouse inalámbrico',
      price: 39990,
      stock: 20
    },
    {
      id: 3,
      name: 'Monitor 27"',
      description: 'Monitor QHD 180 Hz',
      price: 249990,
      stock: 8
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);

    if (index !== -1) {
      this.products[index] = product;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
```

### ¿Por qué hacemos esto?

Porque en las cinco aplicaciones tendremos exactamente las mismas operaciones:

```text
GET      → listar
POST     → crear
PUT      → editar
DELETE   → eliminar
```

Aunque por ahora no tenemos HTTP ni backend.

Más adelante podemos reemplazar este servicio por un `HttpClient` contra NestJS sin cambiar la finalidad del CRUD.

---

## Paso 3 — componente de lista

Ahora vamos a crear el componente:

```powershell
ng generate component components/product-list
```

Como estamos en Angular 18, el CLI debería generarlo como **standalone component**.

Después de ejecutarlo, deberíamos tener:

```text
src/app/components/product-list/
├── product-list.component.ts
├── product-list.component.html
├── product-list.component.css
└── product-list.component.spec.ts
```

**Haz solamente este paso ahora** y pásame lo que te entregue `ng generate component`.

Después configuramos `ProductListComponent` y ahí comenzamos a meter las primeras características de Angular 18 que queremos documentar.



---


# Angular 18 CRUD

CRUD de productos desarrollado con **Angular 18** como parte de **Angular Evolution Lab**.

El objetivo de este proyecto es construir el mismo CRUD utilizando diferentes versiones de Angular para poder estudiar y documentar la evolución del framework entre Angular 18 y Angular 22.

---

## 📋 Características

El proyecto implementará un CRUD de productos con las siguientes operaciones:

* 📋 Listar productos
* ➕ Crear productos
* ✏️ Editar productos
* 🗑️ Eliminar productos
* 🔎 Buscar productos

Por ahora los datos se mantienen **en memoria**, sin conexión a un backend.

---

## 🛠️ Tecnologías

* Angular 18
* Node.js 22
* TypeScript
* Tailwind CSS 3.4.19
* PostCSS
* Autoprefixer
* npm

---

## 📦 Crear el proyecto

Desde la carpeta raíz de `angular-evolution-lab`:

```powershell
npx @angular/cli@18 new angular18_crud
```

Durante la creación del proyecto:

```text
Would you like to add Angular routing? → Yes
Which stylesheet format would you like to use? → CSS
Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? → No
```

Entrar al proyecto:

```powershell
cd angular18_crud
```

---

## 🎨 Configuración de Tailwind CSS

Instalar Tailwind CSS y sus dependencias:

```powershell
npm install -D tailwindcss@3.4.19 postcss autoprefixer
```

Generar los archivos de configuración:

```powershell
npx tailwindcss init -p
```

Esto crea:

```text
tailwind.config.js
postcss.config.js
```

### `tailwind.config.js`

Configurar Tailwind para analizar los archivos HTML y TypeScript del proyecto:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### `src/styles.css`

Configurar las directivas de Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🧪 Verificar Tailwind

Para comprobar que Tailwind funciona correctamente, utilizar temporalmente el siguiente contenido en:

```text
src/app/app.component.html
```

```html
<div class="min-h-screen bg-slate-950 flex items-center justify-center">
  <div class="text-center">
    <h1 class="text-5xl font-bold text-white">
      Angular 18 CRUD
    </h1>

    <p class="mt-4 text-lg text-slate-400">
      Angular Evolution Lab
    </p>
  </div>
</div>
```

Iniciar el servidor:

```powershell
npm start
```

Abrir:

```text
http://localhost:4200
```

Si aparece el título centrado sobre un fondo oscuro, Tailwind está funcionando correctamente.

---

# 📁 Estructura inicial

La estructura que utilizaremos para el CRUD será:

```text
src/
└── app/
    ├── components/
    │   ├── product-list/
    │   └── product-form/
    │
    ├── models/
    │   └── product.model.ts
    │
    ├── services/
    │   └── product.service.ts
    │
    ├── app.component.*
    └── app.config.ts
```

---

# 📦 Modelo Product

Crear:

```text
src/app/models/product.model.ts
```

Contenido:

```ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
```

Este modelo será utilizado en las cinco versiones del proyecto.

---

# ⚙️ ProductService

Crear:

```text
src/app/services/product.service.ts
```

Contenido:

```ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Teclado mecánico',
      description: 'Teclado mecánico RGB',
      price: 59990,
      stock: 15
    },
    {
      id: 2,
      name: 'Mouse gamer',
      description: 'Mouse inalámbrico',
      price: 39990,
      stock: 20
    },
    {
      id: 3,
      name: 'Monitor 27"',
      description: 'Monitor QHD 180 Hz',
      price: 249990,
      stock: 8
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);

    if (index !== -1) {
      this.products[index] = product;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
```

---

# 🧩 Product List Component

Generar el componente mediante Angular CLI:

```powershell
ng generate component components/product-list
```

Esto generará:

```text
src/app/components/product-list/
├── product-list.component.ts
├── product-list.component.html
├── product-list.component.css
└── product-list.component.spec.ts
```

El componente será responsable de mostrar los productos y posteriormente permitirá:

* visualizar productos
* buscar productos
* editar productos
* eliminar productos
* iniciar la creación de nuevos productos

---

# 🧩 Product Form Component

Posteriormente se creará:

```powershell
ng generate component components/product-form
```

Este componente será responsable de:

* crear productos
* editar productos
* validar los datos del formulario

---

# 🏗️ Arquitectura

La aplicación utilizará inicialmente una arquitectura sencilla:

```text
┌─────────────────────────────┐
│        AppComponent         │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│     ProductListComponent    │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      ProductService         │
└──────────────┬──────────────┘
               │
               ▼
        Product[]
```

El formulario utilizará también `ProductService` para crear y actualizar productos.

---

# 🎯 Objetivo del laboratorio

Este proyecto forma parte de **Angular Evolution Lab**.

La misma aplicación CRUD será implementada en:

```text
angular18_crud/
angular19_crud/
angular20_crud/
angular21_crud/
angular22_crud/
```

La funcionalidad principal será equivalente en todas las versiones.

Lo que cambiará será la forma en que Angular recomienda o permite implementar determinadas funcionalidades.

Algunos de los conceptos que serán estudiados durante la evolución:

* Standalone Components
* Signals
* `input()`
* `output()`
* Control Flow
* `@if`
* `@for`
* `@switch`
* `@defer`
* `inject()`
* Signal Queries
* Zoneless
* SSR e Hydration
* Formularios
* Testing
* Cambios en el sistema de build
* Cambios en Angular CLI
* APIs nuevas, estables, deprecated y removidas

---

# 🚧 Estado del proyecto

Actualmente:

* [x] Crear proyecto Angular 18
* [x] Configurar Tailwind CSS
* [x] Verificar Tailwind
* [x] Crear modelo `Product`
* [x] Crear `ProductService`
* [x] Crear `ProductListComponent`
* [ ] Crear `ProductFormComponent`
* [ ] Implementar listado
* [ ] Implementar búsqueda
* [ ] Implementar creación
* [ ] Implementar edición
* [ ] Implementar eliminación
* [ ] Agregar validaciones
* [ ] Documentar características específicas de Angular 18

---

## ▶️ Ejecutar el proyecto

Desde `angular18_crud`:

```powershell
npm start
```

La aplicación estará disponible en:

```text
http://localhost:4200
```

---

## 📚 Angular Evolution Lab

Este proyecto es parte de un laboratorio personal para estudiar la evolución de Angular mediante una aplicación práctica común.

**Angular 18 → Angular 19 → Angular 20 → Angular 21 → Angular 22**

La idea es que cada proyecto sea funcional por sí mismo y que el código incluya comentarios explicando las APIs y patrones utilizados en cada versión.



---


Sí, y ojo: es **`.node-version`**, no `.node_modules`. 😄

La idea es que **cada proyecto le diga a `fnm` qué versión de Node usar automáticamente**.

Como queremos usar Node 22 en los cinco proyectos, puedes hacerlo así.

### 1. Desde la raíz

Estando en:

```text
C:\Users\jvaldebenito\dev\angular-evolution-lab
```

crea los archivos con PowerShell:

```powershell
"22" | Out-File -Encoding ascii angular18_crud\.node-version
"22" | Out-File -Encoding ascii angular19_crud\.node-version
"22" | Out-File -Encoding ascii angular20_crud\.node-version
"22" | Out-File -Encoding ascii angular21_crud\.node-version
"22" | Out-File -Encoding ascii angular22_crud\.node-version
```

Te quedará:

```text
angular-evolution-lab/
├── angular18_crud/
│   └── .node-version
├── angular19_crud/
│   └── .node-version
├── angular20_crud/
│   └── .node-version
├── angular21_crud/
│   └── .node-version
└── angular22_crud/
    └── .node-version
```

Y cada archivo contiene simplemente:

```text
22
```

### 2. Comprobar

Por ejemplo:

```powershell
Get-Content angular18_crud\.node-version
```

Debe mostrar:

```text
22
```

### 3. ¿Qué ganamos con esto?

Cuando entres al proyecto:

```powershell
cd angular18_crud
```

`fnm` puede detectar `.node-version` y utilizar Node 22.

Así, más adelante podemos incluso tener:

```text
Angular 18 → Node 22
Angular 19 → Node 22
Angular 20 → Node 22
Angular 21 → Node 22
Angular 22 → Node 22
```

Y **no tienes que acordarte manualmente de hacer `fnm use 22` cada vez**.

> Importante: para que el cambio sea automático al hacer `cd`, tu configuración de `fnm` en PowerShell debe tener habilitada su integración (`fnm env`). Si quieres, eso lo dejamos para cuando retomemos el proyecto, para no tocar nada más ahora.

**Yo sí dejaría los `.node-version` desde ya**. Es una muy buena práctica para este laboratorio porque hace que cada proyecto declare explícitamente el runtime que necesita.
