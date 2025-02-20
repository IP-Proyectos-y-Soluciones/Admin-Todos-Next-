# Admins-Todos

## Development

Pasos para levantar la app en desarrollo

1. Levantar la DB.

```bash
docker compose up -d
```

2. Crear una copia de el archivo `.env.template`  y renombrarlo a `.env`.
3. Reemplazar las variables de entorno.
4. Ejecutar el comando `npm install`.
5. Ejecutar el comando `npm run dev`.
6. Ejecutar los siguientes comandos de prisma:

```bash
npx prisma migrate dev
npx prisma generate
```

7. Ejecutar el SEED para [crear la DB local](localhost:3000/api/seed)

## Nota Usuario Por defecto

__Email:__ <test1@correo.com>
__Password:__ 123456

## Prisma Command

```bash
npx prisma init
npx prisma migrate dev
npx prisma generate
```

## Prod

## Stage

## Objetivos

El objetivo principal de esta aplicación es crear un RESTful API básico en Next, proporcionando una base sólida para trabajar a través de una "application programming interface".

## Funcionalidades

1. **READ:** Implementación de operaciones de lectura.
2. **Paginaciones:** Soporte para la paginación de resultados.
3. **Update:** Actualización de datos a través de la API.
4. **Post:** Creación de nuevos elementos mediante la API.
5. **SEED:** Población inicial de datos.
6. **Docker:** Uso de contenedores Docker para la implementación.
7. **Postgres:** Integración con la base de datos PostgreSQL.
8. **Prisma:** Utilización de Prisma como ORM para la manipulación de la base de datos.
9. **Prisma + Next:** Integración de Prisma con Next.js para una experiencia de desarrollo fluida.
10. **Yup - Validador:** Validación de datos utilizando Yup.
11. **Consumo de nuestro RESTful API:** Aprender a consumir los endpoints de la API de manera efectiva.
12. **Client y Server Side Rendering:** Comprender la diferencia y la aplicación de ambas técnicas.
13. **Refresh de una ruta sin afectar estados:** Explorar las nuevas capacidades de Next.js para actualizar rutas sin afectar los estados existentes.
14. **Prisma pull y push para actualizar modelos:** Utilizar Prisma para actualizar y mantener modelos de base de datos.

## Valor Educativo

Además de proporcionar una API robusta, esta aplicación tiene un alto valor educativo.

Es crucial entender los conceptos, ya que eventualmente se encontrarán en situaciones que se requiere de este conocimiento.
