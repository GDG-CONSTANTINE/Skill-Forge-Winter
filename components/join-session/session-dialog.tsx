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
      {/* Need That or else small screens will not be able to scroll */}
      <DialogContent className="overflow-y-scroll rounded-md max-sm:h-full">
        <Header session={session} />
        <RegistrationForm workshop={session} />
      </DialogContent>
    </Dialog>
  )
}

export default SessionDialog
