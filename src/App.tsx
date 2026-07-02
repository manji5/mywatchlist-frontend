import { Toaster } from "src/components/ui/sonner";

import { AppRouter } from "@/app/router";

export function App() {
  return (
    <>
      <AppRouter />
      <Toaster richColors position="top-right" />
    </>
  );
}