// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"#fafafa"}>
        <path
          d={
            "M22 33a5 5 0 01-5.491 4.977A5.145 5.145 0 0112 32.785V32a1 1 0 00-1-1H3V7a4 4 0 014-4h24v7a7 7 0 000 14v7h-8a1 1 0 00-1 1z"
          }
          fill={"#e8e8e8"}
        ></path>

        <path
          d={
            "M33 42a5 5 0 014.977 5.491A5.145 5.145 0 0132.785 52H32a1 1 0 00-1 1v8H7a4 4 0 01-4-4V33h7a7 7 0 0014 0h7v8a1 1 0 001 1z"
          }
        ></path>

        <path
          d={
            "M42 31a5 5 0 015.491-4.977A5.145 5.145 0 0152 31.215V32a1 1 0 001 1h8v24a4 4 0 01-4 4H33v-7a7 7 0 000-14v-7h8a1 1 0 001-1z"
          }
          fill={"#e8e8e8"}
        ></path>

        <path
          d={
            "M31 22a5 5 0 01-4.977-5.491A5.145 5.145 0 0131.215 12H32a1 1 0 001-1V3h24a4 4 0 014 4v24h-7a7 7 0 00-14 0h-7v-8a1 1 0 00-1-1z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
