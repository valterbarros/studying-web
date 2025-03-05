// Topic: Template Literal Types

type Inferece<T extends string> = {
  name: `${T}change`
}

type In2 = Inferece<'valterchange'>;

export const in2:In2 = { name: 'valterchangechange' };

export type Person2 = {
  name: string;
  age: number
}

type Extr<T extends string & keyof Person2> = T;

export function getName<T extends string & keyof Person2>(name: `${T}Changed`) {
  return name;
}

getName('nameChanged');
