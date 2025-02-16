import clsx from "clsx";

interface iEmployeeTableLabel {
  label: string | number;
}

const EmployeeTableLabel = (props: iEmployeeTableLabel) => {
  return (
    <td
      className={clsx(
        " text-main text-xs px-3 py-3 min-w-[128px]  ",
        "first:min-w-[80px] w-[80px] first:px-0",
      )}
    >
      {props.label}
    </td>
  );
};

export default EmployeeTableLabel;
