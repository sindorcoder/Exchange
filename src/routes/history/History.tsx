import { useSelector } from "react-redux";
import TableComponent from "../../components/table/Table";

const History = () => {
  const data = useSelector((state: any) => state.transaction)

  return <>
    <TableComponent data={data} />
  </>;
};

export default History;
