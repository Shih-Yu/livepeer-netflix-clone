import { type } from "os";


export type Movies = {
  page: number;
  results: [
    {
      poster_path: string;
      adult: boolean;
      overview: string;
      release_date: string;
      genre_ids: [number, number];
      id: number;
      original_title: string;
      original_language: string;
      title: string;
      backdrop_path: string;
      popularity: number;
      vote_count: number;
      video: boolean;
      vote_average: number;
    }
  ];
  total_results: number;
  total_pages: number;
};

export type MovieDetails = {
  "adult": boolean,
  "backdrop_path": string,
  "belongs_to_collection": null,
  "budget": number,
  "genres": [
    {
      "id": number,
      "name": string
    }
  ],
  "homepage": string,
  "id": number,
  "imdb_id": string,
  "original_language": string,
  "original_title": string,
  "overview": string,
  "popularity": number,
  "poster_path": null,
  "production_companies": [
    {
      "id": number,
      "logo_path": string,
      "name": string,
      "origin_country": string
    },
    {
      "id": number,
      "logo_path": null,
      "name": string,
      "origin_country": string
    },
    {
      "id": number,
      "logo_path": null,
      "name": string,
      "origin_country": string
    },
    {
      "id": number,
      "logo_path": null,
      "name": string,
      "origin_country": string
    },
    {
      "id": number,
      "logo_path": null,
      "name": string,
      "origin_country": string
    },
    {
      "id": number,
      "logo_path": null,
      "name": string,
      "origin_country": string
    },
    {
      "id": number,
      "logo_path": string,
      "name": string,
      "origin_country": string
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": string,
      "name": string
    }
  ],
  "release_date": string,
  "revenue": number,
  "runtime": number,
  "spoken_languages": [
    {
      "iso_639_1": string,
      "name": string
    }
  ],
  "status": string,
  "tagline": string,
  "title": string,
  "video": boolean,
  "vote_average": number,
  "vote_count": number

}

export type TrailerInfo = {
  id: 550,
  results: [
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  key: string,
  site: string,
  size: number,
  type: string,
  official: boolean,
  published_at: string,
    id: string,
  ]
};

export type Trailer = TrailerInfo['results']
