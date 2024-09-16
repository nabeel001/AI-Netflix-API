export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface Video {
  name: string;
  type: string;
  site: string;
  key: string;
  official: boolean;
}
