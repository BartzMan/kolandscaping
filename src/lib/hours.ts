const TZ = "America/Phoenix";

export function getOpenStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const weekday = get("weekday");
  const hour = Number.parseInt(get("hour"), 10);
  const minute = Number.parseInt(get("minute"), 10);
  const mins = (Number.isFinite(hour) ? hour : 0) * 60 + (Number.isFinite(minute) ? minute : 0);

  const isSun = weekday.startsWith("Sun");
  const isSat = weekday.startsWith("Sat");
  const closeMins = isSun ? 15 * 60 : isSat ? 17 * 60 : 18 * 60;
  const openMins = 8 * 60;
  const open = mins >= openMins && mins < closeMins;
  const closeLabel = isSun ? "3:00 PM" : isSat ? "5:00 PM" : "6:00 PM";

  return {
    open,
    label: open ? `Open now · until ${closeLabel}` : "Closed now · opens 8:00 AM",
    closeLabel,
  };
}
