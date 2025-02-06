import type { APIRoute } from 'astro';
import { saveContentFile } from '../../dash/editor';

export const POST: APIRoute = async ({ request }) => {
  if (import.meta.env.PROD) {
    return new Response('Not allowed in production', { status: 403 });
  }

  try {
    const { filePath, content } = await request.json();
    
    // Validate required fields
    if (!filePath || !content) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Only allow editing markdown files in the blog directory
    if (!filePath.startsWith('blog/') || !filePath.endsWith('.md')) {
      return new Response(
        JSON.stringify({ error: 'Invalid file path' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    await saveContentFile(filePath, content);
    
    return new Response(
      JSON.stringify({ success: true }), 
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to save content' }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};