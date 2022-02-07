# SaaS (Software as a Service) | Social Media Belt

Software de gerenciamento de links compartilhados.

<br>

## Objetivos

- Must have:
  - Gerenciar os links
  - Agrupá-los
  - Gerenciar ou gerar as UTMs
  - Página pública com todos os links (selecionados)
  - Encurtar um link

- Nice to have:
  - Domínio próprio
  - Analytics: quantos clicks, de onde vieram...
  - Link nativo: abrir o app direto (one link...)
  - p2p ou banco de imagens (poder enviar do PC para o celular)

  vai.devpleno.co/fsm-insta -> go.devpleno.com/formacaofsm?utm=lalala

<br>

## Dados

- Accounts(tenant)
  - id, slug (devpleno), plan, name, image (logo)
- AccountUser:
  - account_id, user_id, role
- Subscription:
  - TBD (_to be defined_)
- User:
  - id, email, name
- Link
  - id, account_id, name, public_name, destination, slug, show_on_public
- UTMs:
  - utm_source, utm_media, ...
- LinkGroup:
  - id, account_id, name (n:m - Link), show_on_public
- ShareableLink:
  - id, account_id, link_id, utm_id, analytics

<br>

## Regras (uso justo, e que favoreça o premium)
- tentar limitar o número de sign-ins
- limitar o número de domínios de destino
  - somente para: devpleno.com
- somente permitir algumas funcionalidades em contas premium

<br>

## Planejamento das telas

Desenvolvimento de um protótipo de baixa fidelidade no [Figma](https://www.figma.com/file/HKXZoDqn9z9OR7PjmQaOsB/Untitled?node-id=0%3A1)

![protótipo de baixa fidelidade](https://user-images.githubusercontent.com/45580434/152661489-57ac64a4-caae-4300-b621-aee6ade3586b.png)

<br>

## Banco de dados

O objetivo desse projeto não é vender, mas colocá-lo no ar e aprender com isso.

Para escolha do banco de dados, podemos pensar em:
- experiência da equipe
- alguma funcionalidade que importa para o projeto
- como hospedar? por exemplo, colocar no ar com uma opção não tão cara
- temos alguém (um DBA ou time de infra, por exemplo) pra cuidar do banco?

Nesse projeto optamos por executar o banco local de uma forma (com Docker), mas  hospedar (colocar no ar) de outra, até por não termos alguém pra cuidar desse banco.

Há uma série de provedores de banco de dados, como por exemplo:
- [Cockroach](https://www.cockroachlabs.com/), que tem um DB Postgres, além de ter uma versão serverless interessante, que podemos iniciar de forma gratuita e é fácil de escalar.
- [Atlas](https://www.mongodb.com/atlas/database), com MongoDB, que também tem versão serverless, com preço também interessante e deixa claro como escalar.
- [Fauna](https://fauna.com/) - para GraphQL.
- [Firebase](https://firebase.google.com/)
- [PlanetScale](https://planetscale.com/), que é MySQL, mas tem limitação de apenas 1 banco de dados gratuito por organização.
- etc.

Para podermos usar o ORM [Prisma](https://www.prisma.io/), escolhemos um dos banco de dados que ele suporta, o [PostgreSQL](https://www.postgresql.org/), e consequentemente optamos pelo provedor [Cockroach](https://www.cockroachlabs.com/).

E localmente iremos manipular o banco com o [Beekeeper Studio](https://www.beekeeperstudio.io/).

<br>

**Dicas**:

```
docker run --name basic-postgres --rm -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=123456 -e PGDATA=/var/lib/postgresql/data/pgdata -v /tmp:/var/lib/postgresql/data -p 5432:5432 -it postgres:14.1-alpine
```

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
