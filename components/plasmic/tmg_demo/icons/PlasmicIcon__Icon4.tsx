// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
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
            "M15.893 22H15v-5h-3.141a3.982 3.982 0 01-7.718 0H1v12a2 2 0 002 2h12v-5h1a2 2 0 001.973-2.336A2.075 2.075 0 0015.893 22z"
          }
        ></path>

        <path
          d={
            "M22 16.107V17h-5v3.141a3.982 3.982 0 010 7.718V31h12a2 2 0 002-2V17h-5v-1a2 2 0 00-2.336-1.973A2.075 2.075 0 0022 16.107z"
          }
          fill={"#e8e8e8"}
        ></path>

        <path
          d={
            "M16.107 10H17v5h3.141a3.982 3.982 0 017.718 0H31V3a2 2 0 00-2-2H17v5h-1a2 2 0 00-1.973 2.336A2.075 2.075 0 0016.107 10z"
          }
        ></path>

        <path
          d={
            "M12 8a3.991 3.991 0 013-3.859V1H3a2 2 0 00-2 2v12h5v.893a2.075 2.075 0 001.664 2.08A2 2 0 0010 16v-1h5v-3.141A3.992 3.992 0 0112 8z"
          }
          fill={"#e8e8e8"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
