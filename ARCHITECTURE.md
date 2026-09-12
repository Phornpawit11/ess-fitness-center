# Architecture

The application is organized feature-first. Each business capability owns its routes, UI, use cases, domain models, and external implementations.

```
src/app/
  core/                 # Non-business, global features (auth, layout, interceptors)
  shared/               # Reusable UI and utilities with no business logic
  features/
    launcher/
      components/       # UI used only by the launcher feature
      pages/            # Routed layout shell
      launcher.routes.ts
    news/
      pages/
      news.routes.ts
    profile/
      pages/
      profile.routes.ts
    qrcode/
      pages/
      qrcode.routes.ts
```

`core/auth` owns authentication models, services, guards, and its related pages. Feature folders own their pages plus related components, services, models, directives, and pipes. Keep only presentation-agnostic, business-agnostic code in `shared`; business-aware reusable code belongs to its business feature.