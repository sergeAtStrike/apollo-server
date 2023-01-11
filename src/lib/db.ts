import { PrismaClient, Prisma } from "@prisma/client";

type Args =
  | Prisma.Subset<Prisma.PrismaClientOptions, Prisma.PrismaClientOptions>
  | undefined;

export class PrismaClientSingletone extends PrismaClient {
  static instance: PrismaClient | undefined;
  constructor(args?: Args) {
    if (!!PrismaClientSingletone.instance) {
      return PrismaClientSingletone.instance;
    }

    super(args);
    PrismaClientSingletone.instance = this;
    return this;
  }
}

const prisma = new PrismaClientSingletone();
