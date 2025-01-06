import { ReactElement } from "react";
import { GiBigDiamondRing, GiRedCarpet, GiWineGlass } from "react-icons/gi";

type AgendaItemProps = {
  icon: ReactElement;
  time: string;
  title: string;
};

const AgendaItem = ({ icon, time, title }: AgendaItemProps) => {
  return (
    <div className="flex justify-center text-xl font-ebgaramond">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-center gap-3">
          <div className="flex justify-center">{icon}</div>
          <div>
            {time} - {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Agenda = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="p-6 flex flex-col gap-6">
        <h3 className="font-ballet text-4xl text-center">Intinerario</h3>
        <p className="font-ebgaramond text-lg">
          Queremos que disfrutes cada momento con nosotros. Aquí tienes los
          detalles para que no te pierdas nada:
        </p>

        <AgendaItem
          icon={<GiBigDiamondRing size={64} />}
          time="13:00"
          title="Registro Civil"
        />

        <AgendaItem
          icon={<GiRedCarpet size={64} />}
          time="16:30"
          title="Recepción"
        />

        <AgendaItem
          icon={<GiWineGlass size={64} />}
          time="17:00"
          title="Brindis"
        />
      </div>
    </section>
  );
};
