export function hasSessionStarted(date: string, time: string) {
  // Example time: "1:00 PM - 2:30 PM"
  const startTime = time.split("-")[0].trim(); // "1:00 PM"

  const sessionStart = new Date(`${date} ${startTime}`);
  const now = new Date();

  return now >= sessionStart;
}

// Parse workshop date + time and helpers
type StartCheck = {
  startsInMinutes: number | null;
  started: boolean;
  withinThreshold: boolean;
};

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export function parseWorkshopStart(
  dateStr: string,
  timeStr?: string
): Date | null {
  if (!dateStr) return null;
  // normalize date parts (accept "2026-1-2" or "2026-01-02")
  const dateParts = dateStr.split(/[\/-]/).map((p) => p.trim());
  if (dateParts.length < 3) return null;
  // eslint-disable-next-line prefer-const
  let [y, m, d] = dateParts;
  // ensure month/day two digits
  m = pad(Number(m));
  d = pad(Number(d));

  if (!timeStr) {
    // assume midnight if no time provided
    return new Date(`${y}-${m}-${d}T00:00:00`);
  }

  // take start time (before dash)
  const startPart = timeStr.split("-")[0].trim();

  // handle formats like "8:00 PM" or "20:00"
  const ampmMatch = /([0-9]{1,2}):([0-9]{2})\s*(AM|PM|am|pm)?/.exec(startPart);
  if (!ampmMatch) return null;

  let hour = Number(ampmMatch[1]);
  const minute = Number(ampmMatch[2]);
  const ampm = ampmMatch[3];

  if (ampm) {
    const up = ampm.toUpperCase();
    if (up === "PM" && hour !== 12) hour += 12;
    if (up === "AM" && hour === 12) hour = 0;
  }

  const HH = pad(hour);
  const MM = pad(minute);

  // Build ISO-like local datetime string
  return new Date(`${y}-${m}-${d}T${HH}:${MM}:00`);
}

export function isStartingSoonOrStarted(
  dateStr: string,
  timeStr?: string,
  thresholdMinutes = 15,
  now = new Date()
): StartCheck {
  const start = parseWorkshopStart(dateStr, timeStr);
  if (!start)
    return { startsInMinutes: null, started: false, withinThreshold: false };
  const diffMin = (start.getTime() - now.getTime()) / 60000;
  const startsInMinutes = Math.round(diffMin);
  const started = diffMin <= 0;
  const withinThreshold = diffMin <= thresholdMinutes;
  return { startsInMinutes, started, withinThreshold };
}
