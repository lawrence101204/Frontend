import TourCard from "../components/TourCard";
export default function TourPage(){
    return(
    <main className="px-6">
    <div className="grid grid-cols-4 gap-4"></div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <TourCard />
      </div>
      </main>
    );
}