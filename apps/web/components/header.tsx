import { Container } from "@woovi-challenge/ui/components/container";
import { Logo } from "@woovi-challenge/ui/components/logo";
import { Avatar, AvatarImage, AvatarFallback } from "@woovi-challenge/ui/components/avatar";
import { Button } from "@woovi-challenge/ui/components/button";

export default function Header() {
  return (
    <header className="w-full py-4 border-b border-solid border-gray-200">
      <Container className="flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center space-x-8">
          <div className="hidden md:block space-x-4">
            <Button className="cursor-pointer" variant="outline" type="button">
              Bank Details
            </Button>
            <Button className="cursor-pointer" variant="default" type="button">
              New Transaction
            </Button>
          </div>
          <div>
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://avatars.githubusercontent.com/u/32369243?v=4" />
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </Container>
    </header>
  );
}
