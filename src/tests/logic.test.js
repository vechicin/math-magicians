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

describe('testing operate', () => {
  test('plus operator', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });
  test('plus operator', () => {
    expect(operate(1, 1, '-')).toBe('0');
  });
  test('plus operator', () => {
    expect(operate(1, 1, 'x')).toBe('1');
  });
  test('plus operator', () => {
    expect(operate(1, 1, '÷')).toBe('1');
  });
});
