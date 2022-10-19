import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers)=> {
            headers.set('X-RapidAPI-Key', '76db017c5cmsh6b2dcd427069514p18b80ejsn3b3931a390f9');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
       
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetArtistDetailsQuery,
    useGetSongRelatedQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi

