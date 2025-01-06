const Database = require("better-sqlite3");
const path = require("path");

const db = new Database(path.join(__dirname, "db.sqlite"));

db.exec(`CREATE TABLE IF NOT EXISTS snippets (
  id INTEGER PRIMARY KEY,
  language TEXT,
  code TEXT
);`);

const createSnippet = db.prepare(
  "INSERT INTO snippets (language, code) VALUES (?, ?)"
);

const findSnippets = db.prepare("SELECT * FROM snippets");

const findSnippetsByLanguage = db.prepare(
  "SELECT * FROM snippets WHERE language = ?"
);

const findSnippetById = db.prepare("SELECT * FROM snippets WHERE id = ?");

module.exports = {
  createSnippet,
  findSnippets,
  findSnippetsByLanguage,
  findSnippetById,
};
