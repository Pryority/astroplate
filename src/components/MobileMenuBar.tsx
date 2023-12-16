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

type Props = {};

const MobileMenuBar = (props: Props) => {
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
            <SheetDescription>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>About</AccordionTrigger>
                  <AccordionContent className="text-left">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Projects</AccordionTrigger>
                  <AccordionContent className="text-left">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Skills</AccordionTrigger>
                  <AccordionContent className="text-left">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Contact</AccordionTrigger>
                  <AccordionContent className="text-left">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenuBar;
