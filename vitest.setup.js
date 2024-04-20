import fromAsync from 'array-from-async';
import 'core-js/actual/set';
import 'blob-polyfill';

Array.fromAsync = fromAsync;

// Object.setPrototypeOf(window.Blob.prototype, Blob.prototype)
// Object.setPrototypeOf(window.Blob, Blob)
