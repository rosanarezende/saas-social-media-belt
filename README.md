# SaaS (Software as a Service) | Social Media Belt

Desenvolvido durante o [D30](https://www.youtube.com/c/DevPlenoD30) promovido pelo DevPleno em fev/2022.

<br>

## Sobre

Um software de gerenciamento de links compartilhados.

### Objetivos:

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


### Dados:

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


### Regras (uso justo, e que favoreça o premium):
- tentar limitar o número de sign-ins
- limitar o número de domínios de destino
  - somente para: devpleno.com
- somente permitir algumas funcionalidades em contas premium

<br>

## Planejamento das telas

Desenvolvimento de um protótipo de baixa fidelidade no [Figma](https://www.figma.com/file/HKXZoDqn9z9OR7PjmQaOsB/Untitled?node-id=0%3A1)

![protótipo de baixa fidelidade](https://user-images.githubusercontent.com/45580434/152661489-57ac64a4-caae-4300-b621-aee6ade3586b.png)

<br>

## Linguagens/tecnologias utilizadas

- Typescript
- [React](https://pt-br.reactjs.org/)
- [Next](https://nextjs.org/) (projeto criado com `npx create-next-app@latest --ts`)
- [Tailwindcss](https://tailwindcss.com/docs/guides/nextjs) (inclusive usamos um template do [Tail-kit](https://www.tailwind-kit.com/templates/datadashboard), adaptando o [html para jsx](https://magic.reactjs.net/htmltojsx.htm) )
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup) - [schema validation](https://react-hook-form.com/get-started#SchemaValidation)

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
