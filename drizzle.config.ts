import type { Config } from 'drizzle-kit'

export default {
  schema: './src/libs/db/schema.ts',
  out: './src/libs/db/migrations',
  connectionString: process.env.DATABASE_URL,
  breakpoints: true,
} satisfies Config