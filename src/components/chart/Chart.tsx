import "chart.js/auto";
import { Line } from "react-chartjs-2";

const CHartComponent = ({ dataChart }: any) => {
  return (
    <>
      <div className="w-full mt-5">
        <Line data={dataChart} />
      </div>
    </>
  );
};

export default CHartComponent;
