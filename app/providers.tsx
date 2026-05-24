"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/lib/redux/store";
import RefreshTokenProvider from "@/lib/hooks/refresh-token-provider";
interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RefreshTokenProvider />

        {children}
      </PersistGate>
      <Toaster position="top-right" />
    </Provider>
  );
}
