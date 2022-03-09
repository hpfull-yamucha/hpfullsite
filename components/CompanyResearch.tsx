import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CompanyResearch as CompanyResearchType } from "../types";
import { Rating } from "../components/Rating";

interface Props {
  companies: CompanyResearchType[];
}

export const CompanyResearch: React.FC<Props> = (props: Props) => {
  const { companies } = props;
  return (
    <div className="flex w-10/12 justify-center flex-wrap content-between pl-3">
      {companies.map((company) => {
        const maxLength = 52;
        if (company.comment.length > maxLength) {
          company.comment = company.comment.substring(0, maxLength) + "...";
        } else {
          company.comment = company.comment;
        }
        const vokersRating =
          company.rating && company.rating >= 0 && company.rating <= 5
            ? company.rating
            : null;
        const processedVokersRating = vokersRating
          ? (100 * vokersRating) / 5
          : null;
        return (
          <Link
            key={company.id}
            href={`/company_research/${company.id}`}
            passHref
          >
            <div
              key={company.id}
              className="flex relative text-left bg-white mx-6 w-96 rounded-xl shadow-xl px-8 py-4 my-8"
            >
              <div className="w-64">
                <div className="absolute -top-4 left-2">
                  <p className="text-2xl font-bold border-b-2 border-gray-700">
                    {company.name}
                  </p>
                </div>
                <div className="mt-4 ml-2">
                  <p className="font-bold">正式企業名</p>
                  <p className="text-xs mt-2 ml-2 text-gray-600">
                    {company.formal_name}
                  </p>
                  <p className="font-bold mt-3">ひとこと</p>
                  <p className="text-xs mt-2 ml-2 text-gray-600">
                    {company.comment}
                  </p>
                  <p className="font-bold mt-3">Vokers評価</p>
                  <div className="flex items-center ml-2">
                    <Rating rating={processedVokersRating} />
                    <p className="text-sm mt-2 ml-2 text-gray-600">
                      {vokersRating}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Image
                  src={company.company_image.url}
                  width={100}
                  height={
                    (100 * company.company_image.height) /
                    company.company_image.width
                  }
                  alt="Avatar"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

CompanyResearch.displayName = "CompanyResearch";
