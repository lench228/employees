import EmployeesControls from "../../../widgets/employees-controls";
import EmployeesTable from "../../../widgets/employees-table";

export const EmployeesPage = () => {
  return (
    <section className={"text-black"}>
      <EmployeesControls />
      <EmployeesTable></EmployeesTable>
    </section>
  );
};
