// types.ts
import { ElementType } from "react";

// Define the Page type globally for all components
export interface Page {
  name: string;
  linkName: string;
  icon?: ElementType<any>;  // Optional icon
  subLinks?: Page[];
}
