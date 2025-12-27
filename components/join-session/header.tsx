import Image from "next/image"
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { workshopType } from "@/types/workshop"
import pic from "@/assets/pic.png"

function Header({ session }: { session: workshopType }) {
  return (
    <DialogHeader>
      <Image src={session.logo ?? ''} alt={session.title} width={100} height={100} className="mx-auto w-7/10" />
      <DialogTitle />
      <div className="flex items-center gap-4">
        <Image src={session.instructor.photo ?? pic} alt={session.title} width={100} height={100} className="size-10 rounded-full" />
        <div className="flex flex-col items-start">
          <p className="text-sm -ml-px"><strong>Instructor:</strong> {session.instructor.name}</p>
          <p className="text-sm">{session.instructor.bio}</p>
        </div>
      </div>
      <DialogDescription className="text-start">{session.description}
      </DialogDescription>
    </DialogHeader>
  )
}

export default Header
