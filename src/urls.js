const BASE_ENDPOINT = 'https://restcountries.com/v2/'

export const ALL_COUNTRIES = BASE_ENDPOINT + 'all?fields=name,capital,flags,population,region'
export const SearchByCountry = (name) => BASE_ENDPOINT + '/name/' + name
export const filterByCode = (codes) => BASE_ENDPOINT + 'alpha?codes=' + codes.join(',')