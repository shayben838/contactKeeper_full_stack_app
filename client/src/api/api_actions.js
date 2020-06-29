import fetcher from "./fetcher";

// GET ALL ARTIST
const getAllArtist = async () => {
  const response = await fetcher.get("/");
  return response;
};

export { getAllArtist };
