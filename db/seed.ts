import { PrismaClient } from "@/lib/generated/prisma/client";
import sampleData from "./sample-data";
import { PrismaPg } from "@prisma/adapter-pg";


export const DATABASE_URL =
    "postgresql://neondb_owner:npg_1QgYCFGEmvi9@ep-old-frost-agpzlwdh-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&connect_timeout=500";


async function main() {
  
  const adapter = new PrismaPg({ connectionString: DATABASE_URL });
  const prisma = new PrismaClient({ adapter });

  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });
}

main();
