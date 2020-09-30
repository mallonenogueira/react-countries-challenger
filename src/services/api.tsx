export const api = {
  async get<T>(url: string, options?: RequestInit) {
    const response = await fetch(url, {
      ...options,
      method: "GET",
    });
    const data = {
      data: (await response.json()) as T,
      response,
    };

    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  },
};
