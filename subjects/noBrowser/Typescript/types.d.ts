export namespace Narrowing {
  type Type = string | Array<any>;

  type Fish = {
    swim: () => void;
  }
  
  type Bird = {
    fly: () => void;
  }

  interface Circle {
    kind: 'circle',
    radius: number,
  }

  interface Square {
    kind: 'square',
    sideLength: number,
  }

  interface Triangle {
    kind: "triangle";
    sideLength: number;
  }

  type Shape = Circle | Square | Triangle;
}

export namespace MoreOnFn {
  type Describe = {
    description: string;
    (someArg: number): boolean;
  }

  type SomeConst = {
    new (s: string): string;
    (s: string): string;
  };
}

export namespace Functions {
  type Struct = { length: number };

  type DB = {
    filter(filter: (this: Struct) => boolean): Struct[];
  }
}

export namespace Obj {
  interface IndexSign {
    [key: string]: string;
    // only string values
    name: string;
  }

  interface BasicAddress {
    street: string;
  }

  interface AddressWithUnit extends BasicAddress {
    unit: string;
  }

  interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }

  type ColorfulCircle = Colorful & Circle;

  interface Box<T> {
    contents: T;
  }
}

export namespace Generics {
  
}

export namespace Conditional {
  type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

  interface Email {
    message: string;
  }

  type EmailContent = MessageOf<Email>;

  type Flatten<T> = T extends any[] ? T[number] : T;
}