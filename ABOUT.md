# SaaS (Software as a Service) | Social Media Belt

Software de gerenciamento de links compartilhados.

OBS: será **multi tenant**, ou seja, uma base de código atendendo todos os clientes.

<br>

## Objetivos

- Deve ter (*must have*):
  - Gerenciar os links
  - Agrupá-los
  - Gerenciar ou gerar as UTMs
  - Página pública com todos os links (selecionados)
  - Encurtar um link
    - #ex: vai.devpleno.co/fsm-insta -> go.devpleno.com/formacaofsm?utm=lalala

- Seria bom ter também (*nice to have*):
  - Domínio próprio
  - Analytics: quantos clicks, de onde vieram...
  - Link nativo: abrir o app direto (#ex: one link...)
  - p2p ou banco de imagens (para poder enviar do PC para o celular)

<br>

## Dados

- Tenants (tenant):
  - id, slug (devpleno), plan, name, image (logo)
- TenantUser:
  - tenant_id, user_id, role
- TenantDomain:
  - id, tenant_id, domain, status
- User:
  - id, email, name
- Subscription:
  - TBD (_to be defined_)
- UTMs:
  - utm_source, utm_media, ...
- Link
  - id, tenant_id, name, public_name, destination, slug, show_on_public
- LinkGroup:
  - id, tenant_id, name (n:m - Link), show_on_public
- ShareableLink:
  - id, tenant_id, link_id, utm_id, analytics

<br>

## Regras (uso justo, e que favoreça o premium)

- limitar o número de sign-ins
  - podemos tentar, mas não é certeza que conseguiremos
- limitar o número de domínios de destino
  - somente para 'devpleno.com', por exemplo, e links de outras plataformas, como youtube
  - isso ajudaria a limitar casos de mau uso, como uma agência colocar todos os domínios de seus clientes em uma única conta
  - no início a gente pode até não limitar, mas começar a analisar isso... e se necessário mudar os termos de serviço e implementar a limitação
- somente permitir algumas funcionalidades em contas premium
  - #ex: link nativo

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

Para simplificar os testes, precisamos ter um **postgres rodando local**:

```
docker run --name basic-postgres --rm -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=123456 -e PGDATA=/var/lib/postgresql/data/pgdata -v /tmp:/var/lib/postgresql/data -p 5432:5432 -it postgres:14.1-alpine
```
  - no `.env` colocaremos o DATABASE_URL, por exemplo: `"postgresql://postgres:123456@localhost:5432/socialmediabelt?schema=public"`

- Usamos **caminhos relativos**: em `tsconfig.json`, dentro de _compilerOptions_, acrescentando a opção `"baseUrl": "."` -> ver [doc](https://nextjs.org/docs/advanced-features/module-path-aliases) do Next

- Adicionamos **autoformatação**, criando o arquivo `.prettierrc` e incluindo no no `settings.json` do vscode:

```json
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
},
```

<br>

Para a autenticação com **NextAuth** usamos o Github como provider. Foi necessário...

---- VERSÃO COM ERRO

 criar um novo app: [https://github.com/settings/apps/my-social-media-belt](https://github.com/settings/apps/my-social-media-belt)
- entrar [GitHub Apps](https://github.com/settings/apps)
- clicar em `New GitHub App`, epreencher dados, como:
  - GitHub App name: Social Media Belt
  - Homepage URL: http://localhost:3000/
  - Webhook URL: http://localhost:3000/api/auth/callback/github (não dá pra usar localhost... resolver isso mais pra frente - [exemplo](https://hookdeck.com/webhooks/platforms/getting-started-github-webhooks#what-are-github-webhooks))
  - Where can this GitHub App be installed? Any account
- vão ser gerados valores de GITHUB_ID e GITHUB_SECRET, que colocaremos no arquivo `.env`
- também é necessário inserir no `.env` [NEXTAUTH_URL](https://next-auth.js.org/configuration/options)

---- SEGUNDA VERSÃO (essa correta) ---

... foi necessário usar o [OAuth application](https://github.com/settings/developers)
- clicar em `Register a new application`
  - Application name:Social Media Belt
  - Homepage URL: http://localhost:3000
  - Authorization callback URL: http://localhost:3000/api/auth/callback/github
- aí sim gerar o GITHUB_SECRET e o GITHUB_ID que será colocado no `.env`

--- mas continuou dando erro ----

agora reclama de NEXTAUTH_URL, então colocamos http://localhost:3000

mas faltava também ir no arquivo `pages/api/auth/[...nextauth].ts` e comentar o jwt


<br>

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

