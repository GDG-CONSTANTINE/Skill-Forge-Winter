import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { workshopType } from "@/types/workshop";
import Header from "./header";
import RegistrationForm from "./form";

function SessionDialog({ children, session }: { children: React.ReactNode; session: workshopType }) {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        {children}
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll rounded-md">
        <Header session={session} />
        <RegistrationForm workshop={session} />
      </DialogContent>
    </Dialog>
  )
}

export default SessionDialog
