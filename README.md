1) Interface vs Type
- Interface: অবজেক্টের আকার (shape) দেওয়া জন্য ভাল; `extends` করা যায়; একই নাম হলে declarations মিশে যায় (declaration merging).
- Type: টাইপ alias — primitive, union, tuple, intersection সব নেয়; আবার একই নাম reuse করা যায় না (error)।

উদাহরণ:
```ts
interface Person { name: string; age: number }
type ID = number | string
```

2) `keyof`
- একটি টাইপের সব প্রপার্টির নাম (key) গুলো বলে — একটি ইউনিয়ন টাইপ দেয়।

উদাহরণ:
```ts
type P = { name: string; age: number }
type Keys = keyof P // "name" | "age"
```

3) `any`, `unknown`, `never`
- `any`: কোনো সীমাবদ্ধতা নেই — সবকিছু assign করা যায় (unsafe)।
- `unknown`: যেকোনো মান রাখা যায়, ব্যবহার করার আগে ট্যাক্সট/টাইপ চেক দরকার (safer)।
- `never`: কোনো মান নেই — সাধারণত ফাংশন যা কখনই return করে না (throws বা infinite loop)।

উদাহরণ:
```ts
let a: any = 5
let u: unknown = 5
if (typeof u === 'number') { let b = u + 1 }
function fail(): never { throw new Error('err') }
```

4) `enum`
- সংজ্ঞায়িত মানের সেট তৈরি করে। দুই ধরন: numeric ও string.
- একই সাথে টাইপ এবং ভ্যালু হিসেবে ব্যাহবার করা যায়

উদাহরণ:
```ts
enum Color { Red = 'RED', Green = 'GREEN' }
```

5) Union (|) এবং Intersection (&)
- Union: ভেরিয়েবল একাধিক টাইপ হতে পারে — `string | number`.
- Intersection: দুইটা টাইপ একসাথে যুক্ত — `A & B` (উভয় প্রপার্টি থাকবে)।

উদাহরণ:
```ts
type Name = { name: string }
type Emp = { id: number }
type Staff = Name & Emp // { name: string; id: number }
let id: string|number = 123
```

