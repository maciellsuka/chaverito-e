import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ShoppingBagIcon } from "lucide-react";

export const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <ShoppingBagIcon />
        </Button>
      </SheetTrigger>
      <SheetContent></SheetContent>
    </Sheet>
  );
};
