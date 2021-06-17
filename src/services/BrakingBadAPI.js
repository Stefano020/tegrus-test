const BrakingBadAPI = async () => {
  const characters = await fetch('https://www.breakingbadapi.com/api/characters')
    .then(response => response.json());

  return characters;
}

export default BrakingBadAPI;