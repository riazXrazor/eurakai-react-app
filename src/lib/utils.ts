import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string) => {
  return name.match(/(\b\S)?/g)?.join("");
};

export const getNDigits = (num: number) => {
  return num.toString().length;
};

export const getClosestDigit = (num: number) => {
  if (num === 0) return 0;

  const specifics = [3, 6, 9, 12, 15, 18];
  let tenthPower = Math.floor(Math.log10(num));
  let nearestPower = specifics.filter((elem) => elem <= tenthPower);
  return nearestPower[nearestPower.length - 1];
};
