import React from "react";

interface Props {
  definitionTeam: string;
  children: JSX.Element;
}

export const CompanyJobTable = (props: Props) => {
  const { definitionTeam, children } = props;

  return (
    <>
      <dt className="text-2xl text-black font-serif mt-20">
        [{definitionTeam}]
      </dt>
      <dd className="mt-6">
        <p className="text-lg leading-loose text-black font-serif">
          {children}
        </p>
      </dd>
    </>
  );
};

CompanyJobTable.displayName = "CompanyJobTable";
