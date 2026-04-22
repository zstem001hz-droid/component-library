# Component Library - Components and Props
**Author:** Zac White

## Overview
A reusable React component library built with TypeScript and Tailwind CSS. 
This library demonstrates component-based architecture, TypeScript interfaces, 
prop handling, and component composition.

## Tech Stack
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Vite 8](https://vitejs.dev/) — Build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first styling

## Components

### AlertBox
Displays styled alert messages. Supports `success`, `error`, `warning`, and `info` types. 

**Example:**
```tsx
<AlertBox
  type="success"
  message="Profile updated successfully!"
  onClose={() => setShowAlert(false)}
>
  <p>You can now continue using the application.</p>
</AlertBox>
```

### UserProfileCard
Displays user profile information. Configurable email, role, avatar, and edit handler.

**Example:**
```tsx
<UserProfileCard
  user={user}
  showEmail={true}
  showRole={true}
  onEdit={(userId) => console.log('Editing:', userId)}
>
  <p>Last login: 2 hours ago</p>
</UserProfileCard>
```

### ProductDisplay
Displays product information. Configurable description, stock status, and cart handler. 

**Example:**
```tsx
<ProductDisplay
  product={product}
  showDescription={true}
  showStockStatus={true}
  onAddToCart={(id) => console.log('Added:', id)}
>
  <p>Free shipping available</p>
</ProductDisplay>
```

## Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## References
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

## Reflections

Optional props were marked with `?` in the TypeScript interfaces and given default values where appropriate (e.g. `showEmail = true`). Components conditionally render elements using `&&` when optional handlers like `onClose` or `onEdit` are not provided. 

Each interface was designed around what the component strictly needs to function vs. what's configurable. Required props have no `?`, optional props do. Union types like `'success' | 'error' | 'warning' | 'info'` constrain values to only what's valid.

All components use TypeScript interfaces for props. The `import type` syntax was required due to `verbatimModuleSyntax` being enabled in `tsconfig.json`. TypeScript caught errors at compile time rather than runtime. 

Wiring all three components together in `App.tsx` required managing shared state with `useState` and passing callbacks correctly between parent and child components. The `children` prop pattern was key for flexible layouts. 