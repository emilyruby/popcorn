import algoliasearch from 'algoliasearch'

export const algoliaClient = algoliasearch(
  'YOUR APP_ID',
  'YOUR (SEARCH-ONLY) API_KEY'
)
