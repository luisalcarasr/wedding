import { ReactElement } from "react";
import { BsCake } from "react-icons/bs";
import { GiBigDiamondRing, GiForkKnifeSpoon, GiPhotoCamera, GiRedCarpet, GiWineGlass } from "react-icons/gi";

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
          icon={<GiPhotoCamera size={64} />}
          time="16:45"
          title="Fotos"
        />
        <AgendaItem
          icon={<GiWineGlass size={64} />}
          time="17:00"
          title="Brindis"
        />
        <AgendaItem
          icon={<GiForkKnifeSpoon size={64} />}
          time="17:30"
          title="Comida"
        />
        <AgendaItem
          icon={<BsCake size={64} />}
          time="19:00"
          title="Pastel"
        />
      </div>
      <div className="text-center mt-16 font-cinzel text-2xl">
        <p className="">Confirma tu asistencia</p>
      </div>
    </section>
  );
};
