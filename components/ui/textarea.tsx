
import { TextareaHTMLAttributes } from "react";
export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>){
  return <textarea {...props} className={"w-full border rounded-md px-3 py-2 outline-none focus:ring focus:ring-slate-200 " + (props.className||"")} />;
}
