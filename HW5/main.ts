import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  const pathname = ctx.request.url.pathname;
  console.log("使用者請求的網址:", pathname);

  if (pathname === "/") {
    ctx.response.body = `
      <html>
        <body>
          <h1>我的自我介紹</h1>
          <ul>
            <li><a href="/name">姓名</a></li>
            <li><a href="/age">年齡</a></li>
            <li><a href="/gender">性別</a></li>
            <li><a href="/studentnumber">學號</a></li>
          </ul>
        </body>
      </html>
    `;
  } else if (pathname === "/name") {
    ctx.response.body = "陳嘉銘";
  } else if (pathname === "/age") {
    ctx.response.body = "19";
  } else if (pathname === "/gender") {
    ctx.response.body = "男";
  } else if (pathname === "/studentnumber") {
    ctx.response.body = "111310529";
  } else {
    ctx.response.status = 404;
    ctx.response.body = "404 Not Found - 沒有這個頁面喔～";
  }
});

console.log("伺服器啟動中：http://127.0.0.1:8000");
await app.listen({ port: 8000 });
