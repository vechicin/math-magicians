import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('testing calculate', () => {
  test('testing additions', () => {
    const buttonName = '+';
    const obj = {
      total: '321',
      next: '9',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('330');
  });

  test('testing substractions', () => {
    const buttonName = '-';
    const obj = {
      total: '457',
      next: '16',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('441');
  });

  test('testing multiplications', () => {
    const buttonName = 'x';
    const obj = {
      total: '16',
      next: '16',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('256');
  });

  test('testing divisions', () => {
    const buttonName = '÷';
    const obj = {
      total: '64',
      next: '8',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('8');
  });
});
