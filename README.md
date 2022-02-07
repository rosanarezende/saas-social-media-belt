# SaaS (Software as a Service) | Social Media Belt

Desenvolvido durante o [D30](https://www.youtube.com/c/DevPlenoD30) promovido pelo DevPleno em fev/2022.

<br>

## Sobre

Software de gerenciamento de links compartilhados.
- Para informações detalhadas: [ABOUT.md](./ABOUT.md)

<br>

## Linguagens/tecnologias utilizadas


**Frontend**:
- Typescript
- [React](https://pt-br.reactjs.org/)
- [Next](https://nextjs.org/) (projeto criado com `npx create-next-app@latest --ts`)
- [Tailwindcss](https://tailwindcss.com/docs/guides/nextjs) (inclusive usamos um template do [Tail-kit](https://www.tailwind-kit.com/templates/datadashboard), adaptando o [html para jsx](https://magic.reactjs.net/htmltojsx.htm) )
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup) - [schema validation](https://react-hook-form.com/get-started#SchemaValidation)


**Backend**:
- [Docker](https://www.docker.com/)
- [Prisma](https://www.prisma.io/) - ORM.
- [PostegreSQL](https://www.postgresql.org/) - DB.
- [Cockroach](https://www.cockroachlabs.com/) - provedor.
- [Beekeeper Studio](https://www.beekeeperstudio.io/)

<br>

## Como rodar o projeto?

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
