import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="m-10">
   
      <SignInButton>signup</SignInButton>
    </div>
  );
}
