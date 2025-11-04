
import { InputHTMLAttributes } from "react";
export function Input(props: InputHTMLAttributes<HTMLInputElement>){
  return <input {...props} className={"w-full border rounded-md px-3 py-2 outline-none focus:ring focus:ring-slate-200 " + (props.className||"")} />;
}
