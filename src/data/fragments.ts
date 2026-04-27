export const fragments: string[] = [
  "The sky here folds inward. Birds enter and never come back.",
  "We measured the silence. It has a temperature.",
  "The map shows a river. There is no river. There is something else.",
  "At 4am, the trees begin to communicate. No one has stayed awake long enough to understand what they say.",
  "We found a door in the field. It opens onto the field.",
  "The coordinates are correct. The place is not.",
  "Yesterday the horizon was closer. By 3pm it had moved back to where it belongs.",
  "There is a structure here that casts no shadow. We are not sure it is a structure.",
  "The locals say the fog has been here longer than the land.",
  "We set up camp at the edge. The edge moved.",
  "The birds here fly backwards. Only at dusk. Only when observed.",
  "There is a frequency in the ground. It is not geological.",
  "We have been here for three days. The notebooks smell like someone else's memories.",
  "The water here reflects a sky that is not above you.",
  "Signal lost. Signal found. The signal was never ours to begin with.",
]

export function transmit(lat: number, lng: number): string {
  const hash = Math.abs(Math.floor((lat * 1000 + lng * 1000)) % fragments.length)
  return fragments[hash]
}
