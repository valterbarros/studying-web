// Topic: Generics

interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

myIdentity(1);

// Sub topic: parameters in generic constraint

function getProperty<Type, Key extends keyof Type>(o: Type, key: Key) {
    return o[key];
}

getProperty({a:1, b: 3, c:4}, 'b');

// Sub topic: Classes in generics

class Bee {}

function createInstance<Type>(c: { new(): Type}): Type {
    return new c();
}

createInstance(Bee);

// Sub topic: Generic parameters default

class Rat {}

function createIns<Type = Rat>(c?: { new(): Type }): Type {
    if (!c) return new Rat as Type;
    return new c();
}

createIns(class {});