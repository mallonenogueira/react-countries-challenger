interface Options {
  signal?: AbortSignal;
}

export class CountryService {
  findAll = jest.fn(async (options?: Options) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([1]), 500);
    });
  });

  findByName = jest.fn(async (name: string, options?: Options) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([1, 2]), 500);
    });
  });
}

export default new CountryService();
