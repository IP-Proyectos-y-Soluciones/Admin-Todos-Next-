# Development

Pasos para levantar la app en desarrollo

1. Levantar la DB

```text

docker compose up -d

```

2. Renombrar el archivo `.env.template` a `.env`
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la DB local](localhost:3000/api/seed)





## Prisma Command

```text

npx prisma init
npx prisma migrate dev
npx prisma generate

```

## Prod

## Stage
