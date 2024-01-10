import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";

const CART_ITEMS = [
  {
    name: "Orange",
    usdPrice: "0.65",
    quantity: 4,
    onSale: false,
  },
  {
    name: "Chicken Breast",
    usdPrice: "8.99",
    quantity: 2,
    onSale: false,
  },
  {
    name: "Jasmine Rice",
    usdPrice: "7.49",
    quantity: 1,
    onSale: true,
  },
  {
    name: "Broccoli",
    usdPrice: "1.99",
    quantity: 3,
    onSale: true,
  },
  {
    name: "Salmon Fillet",
    usdPrice: "12.49",
    quantity: 1,
    onSale: false,
  },
  {
    name: "Avocado",
    usdPrice: "1.25",
    quantity: 5,
    onSale: true,
  },
  {
    name: "Ground Beef",
    usdPrice: "6.99",
    quantity: 2,
    onSale: false,
  },
  {
    name: "Pasta",
    usdPrice: "2.49",
    quantity: 4,
    onSale: false,
  },
  {
    name: "Tomatoes",
    usdPrice: "3.99",
    quantity: 2,
    onSale: true,
  },
  {
    name: "Lettuce",
    usdPrice: "1.29",
    quantity: 3,
    onSale: false,
  },
  {
    name: "Milk",
    usdPrice: "2.99",
    quantity: 2,
    onSale: false,
  },
  {
    name: "Cucumber",
    usdPrice: "0.99",
    quantity: 4,
    onSale: true,
  },
  {
    name: "Eggs",
    usdPrice: "1.79",
    quantity: 2,
    onSale: false,
  },
  {
    name: "Apples",
    usdPrice: "1.49",
    quantity: 3,
    onSale: true,
  },
  {
    name: "Cheese",
    usdPrice: "4.49",
    quantity: 1,
    onSale: false,
  },
  {
    name: "Bread",
    usdPrice: "2.19",
    quantity: 2,
    onSale: false,
  },
  {
    name: "Potatoes",
    usdPrice: "0.89",
    quantity: 5,
    onSale: true,
  },
  {
    name: "Ground Turkey",
    usdPrice: "5.49",
    quantity: 2,
    onSale: false,
  },
  {
    name: "Strawberries",
    usdPrice: "3.79",
    quantity: 1,
    onSale: false,
  },
  {
    name: "Ramen Noodles",
    usdPrice: "0.49",
    quantity: 6,
    onSale: true,
  },
];

export default function CartDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">View Cart</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Items in Your Cart</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="flex max-h-[40svh] w-full flex-col px-4">
            {CART_ITEMS.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <p className="font-light">{item.name}</p>
                <p className="font-extralight">
                  $<strong>{item.usdPrice}</strong>
                </p>
              </div>
            ))}
          </ScrollArea>
          <DrawerFooter>
            <Button>Checkout</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
