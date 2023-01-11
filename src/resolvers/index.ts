import { ServerContextType } from "../types";

export const resolvers = {
  Query: {
    books: async (
      parent: any,
      args: any,
      ctx: ServerContextType,
      info: any
    ) => {
      const books = await ctx.db.book
        .findMany({
          select: {
            id: true,
            createdAt: true,
            title: true,
            description: true,
            image: true,
            author: {
              select: {
                id: true,
                createdAt: true,
                name: true,
                about: true,
                books: true,
              },
            },
          },
        })
        .finally(() => {
          ctx.db.$disconnect();
        });

      return books;
    },

    book: async (_: any, args: any, ctx: ServerContextType, info: any) => {
      const book = await ctx.db.book
        .findUnique({
          where: {
            id: args.id,
          },
          select: {
            id: true,
            createdAt: true,
            title: true,
            description: true,
            image: true,
            author: {
              select: {
                id: true,
                createdAt: true,
                name: true,
                about: true,
                books: {
                  select: {
                    id: true,
                    title: true,
                    image: true,
                  },
                },
              },
            },
          },
        })
        .finally(() => {
          ctx.db.$disconnect();
        });

      return book;
    },

    authors: async (
      parent: any,
      args: any,
      ctx: ServerContextType,
      info: any
    ) => {
      const authors = await ctx.db.author
        .findMany({
          select: {
            id: true,
            createdAt: true,
            name: true,
            about: true,
            books: {
              select: {
                id: true,
                createdAt: true,
                title: true,
                image: true,
              },
            },
          },
        })
        .finally(() => {
          ctx.db.$disconnect();
        });

      return authors;
    },

    author: async (
      parent: any,
      args: any,
      ctx: ServerContextType,
      info: any
    ) => {
      const author = await ctx.db.author
        .findUnique({
          where: { id: args.id },
          select: {
            id: true,
            createdAt: true,
            name: true,
            about: true,
            books: {
              select: {
                id: true,
                createdAt: true,
                title: true,
                description: true,
                image: true,
              },
            },
          },
        })
        .finally(() => {
          ctx.db.$disconnect();
        });

      return author;
    },
  },
};
