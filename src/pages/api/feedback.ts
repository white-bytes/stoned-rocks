import type { APIRoute } from 'astro';
import { drizzle } from 'drizzle-orm/d1';
import { feedback } from '../../db/schema';

export const POST: APIRoute = async ({ request, locals }) => {
  // @ts-ignore - runtime.env is injected by Cloudflare adapter
  const { DB } = locals.runtime.env;
  const db = drizzle(DB);
  
  try {
    const data = await request.json();
    await db.insert(feedback).values({
      pagePath: data.path,
      rating: data.rating,
      comment: data.comment,
    });
    return new Response(JSON.stringify({ success: true }), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : 'Unknown error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
