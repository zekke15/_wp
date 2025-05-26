import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './Render.js'

const posts = [
  {
    id: 0,
    title: 'Exam week has arrived',
    body: 'Just entered the new semester, this campus is really very fast to do the midterm exam. There are many fears that students have to face, it`s always like this huff.',
    created_at: new Date()
  },
  {
    id: 1,
    title: 'Does anyone have this?',
    body: 'Next week I will take algebra exam. Many seniors say that the exam will be very hard, scared tbh. But they say the teacher takes questions from the book "Mathematics of Algebra, Edition 2020. By Edward Fudgniberd". If someone have this book, pls contact to me.',
    created_at: new Date()
  }
];

const router = new Router();

router
  .get('/', list)
  .get('/post/new', add)
  .get('/post/:id', show)
  .post('/post', create);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

async function list(ctx) {
  ctx.response.body = render.list(posts);
}

async function add(ctx) {
  ctx.response.body = render.newPost();
}

async function show(ctx) {
  const id = ctx.params.id;
  const post = posts[id];
  if (!post) ctx.throw(404, 'Invalid post ID');
  ctx.response.body = render.show(post);
}

async function create(ctx) {
  const body = ctx.request.body();
  if (body.type === "form") {
    const pairs = await body.value;
    const post = {};
    for (const [key, value] of pairs) {
      post[key] = value;
    }
    post.created_at = new Date(); // 記錄建立時間
    post.id = posts.length;
    posts.push(post);
    ctx.response.redirect('/');
  }
}

console.log('Server run at http://127.0.0.1:8000');
await app.listen({ port: 8000 });
