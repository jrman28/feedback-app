import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export const Widget = () => {
  const [rating, setRating] = useState(3);

 const onSelectStar = (index) => {
    setRating(index + 1);
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button className="rounded-full shadow-lg hover:scale-105">
        Feedback
      </Button>
      <div>
        <h3>Send us your feedback</h3>
        <form className="space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback">Feedback</Label>
            <Textarea
              id="feedback"
              placeholder="Tell us what you think"
              className="min-h-[100px]"
            />
          </div>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={`h-5 w-5 cursor-pointer ${
                  rating > index
                    ? "fill-primary"
                    : "fill-muted stroke-muted-foreground"
                }`}
                onClick={() => onSelectStar(index)}
              />
            ))}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};


function StarIcon(props) {
  return (
    <svg
    {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
}