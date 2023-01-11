import { IncomingMessage } from "http";

import { PrismaClientSingletone } from "../lib/db";

export type ServerContextType = {
  req: IncomingMessage;
  db: InstanceType<typeof PrismaClientSingletone>;
};
