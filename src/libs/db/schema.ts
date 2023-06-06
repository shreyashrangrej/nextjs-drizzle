import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    phone: varchar('phone', { length: 256 }),
});

export const post = pgTable('post', {
    id: serial('id').primaryKey(),
    title: text('title'),
    likes: integer('likes'),
    userId: integer('userId'),
})