// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
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
            "M22 8H5a1 1 0 00-1 1v16h2V10h7v5H9v2h5a1 1 0 001-1v-6h6v13H11v-3H9v4a1 1 0 001 1h12a1 1 0 001-1V9a1 1 0 00-1-1z"
          }
        ></path>

        <path
          d={
            "M27 0h-1a1 1 0 00-1 1v19a1 1 0 001 1h.85a3.083 3.083 0 013.087 2.369 3.183 3.183 0 01.063.577v.084a2.951 2.951 0 01-.678 1.869A2.99 2.99 0 0127 27H2V6h21V4H1a1 1 0 00-1 1v23a1 1 0 001 1h26a5 5 0 005-4.943V5a5.006 5.006 0 00-5-5z"
          }
          fill={"#e8e8e8"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
