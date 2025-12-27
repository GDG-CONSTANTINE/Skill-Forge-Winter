import { Loader2 } from "lucide-react";


export default function LoadingPlaceHolder() {
    return <div className="flex gap-2 w-full items-center justify-center">
        <Loader2 className="animate-spin" size={20} />
        <h1>
            We need to Grab some stuff please wait a moment
        </h1>
    </div>
}