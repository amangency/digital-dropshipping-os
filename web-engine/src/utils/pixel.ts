// Generate unique event IDs for Facebook deduplication (Pixel + CAPI)
const generateEventId = (): string => {
  return 'evt_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);
};

export const trackPixelEvent = (eventName: string, data?: any, eventId?: string) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    const id = eventId || generateEventId();
    (window as any).fbq("track", eventName, data, { eventID: id });
    return id;
  }
  return eventId || generateEventId();
};

export const trackPixelCustom = (eventName: string, data?: any, eventId?: string) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    const id = eventId || generateEventId();
    (window as any).fbq("trackCustom", eventName, data, { eventID: id });
    return id;
  }
  return eventId || generateEventId();
};

export { generateEventId };
