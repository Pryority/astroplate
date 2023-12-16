import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import React from "react";
import { ModeToggle } from "./ModeToggle";

type Props = {};

const MenuBar = (props: Props) => {
  return (
    <div className="hidden items-center gap-4 md:flex">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>About</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Education</MenubarItem>
            <MenubarItem>Hobbies</MenubarItem>
            <MenubarItem>Interests</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Projects</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Cool Tech Company</MenubarItem>
            <MenubarItem>The Ecommerce Store</MenubarItem>
            <MenubarItem>Music Mashup</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Skills</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>React</MenubarItem>
            <MenubarItem>Javascript</MenubarItem>
            <MenubarItem>HTML</MenubarItem>
            <MenubarItem>CSS</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Contact</MenubarTrigger>
          <MenubarContent alignOffset={-112}>
            <MenubarItem className="justify-end">Email</MenubarItem>
            <MenubarItem className="justify-end">Phone</MenubarItem>
            <MenubarItem className="justify-end">LinkedIn</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <ModeToggle />
    </div>
  );
};

export default MenuBar;
