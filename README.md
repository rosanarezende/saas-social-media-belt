# SaaS (Software as a Service) | Social Media Belt

Desenvolvido durante o [D30](https://www.youtube.com/c/DevPlenoD30) promovido pelo DevPleno em fev/2022.

<br>

## Sobre

Software de gerenciamento de links compartilhados.
- Para informações detalhadas: [ABOUT.md](./ABOUT.md)

<br>

## Linguagens/tecnologias utilizadas

**Frontend**:
- [TypeScript](https://www.typescriptlang.org/): superset de JavaScript
- [React](https://pt-br.reactjs.org/)
- [NextJS](https://nextjs.org/): Framework React (projeto criado com `npx create-next-app@latest --ts`)
- [Vercel](https://vercel.com/) - [platforms](https://github.com/vercel/platforms): para deployment
- [Tailwindcss](https://tailwindcss.com/docs/guides/nextjs): para estilização/CSS (inclusive usamos um template do [Tail-kit](https://www.tailwind-kit.com/templates/datadashboard), adaptando o [html para jsx](https://magic.reactjs.net/htmltojsx.htm) )
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup) - [schema validation](https://react-hook-form.com/get-started#SchemaValidation)


**Backend**:
- [Docker](https://www.docker.com/)
- [Prisma](https://www.prisma.io/): ORM (para acesso ao DB)
- [PostegreSQL](https://www.postgresql.org/) - DB.
- [Cockroach](https://www.cockroachlabs.com/) - provedor.
- [Beekeeper Studio](https://www.beekeeperstudio.io/)

<br>

## Como rodar o projeto?

Primeiro, rode o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

Em seguida, abra [http://localhost:3000](http://localhost:3000) com o browser para visualizar o resultado.
