import { useWorkshopState } from "@/store/workshopStore";

function useGetWorkshopState() {
  const { workshopsCount } = useWorkshopState();

  const getWorkshopState = (workshopId: string) => {
    console.log(workshopsCount)
    const targetWorkshop = workshopsCount.find((item: { workshopId: string; count: number }) => item.workshopId === workshopId)
    // in case the workshop doesn't have any applying yet
    if (!targetWorkshop)
      return 0

    return targetWorkshop.count
  }

  return { getWorkshopState, workshopsCount }
}

export default useGetWorkshopState
