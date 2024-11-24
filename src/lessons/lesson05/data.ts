export interface IHero {
  id: number;
  name: string;
  age: number;
  isDark: boolean;
  image: string;
  weapons: string[];
}

export const heroes: IHero[] = [
  {
    id: 1,
    name: "Gendalf",
    age: 3000,
    isDark: false,
    image: "https://storage.googleapis.com/pod_public/1300/245798.jpg",
    weapons: ["magic stick", "sword"]
  },
  {
    id: 2,
    name: "Saruman",
    age: 2500,
    isDark: true,
    image: "https://cdn.unitycms.io/images/9OIk4VqVaM8B6nGkb-QHPP.jpg",
    weapons: ["magic stick", "palantir"]
  },
  {
    id: 3,
    name: "Gimli",
    age: 50,
    isDark: false,
    image: "https://i.pinimg.com/originals/76/e2/a6/76e2a65d04076ad48addca209213947c.jpg",
    weapons: ["hammer", "axe"]
  },
  {
    id: 4,
    name: "Nazgul",
    age: 1500,
    isDark: true,
    image: "https://www.blacksbricks.de/images/product_images/original_images/witchkingff5.jpg",
    weapons: ["sword", "dragon", "dark magic"]
  },
  {
    id: 5,
    name: "Aragorn",
    age: 150,
    isDark: false,
    image: "https://www.pcgames.de/screenshots/1280x/2016/03/Aragorn_HdR2-pc-games.jpg",
    weapons: ["sword"]
  }
];
