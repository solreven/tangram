import Tangram from "@/components/Tangram";
export default function Home() {
  return (
    <>
      <section className="h-screen flex justify-center items-center bg-stone-50">
        <h1 className="text-7xl">Forsiden</h1>
        <Tangram />
      </section>
      <section className="h-screen flex justify-center items-center bg-amber-700">
        <h1 className="text-5xl">Produktene</h1>
      </section>
      <section className="h-screen flex justify-center items-center bg-amber-700">
        <h1 className="text-5xl">Workshop/Flyer</h1>
      </section>
    </>
  );
}
