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
  return items.reduce((acc: Item[], item: Item) => {
    if (item.rating >= 4) {
      acc.push(item);
    }
    return acc;
  }, []);
};

const products: Item[] = [
  { title: "Item A", rating: 4.5 },
  { title: "Item B", rating: 3.8 },
  { title: "Item C", rating: 5 },
];
const filteredProducts = filterByRating(products);

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: User[]): User[] => {
  return users.reduce((acc: User[], user: User) => {
    if (user.isActive) {
      acc.push(user);
    }
    return acc;
  }, []);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
};
const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: false,
};

interface GetUniqueValues {
  (firstArray: (number | string)[], secondArray: (number | string)[]): (
    | number
    | string
  )[];
}

const getUniqueValues: GetUniqueValues = (firstArray, secondArray) => {
  const merged = [...firstArray, ...secondArray];
  const seen = new Set<number | string>();

  return merged.reduce((acc, item) => {
    if (!seen.has(item)) {
      console.log(item, "h");
      seen.add(item);
      acc.push(item);
    }

    return acc;
  }, [] as (number | string)[]);
};
