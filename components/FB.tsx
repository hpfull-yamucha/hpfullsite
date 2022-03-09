import Image from "next/image";

interface Props {
  id: string;
  title: string;
  avatar: string;
  content: string;
}

export const FB: React.FC<Props> = (props: Props) => {
  const { id, title, avatar, content } = props;
  return (
    <>
      <div className="text-left px-6 rounded mt-12 flex w-full md:w-10/12">
        <p style={{ writingMode: "vertical-rl" }} className="leading-none">
          voice
        </p>
        <div className="border-t border-b border-black w-12 text-center mr-8 max-h-11">
          <p className="text-2xl leading-10">{id}</p>
        </div>

        <p className="text-2xl leading-10">{title}</p>
      </div>
      <div className="flex flex-col items-start px-6 mt-2 w-full md:w-10/12">
        <div className="flex justify-center mb-4">
          <Image
            className="rounded-full"
            src={avatar}
            width={72}
            height={72}
            alt="Avatar"
          />
        </div>
        <div className="bg-gray-200 rounded-3xl">
          <p className="py-2 px-4">{content}</p>
        </div>
      </div>
    </>
  );
};

FB.displayName = "FB";
