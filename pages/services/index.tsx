import { Layout } from "../../components/Layout";
import Seo from "../../components/SeoOgp";
import { getAllServices } from "../../libs/client";
import { GetStaticProps, NextPage } from "next";
import { Service as ServiceType } from "../../types";
import Image from "next/image";
import { Rating } from "../../components/Rating";

interface Props {
  services: ServiceType[];
}

const Services: NextPage<Props> = (props) => {
  const { services } = props;
  return (
    <Layout>
      <>
        <Seo
          pageTitle={"事業内容"}
          pageDescription={services[0].body}
          pageImg={services[0].image.url}
          pageImgWidth={1000}
          pageImgHeight={800}
          noindex={true}
        />
        <div className="w-screen mb-20 mt-8">
          <div className="mt-8 mb-10 mx-4">
            <p className="text-center text-4xl text-black font-semibold">
              ハッピフル活動内容
            </p>
            <p className="text-base text-center text-black">
              権力なき社団ハッピフル倶楽部の活動内容です
            </p>
          </div>
          <div className="flex flex-wrap mt-16 justify-center">
            {services.map((service) => {
              const serviceRating =
                service.rating && service.rating >= 0 && service.rating <= 5
                  ? service.rating
                  : null;
              const serviceVokersRating = serviceRating
                ? (100 * serviceRating) / 5
                : null;
              return (
                <div
                  key={service.id}
                  className="text-center mx-5 my-2 flex flex-col bg-white h-[500px] w-[320px]"
                >
                  <div>
                    <Image
                      src={service.image.url}
                      width={320}
                      height={270}
                      objectFit="cover"
                      alt="serviceimg"
                    />
                  </div>
                  <div className="px-4 flex flex-col w-full h-full justify-between p-2 mt-3">
                    <div>
                      <p className="text-base text-center text-black font-semibold mb-2">
                        {service.title}
                      </p>
                      <p className="text-sm text-left text-gray-500 leading-relaxed">
                        {service.body}
                      </p>
                    </div>
                    <div className="flex justify-end items-center text-gray-500">
                      <div className="font-bold mt-1 mr-1">事業への本気度:</div>

                      <div className="flex items-center">
                        <Rating rating={serviceVokersRating} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const data = await getAllServices();
  return {
    props: {
      services: data.contents,
    },
  };
};

export default Services;
