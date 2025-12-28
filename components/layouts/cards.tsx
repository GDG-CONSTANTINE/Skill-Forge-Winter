import { default as workshops } from "@/data/workshops"
import { Button } from "../ui/button"
import SessionDialog from "../join-session/session-dialog"
import useGetWorkshopState from "@/hooks/useGetWorkshopState";

function Cards() {
  const { getWorkshopState } = useGetWorkshopState();

  return (
    <div className="w-full mt-10">
      {workshops.map((workshop) => {
        const workshopAvailable = getWorkshopState(workshop.id) < 25;

        // Component
        return (<div key={workshop.id} className="mb-8 p-6 border-3 border-foreground/70 bg-white shadow-sm w-full relative">
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
          <SessionDialog session={workshop}>
            <Button
              className="mt-4 w-full cursor-pointer">
              {
                workshopAvailable
                  ? `Join Session ${getWorkshopState(workshop.id)}/25`
                  : "Sorry Workshop is Full"
              }
            </Button>
          </SessionDialog>
        </div>)
      })}
    </div>
  )
}

export default Cards
