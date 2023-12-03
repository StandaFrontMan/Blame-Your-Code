import { DiContainer } from "@/app/di/DiContainer";
import { DiContext } from "@/app/di/DiContext";
import { useContext } from "react";

export const useInjection = (): DiContainer => {
  return useContext(DiContext) as DiContainer;
};
