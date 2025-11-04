
import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = clsx("inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition","bg-slate-900 text-white hover:opacity-90", className);
  return <button className={classes} {...props} />;
}
