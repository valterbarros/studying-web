import fromAsync from 'array-from-async';
import 'core-js/actual/set';
import 'core-js/actual/array-buffer';
import 'blob-polyfill';
// import * as matchers from '@testing-library/jest-dom/matchers'

Array.fromAsync = fromAsync;

// expect.extend(matchers)

// Object.setPrototypeOf(window.Blob.prototype, Blob.prototype)
// Object.setPrototypeOf(window.Blob, Blob)
