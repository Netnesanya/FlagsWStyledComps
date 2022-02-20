const BASE_ENDPOINT = 'https://restcountries.com/v2/'

export const ALL_COUNTRIES = BASE_ENDPOINT + 'all'
export const SearchByCountry = (name) => BASE_ENDPOINT + '/name/' + name
export const filterByCode = (code) => BASE_ENDPOINT + 'alpha?codes=' + code.join(',')