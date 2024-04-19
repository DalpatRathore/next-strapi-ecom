import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
const ContactUs = () => {
  return (
    <div className="flex items-center justify-center gap-5 h-[85%] w-full">
      <Card className="w-full max-w-lg space-y-5">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Us</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            porro iure ipsam aut cumque?
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="name" placeholder="johe Doe" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Message</Label>
            <Textarea placeholder="Type your message here." />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            Send <Send className="w-4 h-4 ml-2"></Send>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactUs;
