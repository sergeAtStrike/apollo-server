import { config } from "dotenv";

import { PrismaClientSingletone } from "./utils";

config({});

const prisma = new PrismaClientSingletone();

const main = async () => {
  try {
    // const user = await prisma.user.deleteMany();

    // const users = await prisma.user.createMany({
    //   data: [
    //     {
    //       name: "Serge",
    //       age: 47,
    //       email: "sergeb@gmail.com",
    //     },
    //     {
    //       name: "Johnny Pony",
    //       age: 39,
    //       email: "j.pony@gmail.com",
    //     },
    //   ],
    // });

    // const user = await prisma.user.update({
    //   where: {
    //     email: "j.pony@gmail.com",
    //   },
    //   data: {
    //     userPreferences: {
    //       create: {
    //         emailUpdates: true,
    //       },
    //     },
    //   },
    // });

    const users = await prisma.user.findMany({
      where: {
        userPreferences: null,
      },
    });

    // const user = await prisma.user.findUnique({
    //   where: { email: "sergeb@gmail.com" },
    //   select: {
    //     email: true,
    //     userPreferences: {
    //       select: {
    //         emailUpdates: true,
    //       },
    //     },
    //   },
    // });

    console.log({ users });
  } catch (error) {
    console.log((error as Error).message ?? "Error occurred.");
  } finally {
    prisma.$disconnect();
  }
};

main();
