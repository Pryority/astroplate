import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ModeToggle from "@/components/Header/ModeToggle";
import WEBSITE from "@/lib/constants";

const MobileMenuBar = () => {
  return (
    <div className="relative flex items-center md:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="flex flex-col gap-1">
            <div className="h-[2px] w-[20px] rounded-lg bg-primary" />
            <div className="h-[2px] w-[20px] rounded-lg bg-primary" />
            <div className="h-[2px] w-[20px] rounded-lg bg-primary" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-left">Navigate</SheetTitle>
          </SheetHeader>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="py-4 text-start font-medium"
            >
              <a href="/">Home</a>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shop</AccordionTrigger>
              <AccordionContent className="text-left">
                <a href={`/shop`}>All Countries</a>
              </AccordionContent>
              {WEBSITE.countries.map((c) => (
                <AccordionContent className="text-left">
                  <a href={`/shop/${c.name.toLowerCase()}`}>{c.name}</a>
                </AccordionContent>
              ))}
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="py-4 text-start font-medium"
            >
              <a href="/about">About</a>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="py-4 text-start font-medium"
            >
              <a href="/contact">Contact</a>
            </AccordionItem>
          </Accordion>
          <div className="absolute bottom-4 right-2">
            <ModeToggle />
          </div>
        </SheetContent>
        <SheetTrigger></SheetTrigger>
      </Sheet>
    </div>
  );
};

export default MobileMenuBar;
