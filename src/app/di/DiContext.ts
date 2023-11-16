import React from "react";
import { appDiContainer } from "./AppDiContainer";
import { DiContainer } from "./DiContainer";

export const DiContext =
  React.createContext<Partial<DiContainer>>(appDiContainer);
