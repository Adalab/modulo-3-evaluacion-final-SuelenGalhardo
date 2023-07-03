const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((CharacterApi) => {
        return {
          name: CharacterApi.name,
          image: CharacterApi.image,
          species: CharacterApi.species,
          id: CharacterApi.id,
          origin: CharacterApi.origin,
          episodes: CharacterApi.episodes,
          status: CharacterApi.status,
        };
      });

      return cleanData;
    });
};

export default getDataFromApi;
