// Topic: Conditional types

type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

function generic<T>(obj: T): MessageOf<T> {
    return obj['message'];
}

generic({message: 'hey jude'});

interface Email {
    message: string;
}

type EmailContent = MessageOf<Email>;

type Flatten<T> = T extends any[] ? T[number] : T;

const flatened: Flatten<number[]> = 1;
console.log(flatened);

// Sub topic: Inferring Within Conditional Types

type FlattenInfer<Type> = Type extends Array<infer Item> ? Item : Type;

type FlattenInfer2<Type> = Type extends Array<[infer Item]> ? Item : Type;

type Infered = FlattenInfer<number | string>;

type GetArgs<T> = T extends (...arg1: infer Arg1) => void ? Arg1: never;

type Arguments = GetArgs<(a: string, b: number) => void>

// Sub topic: Distributive Conditional Types

type ToArray<Type> = Type extends any ? Type[] : never;

type SttrOrNumber = ToArray<number | string>

// Error
const exampleArr: SttrOrNumber = [1,2,3, 'name'];

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// Success
const exampleArr2: ToArrayNonDist<number | string> = [1,2,3, 'name'];

async function getValue() {
    return 1
}

// off topic
type FromPromise = Awaited<ReturnType<typeof getValue>>;