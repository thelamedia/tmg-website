// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"#fafafa"}>
        <path
          d={
            "M26 25.5c0 2.481-2.019 4.5-4.5 4.5S17 27.981 17 25.5v-19C17 2.916 14.084 0 10.5 0S4 2.916 4 6.5V20h2V6.5C6 4.019 8.019 2 10.5 2S15 4.019 15 6.5v19c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5V12h-2v13.5z"
          }
        ></path>

        <circle fill={"#e8e8e8"} cx={"27"} cy={"5"} r={"5"}></circle>

        <circle fill={"#e8e8e8"} cx={"5"} cy={"27"} r={"5"}></circle>
      </g>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
