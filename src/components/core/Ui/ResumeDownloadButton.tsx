import { GlareWrapper } from "@/components/Nav.components";
import { RiDownloadLine } from "@remixicon/react";

export const ResumeDownloadButton = ({
  iconClassName,
}: {
  iconClassName: string;
}) => {
  return (
    <GlareWrapper gloreColor="#00000055" className="sm:block">
      <div
        onClick={() => window.open("/resume.pdf", "_blank")}
        className={`h-12 w-36 bg-white text-black shadow-2xl cursor-pointer flex justify-center gap-2 text-sm items-center rounded-full`}
      >
        <RiDownloadLine className={iconClassName} />
        <span>
          <span className="inline">Download </span>CV
        </span>
      </div>
    </GlareWrapper>
  );
};
