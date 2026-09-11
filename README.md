# 🐉 Dragon News

A modern news website project built with **Next.js** and **Tailwind CSS**.

## 🚧 Current Progress

The project is currently under development. So far, the initial website structure and common UI components have been started.

### ✅ Completed Features

#### 1. Header Section

Created a clean and centered header containing:

- Dragon News logo
- News tagline
- Dynamic current date
- Responsive layout
- `next/image` for optimized image handling

The header displays:

> Journalism Without Fear or Favour

The date is generated dynamically using JavaScript's built-in `Date` object, so it updates automatically.

#### 2. Dynamic Date

The current date is generated using:

```js
const today = new Date();

const date = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
});