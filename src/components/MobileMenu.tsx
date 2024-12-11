import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Button } from "./button";
import { AlignJustify } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "./Navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={(state) => setOpen(state)}>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <AlignJustify className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-7 flex px-1 space-y-1 flex-col">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                pathname === item.href
                  ? "bg-muted"
                  : "hover:bg-muted hover:bg-opacity-80",
                "group flex items-center px-2 py-2 text-sm font-normal rounded-md"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
