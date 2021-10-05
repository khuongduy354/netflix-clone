const baseTMDBUrl = "https://api.themoviedb.org/3";

let tmdbEnpoints = {
  popular: "/movie/popular",
  trending: "/trending/all/day",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};
for (let property in tmdbEnpoints) {
  tmdbEnpoints[property] = baseTMDBUrl + tmdbEnpoints[property];
}
export default tmdbEnpoints;
