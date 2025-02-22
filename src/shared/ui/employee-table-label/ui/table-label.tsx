import classes from "./table-label.module.css";

interface iEmployeeTableLabel {
  label: string | number;
}

const EmployeeTableLabel = (props: iEmployeeTableLabel) => {
  return <td className={classes.label}>{props.label}</td>;
};

export default EmployeeTableLabel;
