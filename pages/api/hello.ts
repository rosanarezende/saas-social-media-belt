// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Fazendo buscas no DB com prisma
// https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/querying-the-database-typescript-postgres
import prisma from 'lib/prisma'

// type Data = {
//   name: string
// } 

type Tenant = {
  id: number
  name: string
  slug: string
  plan: string
  image: string
  createdAt: Date
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tenant[]>
  // res: NextApiResponse<Data>
) {
  // quando rodamos o migrate, o prisma automaticamente rodou um generate e criou um crud para accounts
  const tenants = await prisma.tenant.findMany()

  // res.status(200).json({ name: 'John Doe' })
  res.status(200).json(tenants)
}  

