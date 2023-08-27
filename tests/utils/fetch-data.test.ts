import fetchData, { exerciseOptions } from '../../src/utils/fetch-data';

// Create a mock Response object
const mockResponse = {
  json: jest.fn(),
};

const mockUrl = 'https://example.com';

jest.mock('../../src/utils/environmentVariables', () => ({
  VITE_RAPID_API_KEY: 'mocked_api_key',
}));

// Mock the fetch function
globalThis.fetch = jest.fn(() => Promise.resolve(mockResponse)) as jest.Mock;

describe('fetchData function', () => {
  test('fetches data correctly', async () => {
    const mockData = { mockData: true };

    // Mock the `json` method of the Response object
    mockResponse.json.mockResolvedValueOnce(mockData);

    const result = await fetchData(mockUrl, exerciseOptions);

    expect(globalThis.fetch).toHaveBeenCalledWith(mockUrl, exerciseOptions);
    expect(globalThis.fetch).toBeCalledTimes(1);
    expect(result).toEqual(mockData);
  });

  test('handles errors during fetch', async () => {
    // Mock the fetch function to return a rejected Promise
    (globalThis.fetch as jest.MockedFunction<typeof fetch>).mockReturnValueOnce(
      Promise.reject(new Error('Fetch error'))
    );

    await expect(fetchData(mockUrl)).rejects.toThrowError('Fetch error');
  });
});
