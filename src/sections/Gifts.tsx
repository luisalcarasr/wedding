export const Gifts = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="p-6 flex flex-col gap-6">
        <h3 className="font-ballet text-4xl text-center">Mesa de Regalos</h3>
        <p className="font-ebgaramond text-lg">
          Tu presencia en nuestra boda es el único regalo que pedimos. Sin
          embargo, si deseas bendecir aún más nuestro día especial con un
          regalo, consulta nuestra mesa de regalos virtual.
        </p>
        <a
          className="bg-orange-100 rounded-md font-ebgaramond text-xl text-center p-2 text-orange-950 cursor-pointer"
          href="https://www.amazon.com.mx/wedding/registry/1TNKMB27ITHPM"
        >
          Haz click aquí
        </a>
      </div>
    </section>
  );
};
