import fetchData, { exerciseOptions } from '../../src/utils/fetchData';

// Create a mock Response object
const mockResponse = {
  json: jest.fn(),
};

jest.mock('../../src/utils/environmentVariables', () => ({
  VITE_RAPID_API_KEY: 'mocked_api_key',
}));

// Mock the fetch function
globalThis.fetch = jest.fn(() => Promise.resolve(mockResponse)) as jest.Mock;

describe('fetchData function', () => {
  test('fetches data correctly', async () => {
    const mockUrl = 'https://example.com/api';
    const mockData = { mockData: true };

    // Mock the `json` method of the Response object
    mockResponse.json.mockResolvedValueOnce(mockData);

    const result = await fetchData(mockUrl, exerciseOptions);

    expect(fetch).toBeCalledTimes(1)
    expect(globalThis.fetch).toHaveBeenCalledWith(mockUrl, exerciseOptions);
    expect(mockResponse.json).toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });

  test('handles errors during fetch', async () => {
    const mockUrl = 'https://example.com';

    // Mock the fetch function to return a rejected Promise
    (globalThis.fetch as jest.MockedFunction<typeof fetch>).mockReturnValueOnce(
      Promise.reject(new Error('Fetch error'))
    );

    await expect(fetchData(mockUrl)).rejects.toThrowError('Fetch error');
  });
});
