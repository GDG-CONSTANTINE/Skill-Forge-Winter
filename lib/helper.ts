export function hasSessionStarted(date: string, time: string) {
  // Example time: "1:00 PM - 2:30 PM"
  const startTime = time.split("-")[0].trim(); // "1:00 PM"

  const sessionStart = new Date(`${date} ${startTime}`);
  const now = new Date();

  return now >= sessionStart;
}
