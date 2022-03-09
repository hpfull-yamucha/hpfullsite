import React from "react";

interface Props {
  contentName: string;
  content: string;
}

export const CompanyContentCard: React.FC<Props> = (props: Props) => {
  const { contentName, content } = props;
  return (
    <>
      <dt className="text-xl text-black">{contentName}</dt>
      <dd className="w-full">
        <div
          style={{ marginRight: "5%", marginLeft: "5%" }}
          className="my-8 shadow-inner rounded-xl bg-white p-4 max-w-full"
        >
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html: `${content}`,
            }}
          />
        </div>
      </dd>
    </>
  );
};

CompanyContentCard.displayName = "CompanyContentCard";
