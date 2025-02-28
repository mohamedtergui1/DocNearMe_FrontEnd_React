import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import { Toaster } from "sonner";

import { AuthUserProvider } from "./context/AuthUserProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-right" expand={true} richColors visibleToasts={3} />
    <AuthUserProvider>
      <RouterProvider router={router} />
    </AuthUserProvider>
  </StrictMode>
);
