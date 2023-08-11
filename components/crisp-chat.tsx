"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4dda3aec-290d-4a60-a2a9-f2b88f3c44d2");
  }, []);

  return null;
};
