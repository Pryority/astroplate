// import * as dotenv from "dotenv";
// import { createClient } from "@libsql/client";

// dotenv.config();

export const WEBSITE = {
  name: "Astroplate",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam quas numquam molestias laborum blanditiis!",
  header: {
    shop: [
      {
        title: "Frying Oil Management",
        href: "/shop/frying-hardware",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Marine Hardware",
        href: "/shop/marine-hardware",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        title: "Plumbing Hardware",
        href: "/shop/plumbing-hardware",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
    ],
  },
};

// export const DATABASE_URL = process.env.TURSO_DB_URL!;
// export const DATABASE_TOKEN = process.env.TURSO_DB_AUTH_TOKEN;
// export const ENVIRONMENT = process.env.NODE_ENV;

// export const REMOTE_TURSO_CLIENT = createClient({
//   url: DATABASE_URL,
//   authToken: DATABASE_TOKEN,
// });

// export const LOCAL_TURSO_CLIENT = createClient({
//   url: "http://127.0.0.1:8080",
//   authToken: "token",
// });
