# Odd or Even Checker

A simple React + Vite project that takes a number input and validates whether it's an odd or even number using the [Meutru Odd API](https://mewtru.com/is-odd).

## Features

- Enter a number and check if it's odd or even
- Uses [Meutru Odd API](https://mewtru.com/is-odd) for validation
- Fast, modern UI built with React and Vite

## Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/69a6a7ae-7cfb-42c4-98c8-5942dce34fa6/deploy-status)](https://app.netlify.com/projects/splendorous-tiramisu-775404/deploys)

## Getting Started

1. **Clone the repo:**
  ```bash
  git clone https://github.com/your-username/odd-even-checker.git
  cd odd-even-checker
  ```

2. **Install dependencies:**
  ```bash
  npm install
  ```

3. **Run the development server:**
  ```bash
  npm run dev
  ```

4. **Open in browser:**  
  Visit `http://localhost:5173`

## API Reference

- **Endpoint:** `https://is-odd-api.mewtru.com/v1/numbers/{number}`
`
- **Usage:** Send a GET request with a `number` query parameter.

Example:
```
GET https://is-odd-api.mewtru.com/v1/numbers/5

```

## Deployment

- **Netlify**
