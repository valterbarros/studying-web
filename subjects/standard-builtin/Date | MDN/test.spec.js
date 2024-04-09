import { it, describe, expect } from "vitest";

const minutesToMilliseconds = (minutes) => minutes * 60 * 1000;

describe('Date', () => {
  it('should return milliseconds from 01/01/1970', () => {
    const d = Date.UTC(1970,0,1);

    expect(d).toBe(0)
  });

  it('should return number on Number coercion', () => {
    const d = new Date('01/01/1970');

    expect(Number(d)).toBeTypeOf('number')
  });

  it('should return number on Number coercion', () => {
    const d = new Date('01/01/1970');

    expect(d.getTimezoneOffset()).toBe(180)
  });

  it('should be possible to date parse', () => {
    const d = Date.parse('1970-01-01:00:00.000Z');

    expect(d).toBe(0);
  });

  it('should return iso 8601', () => {
    const d = new Date();

    // YYYY-MM-DDTHH:mm:ss.sssZ
    const isoFormatRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}Z/;

    expect(d.toISOString()).toMatch(isoFormatRegex);
  });

  it('should be possible to locale a date', () => {
    const d = new Date('1970-04-05');

    expect(d.toLocaleDateString('pt-br')).toMatch(new RegExp(`0${d.getDate()}/0${d.getMonth() + 1}/${d.getFullYear()}`));

    // Switch month and day position
    expect(d.toLocaleDateString('us')).toMatch(new RegExp(`${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`))
  });
});
