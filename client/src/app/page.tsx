import SearchBar from "@/components/searchBar";
import CardsContainer from "@/components/cardsContainer";

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 bg-gray-800">
      <h1>Jobly</h1>
      <SearchBar/>
      <CardsContainer/>
    </main>
  );
}
