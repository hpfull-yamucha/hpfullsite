import React from "react";

interface Props {
  NameOfComapnyInformation: string;
  companyInformation?: string;
  directors?: JSX.Element[];
}

export const MyCompanyData: React.FC<Props> = (props: Props) => {
  const { NameOfComapnyInformation, companyInformation, directors } = props;

  return (
    <dl className="items-center py-10 flex border-b border-gray-400">
      <dt className="pr-2 md:text-xl text-xs w-14 md:w-48 text-black">
        {NameOfComapnyInformation}
      </dt>
      <dd>
        <div className="text-black text-base md:text-xl ml-8 md:m-0">
          {companyInformation}
          {directors}
        </div>
      </dd>
    </dl>
  );
};

MyCompanyData.displayName = "MyCompanyData";
