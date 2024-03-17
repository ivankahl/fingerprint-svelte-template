




CREATE TABLE "users" (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  hashed_password TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  visitor_id TEXT NOT NULL
)

CREATE TABLE "user_sessions" (
  id TEXT PRIMARY KEY,
  expires_at TIMESTAMPTZ NOT NULL,
  user_id TEXT NOT NULL REFERENCES "users"("id")
)




