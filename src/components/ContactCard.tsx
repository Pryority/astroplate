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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactCard() {
  return (
    <Card className="w-[350px] xl:w-[33svw]">
      <CardHeader>
        <CardTitle>Send Us a Message</CardTitle>
        <CardDescription>We May Take Up to 48 Hours to Respond</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your organization" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="reason">Reason</Label>
              <Select>
                <SelectTrigger id="reason">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="compliment">Compliment</SelectItem>
                  <SelectItem value="complaint">Complaint</SelectItem>
                  <SelectItem value="question">Question</SelectItem>
                  <SelectItem value="concern">Concern</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Type your message here." />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <a href="/">Cancel</a>
        </Button>
        <Button>Send</Button>
      </CardFooter>
    </Card>
  );
}
