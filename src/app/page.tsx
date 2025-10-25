import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
      <div>
        <h1 className="text-rose-600">Hello World</h1>
        <Button>Click Me</Button>
      </div>
  );
}
