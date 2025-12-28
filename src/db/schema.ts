import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const feedback = sqliteTable('feedback', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  pagePath: text('page_path').notNull(),
  rating: integer('rating').notNull(), // 1-5
  comment: text('comment'),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});
