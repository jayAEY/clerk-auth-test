// import createStore from "react-auth-kit/createStore";
// import AuthProvider from "react-auth-kit/AuthProvider";
// import RouteComponent from "./routes";

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) throw new Error("Missing publishable key");

// import { ClerkProvider } from "@clerk/clerk-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const store = createStore({
//   authName: "_auth",
//   authType: "cookie",
//   cookieDomain: window.location.hostname,
//   cookieSecure: window.location.protocol === "https:",
// });

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export function App() {
  return (
    <main className="h-screen w-screen flex justify-center items-center text-white bg-primary">
      <header>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </header>
    </main>
    // <AuthProvider store={store}>
    // <RoutesComponent></RoutesComponent>
    // <main className="h-screen w-screen flex justify-center items-center bg-primary">
    //   <Card className="w-[350px] ">
    //     <CardHeader>
    //       <CardTitle>Sign In</CardTitle>
    //       <CardDescription>Enter Username and Password</CardDescription>
    //     </CardHeader>
    //     <CardContent>
    //       <form>
    //         <div className="grid w-full items-center gap-4">
    //           <div className="flex flex-col space-y-1.5">
    //             <Label htmlFor="email">Name</Label>
    //             <Input
    //               id="email"
    //               placeholder="Name"
    //             />
    //           </div>
    //           <div className="flex flex-col space-y-1.5">
    //             <Label htmlFor="password">Password</Label>
    //             <Input
    //               id="password"
    //               type="password"
    //               placeholder="Enter Password"
    //             />
    //           </div>
    //         </div>
    //       </form>
    //     </CardContent>
    //     <CardFooter className="flex justify-between">
    //       <Button variant="outline">Register</Button>
    //       <Button>Sign In</Button>
    //     </CardFooter>
    //   </Card>
    // </main>
    // </AuthProvider>
  );
}

export default App;
