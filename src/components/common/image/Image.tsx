import React from "react";

type ImageRatio = "16/9" | "4/3" | "1";

type Props = {
  url: string;
  ratio?: ImageRatio;
} & Omit<HTMLImageElement, "src">;

const Image = ({ url, ratio = "1", ...props }: Props) => {
  return (
    <div className="aspect-square">
      <img src={url} {...props} />
    </div>
  );
};

export default Image;
