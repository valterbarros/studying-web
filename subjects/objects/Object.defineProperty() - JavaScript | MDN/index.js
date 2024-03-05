// Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors.
// A data descriptor is a property with a value that may or may not be writable.
// An accessor descriptor is a property described by a getter-setter pair of functions.
// A descriptor must be one of these two flavors; it cannot be both.

export const objectNotWritableAndNotConfigurable = {};
export const objectWritableAndConfigurable = {};
export function Base() {}
