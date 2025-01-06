
export const Location = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="p-6 flex flex-col gap-6">
        <h3 className="font-ballet text-4xl text-center">Ubicación</h3>
        <p className="font-ebgaramond text-lg">
          Nuestra historia de amor nos lleva a este día especial, y no sería lo
          mismo sin ti.
        </p>
        <div className="font-ebgaramond text-lg">
          <h4 className="font-bold">Eli Eventos</h4>
          <p>26 de Marzo #101</p>
          <p>Residencial del Valle I</p>
          <p>CP. 20080</p>
          <p>Aguascalientes, Ags.</p>
        </div>
        <div>
          <a
            className="flex justify-center cursor-pointer"
            href="https://maps.app.goo.gl/ByXbDievvNwjqS8n7"
          >
            <div className="bg-orange-100 p-2 w-full text-center rounded text-xl font-ebgaramond">
              Ver en Google Maps
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
