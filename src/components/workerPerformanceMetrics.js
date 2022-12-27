import React from "react";
import DropdownComponent from "./dropdown";
import InformationBox from "./informationBox";
import PieChart from "./pieChart";
import { LineChart } from "./lineChart";
import ApexChart from "./boxPlot";

export default function WorkerPerformanceMetrics() {
  return (
    <section id="workerperformancemetrics" className="py-10 text-white mt-4">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold border-t-2 border-white pt-2">Worker Performance Metrics</h3>
        <div className=" flex flex-col mt-10 bg-gray-800 rounded-lg  max-w-6xl mx-auto">
          <div className="flex m-4 font-display text-center justify-center space-x-2">
            <label className="m-2 text-xl font-semibold text-white">
              Select Worker
            </label>
            <DropdownComponent args={["Worker 1", "Worker 2", "Worker 3"]} />
          </div>
          <div className="pt-6 bg-white justify-center items-center border-white-200 rounded-lg mx-auto">
            <InformationBox />
          </div>
          <div className=" w-full h-full flex rounded-lg justify-center items-center">
            <div className="w-11/12 flex flex-col m-2 pb-2 h-11/12  bg-white rounded-lg ">
              <div className=" w-full h-fit flex flex-row ml-2">
                <div className="w-2/5 rounded-lg">
                  <PieChart />
                </div>
                <div className="w-3/5 pr-6 rounded-lg mt-2 text-gray-600">
                  <ApexChart />
                </div>
              </div>
              <div className=" w-full h-full rounded-lg">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}