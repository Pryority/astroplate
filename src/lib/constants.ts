// import * as dotenv from "dotenv";
// import { createClient } from "@libsql/client";

// dotenv.config();
export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  description: string;
  price: number;
}
export interface Country {
  name: string;
  code: string;
  thumbnail: string;
  meals: Meal[];
}

const WEBSITE = {
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
  countries: [
    {
      name: "Canada",
      code: "CAD",
      thumbnail:
        "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",

      meals: [
        {
          strMeal: "BeaverTails",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
          idMeal: "52928",
          description: "Delicious Canadian pastry",
          price: 5.99,
        },
        {
          strMeal: "Breakfast Potatoes",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/1550441882.jpg",
          idMeal: "52965",
          description: "Savory breakfast potatoes",
          price: 4.49,
        },
        {
          strMeal: "Canadian Butter Tarts",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
          idMeal: "52923",
          description: "Sweet Canadian treat",
          price: 3.99,
        },
        {
          strMeal: "Montreal Smoked Meat",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg",
          idMeal: "52927",
          description: "Savory smoked meat sandwich",
          price: 8.99,
        },
        {
          strMeal: "Nanaimo Bars",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/vwuprt1511813703.jpg",
          idMeal: "52924",
          description: "Classic Canadian dessert bars",
          price: 6.99,
        },
        {
          strMeal: "Pate Chinois",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg",
          idMeal: "52930",
          description: "Canadian meat pie",
          price: 7.49,
        },
        {
          strMeal: "Pouding chomeur",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg",
          idMeal: "52932",
          description: "Traditional Canadian dessert",
          price: 4.99,
        },
        {
          strMeal: "Poutine",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
          idMeal: "52804",
          description: "Classic Canadian dish with fries, cheese, and gravy",
          price: 6.49,
        },
        {
          strMeal: "Rappie Pie",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg",
          idMeal: "52933",
          description: "Traditional Acadian meat pie",
          price: 7.99,
        },
        {
          strMeal: "Split Pea Soup",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/xxtsvx1511814083.jpg",
          idMeal: "52925",
          description: "Hearty Canadian pea soup",
          price: 5.49,
        },
        {
          strMeal: "Sugar Pie",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg",
          idMeal: "52931",
          description: "Sweet Canadian pie",
          price: 4.99,
        },
        {
          strMeal: "Timbits",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg",
          idMeal: "52929",
          description: "Canadian donut holes",
          price: 3.99,
        },
        {
          strMeal: "Tourtiere",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/ytpstt1511814614.jpg",
          idMeal: "52926",
          description: "Traditional Canadian meat pie",
          price: 8.49,
        },
      ],
    },
  ] as Country[],
};

export default WEBSITE;
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
