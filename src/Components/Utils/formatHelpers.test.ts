import { bool, size, money, pint } from './formatHelpers';

it('check bool use false', async () => {
  expect(bool(false)).toBe('false');
});

it('check bool use true', async () => {
  expect(bool(true)).toBe('true');
});

it('check size use 2 meter and 2 feet', async () => {
  expect(size({ meters: 2, feet: 2 })).toBe(`2 meters/2 feet`);
});

it('check size use 2.3 meter and 2.1 feet', async () => {
  expect(size({ meters: 2.3, feet: 2.1 })).toBe(`2.3 meters/2.1 feet`);
});

//TODO нужно добиться корректной проверки для Intl API из es6
/*
it('check money use 0', async () => {
  expect(money(0)).toBe(`0,00 $`);
});

it('check money use 10', async () => {
  expect(money(10)).toBe(`10,00 $`);
});

it('check money use 1000', async () => {
  expect(money(1000)).toBe(`1 000,00$`);
});

it('check money use -10', async () => {
  expect(money(-10)).toBe(`-10,00$`);
});

it('check pint use 0', async () => {
  expect(pint(0)).toBe(`0`);
});

it('check pint use 1000', async () => {
  expect(pint(1000)).toBe(`1 000`);
});
*/
