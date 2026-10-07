// Real before/after photos supplied by the clinic. Each image is already combined
// (top = before, bottom = after) and is shown whole, never cropped or stretched.
// Final publication of patient photos must be confirmed by the clinic.
export const cases = [
  { id: "01", image: "/images/cases/case-01.jpg", width: 1086, height: 1448 },
  { id: "02", image: "/images/cases/case-02.jpg", width: 1086, height: 1448 },
] as const;

export const clinicPhotos = {
  reception: { src: "/images/clinic/reception.jpg", width: 1449, height: 1085 },
  treatmentRoom: { src: "/images/clinic/treatment-room.jpg", width: 1122, height: 1402 },
} as const;
