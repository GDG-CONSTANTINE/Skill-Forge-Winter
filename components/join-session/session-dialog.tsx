import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function SessionDialog({ children, session }: { children: React.ReactNode; session: any }) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold mb-4 text-primary">{session.title} <span className="text-foreground/70">Workshop</span>
          </DialogTitle>
          <DialogDescription>{session.description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button asChild>
            <a href={session.link} target="_blank" rel="noopener noreferrer">
              Join Session
            </a>
          </Button>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SessionDialog
