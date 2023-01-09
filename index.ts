import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";

config({});

const prisma = new PrismaClient();

const main = async () => {
  try {
    const users = await prisma.user.findMany();
    console.log({ users });
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};

main();
