// Topic: Template Literal Types

type Inferece<T extends string> = {
  name: `${T}change`
}

type In2 = Inferece<'valterchange'>;

export const in2:In2 = { name: 'valterchangechange' };

export type Person = {
  name: string;
  age: number
}

export function getName<T extends string & keyof Person>(name: `${T}Changed`) {
  return name;
}

getName('nameChanged');
