import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { workshopType } from "@/types/workshop";
import Header from "./header";
import RegistrationForm from "./form";
import { Button } from "../ui/button";
import { hasSessionStarted } from "@/lib/helper";
import useGetWorkshopState from "@/hooks/useGetWorkshopState";

function SessionDialog({
  children,
  session,
}: {
  children: React.ReactNode;
  session: workshopType;
}) {
  const started = hasSessionStarted(session.date, session.time);
  const { getWorkshopState } = useGetWorkshopState()
  const workshopAvailable = session.location.toLowerCase().startsWith("online")
    ? getWorkshopState(session.id) < 50
    : getWorkshopState(session.id) < 25;

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        {children}
      </DialogTrigger>

      <DialogContent className="overflow-y-scroll rounded-md max-h-full">
        <Header session={session} />

        {(!started && workshopAvailable) ? (
          <RegistrationForm workshop={session} />
        ) : (
          !started ? (
            <div className="mt-6 space-y-4 text-center text-sm opacity-70">
              <p>Registration is closed. This session is full.</p>
            </div>
          ) : (
            <div className="mt-6 space-y-4 text-center text-sm opacity-70">
              <p>Registration is closed. This session has already started.</p>

              {session.workshopResourcesLink && (
                <Button className="w-full">
                  <a
                    href={`/${session.workshopResourcesLink}`}
                    download
                    className=""
                  >
                    Download workshop resources
                  </a>
                </Button>
              )}
            </div>
          )
        )}
      </DialogContent>

    </Dialog>
  );
}

export default SessionDialog;
