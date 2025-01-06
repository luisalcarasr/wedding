import cover from "../assets/cover.jpeg";
import flower from "../assets/flower.png";
import leafs from "../assets/leafs.png";

export const Cover = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center p-6 overflow-hidden">
      <div className="relative flex justify-center items-center">
        <div className="absolute h-full w-full -z-20 overflow-visible">
          <img src={flower} className="absolute w-auto h-48 -top-16 right-12" />
          <img
            src={flower}
            className="absolute w-auto h-48 -bottom-24 left-8 rotate-180"
          />
          <img
            src={leafs}
            className="absolute w-auto h-56 -top-20 -right-24 opacity-60"
          />
          <img
            src={leafs}
            className="absolute w-auto h-56 -bottom-32 -left-28 rotate-180 opacity-60"
          />
        </div>
        <div className="overflow-hidden aspect-square rounded-t-full bg-gray-200">
          <img
            src={cover}
            alt="Cover"
            className="w-full h-full object-cover transform-gpu scale-150 translate-y-6"
          />
        </div>
      </div>
      <div className="mt-14 w-full flex justify-center">
        <div className="h-12 border-r border-stone-700"></div>
      </div>
      <div className="flex flex-col text-center mt-6">
        <div className="text-3xl font-cinzel">Adrian & Cristina</div>
        <div className="uppercase font-cinzel font-light ">Nos Casamos</div>
      </div>
    </section>
  );
};
