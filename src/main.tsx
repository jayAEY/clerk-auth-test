// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";

// // Import the layouts
// import RootLayout from "./layouts/root-layout";
// import DashboardLayout from "./layouts/dashboard-layout";

// // Import the components
// import IndexPage from "./routes";
// import ContactPage from "./routes/contact";
// import SignInPage from "./routes/sign-in";
// import SignUpPage from "./routes/sign-up";
// import DashboardPage from "./routes/dashboard";
// import InvoicesPage from "./routes/dashboard.invoices";

// const router = createBrowserRouter([
//   {
//     element: <RootLayout />,
//     children: [
//       { path: "/", element: <IndexPage /> },
//       { path: "/contact", element: <ContactPage /> },
//       { path: "/sign-in", element: <SignInPage /> },
//       { path: "/sign-up", element: <SignUpPage /> },
//       {
//         element: <DashboardLayout />,
//         path: "dashboard",
//         children: [
//           { path: "/dashboard", element: <DashboardPage /> },
//           { path: "/dashboard/invoices", element: <InvoicesPage /> },
//         ],
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) throw new Error("Missing publishable key");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{ baseTheme: dark }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
