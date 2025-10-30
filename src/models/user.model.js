import { pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  username: varchar("username", { length: 255 }),
  full_name: varchar("full_name", { length: 255 }),
  avatar_url: varchar("avatar_url", { length: 500 }),

  updated_at: timestamp("updated_at").defaultNow().notNull(),
});
