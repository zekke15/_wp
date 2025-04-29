import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("blog.db");

db.query(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    time DATETIME DEFAULT CURRENT_TIMESTAMP,
    title TEXT,
    body TEXT
  )
`);

const posts = [
  { title: "第一則貼文", body: "大家好，這是我的第一篇文章。" },
  { title: "第二則貼文", body: "我正在學習 Deno 和 SQLite！" },
  { title: "第三則貼文", body: "希望這些內容對你有幫助。" }
];

for (const post of posts) {
  db.query("INSERT INTO posts (title, body) VALUES (?, ?)", [post.title, post.body]);
}

for (const [id, time, title, body] of db.query("SELECT id, time, title, body FROM posts")) {
  console.log(id, time, title, body);
}

db.close();