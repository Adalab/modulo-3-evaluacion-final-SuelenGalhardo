const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results
        .map((characterApi) => {
          return {
            name: characterApi.name,
            image: characterApi.image,
            species: characterApi.species,
            id: characterApi.id,
            origin: characterApi.origin.name,
            episode: characterApi.episode,
            status: characterApi.status,
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name));
      return cleanData;
    });
};

export default getDataFromApi;
