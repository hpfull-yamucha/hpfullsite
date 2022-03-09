import React, { useMemo } from "react";
import { CompanyHistory } from "../types";

interface Props {
  year: string;
  companyHistory: CompanyHistory[];
}

export const MyCompanyHistoryTable: React.FC<Props> = (props: Props) => {
  const { year, companyHistory } = props;
  const sortedCompanyHistory = useMemo(() => {
    return companyHistory.sort((a, b) => {
      return a.month < b.month ? -1 : 1;
    });
  }, [companyHistory]);

  return (
    <table className="border-b border-gray-400 w-full">
      <tbody>
        <tr>
          <td className="md:text-xl text-xs w-12 md:w-28 text-black md:py-10 py-6">
            {year}
          </td>
          <td className="md:text-xl text-xs w-6 md:w-20 text-black md:py-10 py-6">
            {sortedCompanyHistory[0].month}月
          </td>
          <td className="border-b border-gray-400 text-black text-base md:text-xl md:py-10 py-5 px-4 md:px-0">
            {sortedCompanyHistory[0].context}
          </td>
        </tr>
        {sortedCompanyHistory.map((companyHistory, index) => {
          if (index === 0) {
            return null;
          }
          return (
            <tr key={index}>
              <td className="md:text-xl text-xs w-12 md:w-28 text-black md:py-10 py-6"></td>
              <td className="md:text-xl text-xs w-6 md:w-20 text-black md:py-10 py-6">
                {companyHistory.month}月
              </td>
              <td className="border-b border-gray-400 text-black text-base md:text-xl md:py-10 py-5 px-4 md:px-0">
                {companyHistory.context}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

MyCompanyHistoryTable.displayName = "MyCompanyHistoryTable";
