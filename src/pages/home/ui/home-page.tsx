import { Link } from "react-router-dom";
import { ROUTES } from "../../../app/routers/lib/const.ts";

export const HomePage = () => {
  return (
    <div className={" flex flex-col gap-12"}>
      <h1 className={"text-3xl font-raleway-bold"}>Главная страница</h1>
      <Link to={ROUTES.employees}>
        <p
          className={
            "p-4 border-2 border-accent hover:bg-accent-grey rounded-2xl"
          }
        >
          Перейти к таблице сотрудников
        </p>
      </Link>
    </div>
  );
};
