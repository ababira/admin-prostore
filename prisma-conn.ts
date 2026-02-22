import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./lib/generated/prisma/client";

  const DATABASE_URL =
    "postgresql://neondb_owner:npg_1QgYCFGEmvi9@ep-old-frost-agpzlwdh-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&connect_timeout=500";

  const adapter = new PrismaPg({ connectionString: DATABASE_URL });
  const PrismaConn = new PrismaClient({ adapter });


export default PrismaConn;