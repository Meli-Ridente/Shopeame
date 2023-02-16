export interface serviceInterface {
    id: number,
    name: string,
    price: number,
    description: string,
    stars: number,
    image: string,
    opinions: string // añado este campo para poder usar la interfaz desde el componente gestión.
}