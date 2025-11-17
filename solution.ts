type FormatValue = string | number | boolean;

const formatValue = (value: FormatValue): FormatValue => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return value;
};

type GetLength = string | number[];

const getLength = (value: GetLength): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  title: string;
  rating: number;
};
const filterByRating = (items: Item[]): Item[] => {
  return items.reduce((IndivisualItem: Item[], item: Item) => {
    if (item.rating >= 4) {
      IndivisualItem.push(item);
    }
    return IndivisualItem;
  }, []);

};

const products: Item[] = [
  { title: "Item A", rating: 4.5 },
  { title: "Item B", rating: 3.8 },
  { title: "Item C", rating: 5 },
];
const filteredProducts = filterByRating(products);
console.log(filteredProducts);