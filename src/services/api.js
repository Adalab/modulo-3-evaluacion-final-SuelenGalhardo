const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/?page=19')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((CharacterApi) => {
        return {
          name: CharacterApi.name,
          image: CharacterApi.image,
          species: CharacterApi.species,
          id: CharacterApi.id,
        };
      });

      return cleanData;
    });
};

export default getDataFromApi;
