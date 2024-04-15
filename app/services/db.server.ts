import { PrismaClient } from "@prisma/client";


const dbPrismaConexao = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : [],
});

export default dbPrismaConexao;