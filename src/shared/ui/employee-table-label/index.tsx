import clsx from "clsx";

interface iEmployeeTableLabel {
  label: string | number;
}

const EmployeeTableLabel = (props: iEmployeeTableLabel) => {
  return (
    <td
      className={clsx(
        "text-main dark:text-main-dark text-xs py-3 sm:min-w-[128px]",
        "first:min-w-[80px] first-w-[80px] first:px-0",
        "transition-colors duration-500 ease-in-out",
        "lg:text-xl  lg:py-7 ",
      )}
    >
      {props.label}
    </td>
  );
};

export default EmployeeTableLabel;
