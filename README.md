# searchpage

Document search from API: search, select document, download with or w/o image.

Notifications will pop up depends on search result.

## Run project with Docker

**build image**

```sh
docker build -t searchpage .
```

**run container**

```sh
docker run -p 8080:4173 searchpage   
```

## Project Setup local

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

