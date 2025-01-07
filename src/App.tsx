import { Agenda } from "./sections/Agenda";
import { Cover } from "./sections/Cover";
import { Date } from "./sections/Date";
import { Gifts } from "./sections/Gifts";
import { Location } from "./sections/Location";
import { Photos } from "./sections/Photos";
import { Timer } from "./sections/Timer";

export default function App() {
  return (
    <div className="max-w-[430px] mx-auto">
      <Cover />
      <Date />
      <Location />
      <Gifts />
      <Agenda />
      <Photos />
      <Timer />
    </div>
  );
}
