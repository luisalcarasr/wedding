import { useEffect, useState } from "react";

export const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-01-16T16:30:00-06:00"); // Hora estándar del centro (CST)

    const interval = setInterval(() => {
      const now = new Date();

      // @ts-expect-error Timer
      const difference = targetDate - now;

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center p-4">
      <div className="flex flex-col gap-8">
        <h3 className="font-cinzel text-3xl p-4 border border-orange-950 text-center">
          Adrian & Cristina
        </h3>
        <p className="transform-cpu translate-y-[-45px] text-center font-cinzel bg-orange-50 w-fit mx-auto px-4">Los esperamos en</p>
        <div className="flex flex-row justify-center font-ebgaramond gap-4">
          <div className="flex flex-col text-center border-r border-r-orange-950 pr-4">
            <span className="text-3xl">{days}</span>
            <span className="text-xl">Días</span>
          </div>
          <div className="flex flex-col text-center border-r border-r-orange-950 pr-4">
            <span className="text-3xl">{hours}</span>
            <span className="text-xl">Horas</span>
          </div>
          <div className="flex flex-col text-center border-r border-r-orange-950 pr-4">
            <span className="text-3xl">{minutes}</span>
            <span className="text-xl">Minutos</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="text-3xl">{seconds}</span>
            <span className="text-xl">Segundos</span>
          </div>
        </div>
      </div>
    </section>
  );
};
