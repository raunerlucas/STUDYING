export type Pokemon = {
  id: Number
  name: String
  sprites: {
    front_default: String;
  }
  types: {
    slot: Number
    type: {
      name: String
      url: String
    }
  }[]
}
