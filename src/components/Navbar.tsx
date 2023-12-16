import { WEBSITE } from "@/lib/constants";
import MenuBar from "./MenuBar";
import MobileMenuBar from "./MobileMenuBar";

const Navbar = () => {
  return (
    <div className="flex w-full snap-start justify-between gap-4 p-4 pt-8">
      <p className="tracking-tighter text-primary">
        <strong>{WEBSITE.name}</strong>
      </p>

      <MobileMenuBar />
      <MenuBar />
    </div>
  );
};

export default Navbar;
