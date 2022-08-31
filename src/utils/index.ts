export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const millisecondToMinutes = (value: string) => Number(value) / 1000;
