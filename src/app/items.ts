export interface Item{
    name:string;
    description: string;
    image: string;
}

export const items: Item[]=[
    {
        name: "Bicycle",
        description: "Red bicycle, good price.",
        image: "bicycle.jpeg"
    },
    {
        name: "Cards",
        description: "New cards on sale.",
        image: "cards.jpeg"
    },
    {
        name: "Car",
        description: "",
        image: "car.webp"
    },
    {
        name: "Glasses",
        description: "",
        image: "glasses.jpeg"
    }

]