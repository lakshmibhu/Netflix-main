import Nav from "./nav";
import Banner from "./Banner";
import Row from "../../Row";
import userrequests from "../../Request";
function HomeScreen() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="Netflix Orignal"
        isLargeRow
        fetchURL={userrequests.fetchNetflixOriginals}
      />
      <Row
        title="Trending Now"
        isLargeRow
        fetchURL={userrequests.fetchTrending}
      />
      <Row title="Top Rated" isLargeRow fetchURL={userrequests.fetchTopRated} />
      <Row
        title="Action movies"
        isLargeRow
        fetchURL={userrequests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        isLargeRow
        fetchURL={userrequests.fetchComedyMovies}
      />
      <Row
        title="Romantic Movies"
        isLargeRow
        fetchURL={userrequests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        isLargeRow
        fetchURL={userrequests.fetchDocumentaries}
      />
      
    </div>
  );
}

export default HomeScreen;
