import { TextWithImageFill } from "@/components/Wrappers";
import { Typography } from "../Ui";

export const ExperienceCard = ({
  imageUrl,
  title,
  description,
  count,
}: {
  imageUrl: string;
  title: string;
  description: string;
  count: string;
}) => {
  return (
    <div className="group relative bg-white/5 pt-5 rounded-lg hover:bg-transparent transition-all duration-700">
      <TextWithImageFill
        imageUrl={imageUrl}
        className="opacity-100 absolute left-1/2 -translate-x-1/2 group-hover:opacity-0 group-hover:-mt-10 transition-all duration-500"
      >
        <Typography
          variant="title"
          className="!text-[100px] md:!text-[120px] leading-none number-font text-center"
        >
          {count}
        </Typography>
      </TextWithImageFill>
      <Typography
        variant="title"
        className="!text-[100px] md:!text-[120px] leading-none number-font mx-auto transition-all duration-500 group-hover:-mt-10 px-5 w-fit group-hover:block !text-white/80"
      >
        {count}
      </Typography>
      <img
        src={imageUrl}
        className="w-0 h-0 object-cover group-hover:w-[150px] group-hover:h-[150px] transition-all duration-300 absolute top-[100px] right-1/2 group-hover:right-10 group-hover:rotate-[20deg] rounded-lg  opacity-80"
      />
      <div className="transition-all duration-500 w-full p-3 px-4 text-center mt-8 group-hover:text-left group-hover:w-[200px] group-hover:bg-gradient-to-br from-white/20 to-transparent group-hover:-rotate-[10deg] backdrop-blur-2xl rounded-xl">
        <Typography variant="subtitle" className="font-semibold">
          {title}
        </Typography>
        <Typography
          variant="appText"
          className="text-sm text-zinc-400 mt-3 leading-relaxed max-w-[250px] mx-auto"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};
