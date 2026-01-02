import { default as workshops } from "@/data/workshops"
import { Button } from "../ui/button"
import SessionDialog from "../join-session/session-dialog"
import useGetWorkshopState from "@/hooks/useGetWorkshopState";
import { isStartingSoonOrStarted } from "@/lib/helper";
import Link from "next/link";

function Cards() {
  const { getWorkshopState } = useGetWorkshopState();

  return (
    <div className="w-full mt-10">
      {workshops.map((workshop) => {
        const isOnline = workshop.location.toLowerCase().startsWith("online");
        const limit = isOnline ? 100 : 25;
        const workshopAvailable = getWorkshopState(workshop.id) < limit;
        const workshopDate = new Date(workshop.date);
        const now = new Date();
        const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const workshopMidnight = new Date(workshopDate.getFullYear(), workshopDate.getMonth(), workshopDate.getDate());
        const diffDays = Math.floor((todayMidnight.getTime() - workshopMidnight.getTime()) / (1000 * 60 * 60 * 24));
        const isOld = diffDays >= 1;
        const { started, withinThreshold } = isStartingSoonOrStarted(workshop.date, workshop.time)

        // Component
        return (<div key={workshop.id} className={`mb-8 p-6 border-3 border-foreground/70 bg-white shadow-sm w-full relative ${isOld ? 'opacity-40' : ''}`}>
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position) => (
            <div
              key={position}
              className={`w-5 h-4 border-2 border-primary bg-[#CD8210] absolute ${position === 'top-left' ? '-top-2 -left-2.5' : ''}
                    ${position === 'top-right' ? '-top-2 -right-2.5' : ''}
                    ${position === 'bottom-left' ? '-bottom-2 -left-2.5' : ''}
                    ${position === 'bottom-right' ? '-bottom-2 -right-2.5' : ''}`}
            ></div>
          ))}
          <h2 className="text-3xl font-bold mb-4 text-primary">{workshop.title} <span className="text-foreground/70">Workshop</span></h2>
          <p className="mb-3">{workshop.description}</p>
          <div className="flex flex-wrap gap-2 justify-between w-full">
            <p><strong>Date:</strong><br /> {workshop.date}</p>
            <p><strong>Time:</strong><br /> {workshop.time}</p>
            <p><strong>Location:</strong><br /> {workshop.location}</p>
          </div>

          {workshop.meetingLink && withinThreshold && (
            <Link href={workshop.meetingLink} target="_blank" rel="noopener noreferrer">
              <Button className="cursor-pointer mt-4 w-full">
                {workshop.meetingLink ? "Session Link Available" : "Link Not Available"}
              </Button>
            </Link>
          )}

          <SessionDialog session={workshop}>
            <Button variant={started ? "outline" : "default"} className="mt-4 w-full cursor-pointer">
              {
                // If workshop title starts with "onle", use 100 as the limit, else 25
                (() => {
                  const isOnline = workshop.location.toLowerCase().startsWith("online");
                  const limit = isOnline ? 100 : 25;
                  return workshopAvailable || isOnline
                    ? `Join Session ${getWorkshopState(workshop.id)}/${limit}`
                    : "Sorry Workshop is Full";
                })()
              }
            </Button>
          </SessionDialog>
        </div>)
      })}
    </div>
  )
}

export default Cards
