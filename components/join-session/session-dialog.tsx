import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { workshopType } from "@/types/workshop";
import Header from "./header";
import RegistrationForm from "./form";
import { Button } from "../ui/button";

function hasSessionStarted(date: string, time: string) {
  const startTime = time.split("-")[0].trim();
  const sessionStart = new Date(`${date} ${startTime}`);
  return new Date() >= sessionStart;
}

function SessionDialog({
  children,
  session,
}: {
  children: React.ReactNode;
  session: workshopType;
}) {
  const started = hasSessionStarted(session.date, session.time);

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        {children}
      </DialogTrigger>

      <DialogContent className="overflow-y-scroll rounded-md max-sm:h-full">
        <Header session={session} />

        {!started ? (
          <RegistrationForm workshop={session} />
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
        )}
      </DialogContent>

    </Dialog>
  );
}

export default SessionDialog;
