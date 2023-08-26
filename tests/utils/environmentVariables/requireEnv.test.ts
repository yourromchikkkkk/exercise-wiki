import requireEnv from '../../../src/utils/environmentVariables/requireEnv';

describe('requireEnv function', () => {
  test('throws an error', () => {
    expect(() => requireEnv('TEST_ENV', undefined)).toThrow(
      'TEST_ENV is required in environment variables, but was not provided'
    );
  });

  test('returns the provided value', () => {
    const result = requireEnv('TEST_ENV', 'providedValue');
    expect(result).toBe('providedValue');
  });

  test('returns the default value', () => {
    const result = requireEnv('TEST_ENV', undefined, 'defaultValue');
    expect(result).toBe('defaultValue');
  });

  test('returns the provided value even when default value is provided', () => {
    const result = requireEnv('TEST_ENV', 'providedValue', 'defaultValue');
    expect(result).toBe('providedValue');
  });
});
