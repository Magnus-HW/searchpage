# searchpage

Document search from API: search, select document, download with or w/o image.

Notifications will pop up depends on search result.

P.S. image in documents won't load because region restriction

https://github.com/Magnus-HW/searchpage/assets/31007191/6eab7803-4fdb-4f73-b90f-1d282c6ab9ad


## Project Setup via Docker

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

