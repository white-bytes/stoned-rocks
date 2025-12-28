import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url, locals }) => {
  // @ts-ignore - runtime.env is injected by Cloudflare adapter
  const { KV } = locals.runtime.env;
  const path = url.searchParams.get('path');
  
  if (!path) {
    return new Response('Path parameter is required', { status: 400 });
  }

  const key = `views:${path}`;
  try {
    const currentViews = parseInt(await KV.get(key) || '0');
    const newViews = currentViews + 1;
    await KV.put(key, newViews.toString());

    return new Response(JSON.stringify({ views: newViews }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : 'Unknown error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
