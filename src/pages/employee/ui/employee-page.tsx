import { useEffect, useState } from "react";
import { getEmployee } from "../api";
import { useLocation } from "react-router-dom";
import { iServerResponseEmployee } from "../../../shared/api/types.ts";
import Preloader from "../../../shared/ui/preloader";

import classes from "./employee-page.module.css";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { generateCrumbs } from "../../../widgets/breadcrumbs/model/breadcrumbs.slice.ts";

export const EmployeePage = () => {
  const location = useLocation();
  const [employee, setEmployee] = useState<iServerResponseEmployee>();

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeeId = Number(location.pathname.split("/")[2]);
        const res = await getEmployee(employeeId);
        setEmployee(res);
        dispatch(
          generateCrumbs(
            `${
              window.screen.width < 1440 ? "" : "/"
            }employees/${res ? res.name.substring(0, 15) + "..." : "Ошибка"}`,
          ),
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.pathname, dispatch]);

  if (loading) {
    return <Preloader />;
  }

  if (!employee) {
    return (
      <div className={"text-center my-auto text-4xl"}>
        Пользователь с таким id не найден!
      </div>
    );
  }

  return (
    <section className={classes.container}>
      <header className={classes.header}>
        <img
          className={classes.image}
          src={employee.photo}
          alt={"Фото сотрудника"}
          width={100}
          height={100}
        />
        {window.screen.width < 1440 ? (
          <>
            <aside className={classes.aside}>
              <h2 className={classes.name}>{employee.name}</h2>
              <p className={classes.position}>{employee.position}</p>
            </aside>
            <ul className={classes.stackUl}>
              {employee.stack.map((item) => (
                <li className={classes.stackItem} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <aside className={classes.aside}>
            <h2 className={classes.name}>{employee.name}</h2>
            <p className={classes.position}>{employee.position}</p>
            <ul className={classes.stackUl}>
              {employee.stack.map((item) => (
                <li className={classes.stackItem} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        )}
      </header>

      <div className={classes.separator} />

      <footer className={classes.footer}>
        <h3 className={classes.footerHeader}>Основная информация</h3>
        <ul className={classes.footerInfo}>
          <li className={classes.footerItem}>
            <p className={classes.footerKey}>
              Контактный телефон:
              <span
                className={clsx(classes.footerValue, "ml-[8px] mid:ml-[38px]")}
              >
                {employee.phone}
              </span>
            </p>
          </li>
          <li className={classes.footerItem}>
            <p>
              Дата рождения:
              <span
                className={clsx(
                  classes.footerValue,
                  "ml-[48px] mid:ml-[100px]",
                )}
              >
                {employee.birthdate}
              </span>
            </p>
          </li>
          <li className={classes.footerItem}>
            <p>
              Дата устройства:
              <span
                className={clsx(classes.footerValue, "ml-[40px] mid:ml-[88px]")}
              >
                {employee.dateOfEmployment}
              </span>
            </p>
          </li>
        </ul>
      </footer>
    </section>
  );
};
