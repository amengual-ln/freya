const initialState = [
  {
    id: "1",
    status: "To do",
    title: "Una tarea",
    assigne: "Lautaro",
    project: "Cada día",
  },
  {
    id: "2",
    status: "Done",
    title: "Mover este hardcodeo horrible a una api",
    assigne: "Lautaro",
    project: "Freya",
  },
];

export default function state(state = initialState) {
  return state;
}
