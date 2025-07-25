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
import { Input } from "@woovi-challenge/ui/components/input";

export default function NewTransactionDialog() {
  return (
    <Dialog modal={true}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer" variant="default" type="button">
          New Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[576px]">
        <DialogHeader className="space-y-4">
          <DialogTitle>New Transaction</DialogTitle>
          <DialogDescription>Enter the details to make a new transfer.</DialogDescription>
        </DialogHeader>
        <form className="mt-4 space-y-6">
          <div className="space-y-6">
            <div className="grid gap-2">
              <label className="text-sm font-bold" htmlFor="agencyNumber">
                Agency Number
              </label>
              <Input
                type="text"
                name="agencyNumber"
                id="agencyNumber"
                placeholder="Agency number"
                className="w-full"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-2">
                <label className="text-sm font-bold" htmlFor="accountNumber">
                  Account Number
                </label>
                <Input
                  type="text"
                  name="accountNumber"
                  id="accountNumber"
                  placeholder="Account number"
                  className="w-full"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-bold" htmlFor="agencyDigit">
                  Account Digit
                </label>
                <Input
                  type="text"
                  name="agencyDigit"
                  id="agencyDigit"
                  placeholder="Account digit"
                  className="w-full"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-bold" htmlFor="amount">
                Amount
              </label>
              <Input type="number" name="amount" id="amount" placeholder="Amount" className="w-full" required />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="cursor-pointer" variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button className="cursor-pointer" type="submit">
              Send
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
