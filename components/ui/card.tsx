
import { clsx } from "clsx";
export function Card({ className, children }: any){ return <div className={clsx("border bg-white rounded-2xl", className)}>{children}</div>}
export function CardHeader({ className, children }: any){ return <div className={clsx("p-4 border-b", className)}>{children}</div>}
export function CardContent({ className, children }: any){ return <div className={clsx("p-4", className)}>{children}</div>}
export function CardTitle({ className, children }: any){ return <h3 className={clsx("text-base font-semibold", className)}>{children}</h3>}
