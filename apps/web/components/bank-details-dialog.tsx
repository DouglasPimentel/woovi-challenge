import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@woovi-challenge/ui/components/dialog";
import { Button } from "@woovi-challenge/ui/components/button";

export default function BankDetailsDialog() {
  return (
    <Dialog modal={true}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer" variant="outline" type="button">
          Bank Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[576px]">
        <DialogHeader className="space-y-4">
          <DialogTitle>Bank Details</DialogTitle>
          <DialogDescription>Information about your bank details.</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <div className="grid gap-2">
            <h3 className="text-sm font-bold">Account Holder</h3>
            <p>João da Silva</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="grid gap-2">
              <h3 className="text-sm font-bold">Agency</h3>
              <p>0001</p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-sm font-bold">Account Number</h3>
              <p>12345</p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-sm font-bold">Account Digit</h3>
              <p>9</p>
            </div>
          </div>
          <div className="grid gap-2">
            <h3 className="text-sm font-bold">Bank Account Type</h3>
            <p>Payment</p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="cursor-pointer" variant="outline" type="button">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
