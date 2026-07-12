import { Toaster } from "@/ui/sonner";

import { AppRouter } from "@/app/router";

export function App() {
  return (
    <>
      <AppRouter />
      <Toaster richColors position="top-right" />
    </>
  );
}