import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Stats from "./Stats";
import GreenDropdown from "../ui/Icons/GreenDropdown";

// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface SellerChartProps {
  data: number[];
}

const SellerChart: React.FC<SellerChartProps> = ({ data }) => {
  const state = {
    series: [
      {
        name: "Sales",
        data,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      grid: {
        borderColor: "#E6E6E6",
        DashArray: 3,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      colors: ["#1B59F8"],
      xaxis: {
        type: "category",
        categories: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        tickPlacement: "between",
        axisBorder: {
          show: true,
          color: "#DFDFDF",
        },
      },
      yaxis: {
        max: 400,
        labels: {
          style: {
            colors: "#A0A0A0",
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        x: {
          format: "MMM",
        },
      },
      markers: {
        size: 5,
        colors: ["#1B59F8"],
        strokeColors: "#ffffff",
        strokeWidth: 2,
        hover: {
          sizeOffset: 6,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
    },
  };

  return (
    <div className="w-full flex flex-col gap-[24px] rounded-[20.366px] bg-white py-4 px-2">
      <div className="flex flex-col gap-[8px]">
        <h4 className="font-sansLight font-medium text-[#201950] px-4 leading-normal text-[24px]">
          Store Status
        </h4> 
        <div className="flex ">
        <Stats title="Total Sales" amount="9193" icon={<GreenDropdown />} percent="1.20%" />
        <Stats title="Total Visitors" amount="9193" icon={<GreenDropdown />} percent="1.20%" />
        <Stats title="Total Users" amount="9193" icon={<GreenDropdown />} percent="1.20%" />
        <Stats title="Total Sellers" amount="9193" icon={<GreenDropdown />} percent="1.20%" />
        </div>

        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={300}
        />
      </div>
    </div>
  );
};

export default SellerChart;
