import { sayHello } from '../src/main';

describe('Main suite', () => {
  it('should say hello', () => {
    expect(sayHello('Cristian')).toBe('Hello Cristian!');
  });
});
