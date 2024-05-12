import { z } from "zod";
import { CurrencySchema } from "../Schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
