// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXTYCQMcFRriEHeNaPTHe7

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, antdConfigProviderProps, embedCssProps } = props;

  return (
    <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={
        antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
          ? antdConfigProviderProps.borderRadius!
          : 6
      }
      colorBgBase={
        antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
          ? antdConfigProviderProps.colorBgBase!
          : "#ffffff"
      }
      colorError={
        antdConfigProviderProps && "colorError" in antdConfigProviderProps
          ? antdConfigProviderProps.colorError!
          : "#ff4d4f"
      }
      colorInfo={
        antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
          ? antdConfigProviderProps.colorInfo!
          : "#1677ff"
      }
      colorPrimary={
        antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
          ? antdConfigProviderProps.colorPrimary!
          : "#1677ff"
      }
      colorSuccess={
        antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
          ? antdConfigProviderProps.colorSuccess!
          : "#52c41a"
      }
      colorWarning={
        antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
          ? antdConfigProviderProps.colorWarning!
          : "#faad14"
      }
      controlHeight={
        antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
          ? antdConfigProviderProps.controlHeight!
          : 32
      }
      defaultDark={
        antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
          ? antdConfigProviderProps.defaultDark!
          : false
      }
      lineWidth={
        antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
          ? antdConfigProviderProps.lineWidth!
          : 1
      }
      loadingText={
        antdConfigProviderProps && "loadingText" in antdConfigProviderProps
          ? antdConfigProviderProps.loadingText!
          : undefined
      }
      removeLoading={
        antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
          ? antdConfigProviderProps.removeLoading!
          : undefined
      }
      sizeStep={
        antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeStep!
          : 4
      }
      sizeUnit={
        antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeUnit!
          : 4
      }
      themeStyles={
        antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
          ? antdConfigProviderProps.themeStyles!
          : true
          ? {
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "#535353",
              letterSpacing: "normal"
            }
          : undefined
      }
      wireframe={
        antdConfigProviderProps && "wireframe" in antdConfigProviderProps
          ? antdConfigProviderProps.wireframe!
          : false
      }
    >
      <EmbedCss
        {...embedCssProps}
        css={
          embedCssProps && "css" in embedCssProps
            ? embedCssProps.css!
            : "/* CSS snippet */\n\n.stats-area {\n z-index: 1;\n}\n\n.elevation {\n    z-index: 9999;\n}\n\n.slideImg {\n    width: 100%; /* Adjust based on your image's aspect ratio */\n    height: auto; /* Adjust based on your image's aspect ratio */\n    position: relative;\n    animation: slideImg 140s linear infinite; /* Adjust time for speed */\n\n}\n\n.slideImgRightSlow {\n    width: 100%; /* Adjust based on your image's aspect ratio */\n    height: auto; /* Adjust based on your image's aspect ratio */\n    position: relative;\n    animation: slideImg 190s linear infinite; /* Adjust time for speed */\n\n}\n\n.slideImgLeft {\n    width: 100%; /* Adjust based on your image's aspect ratio */\n    height: auto; /* Adjust based on your image's aspect ratio */\n    position: relative;\n    animation: slideImgLeft 180s linear infinite; /* Adjust time for speed */\n\n}\n\n\n\n\n\n\n\n@keyframes slideImg {\n    0% {\n        left: -100%; /* Start off-screen to the left */\n    }\n    100% {\n        left: 100%; /* End off-screen to the right */\n    }\n}\n\n@keyframes slideImgLeft {\n    0% {\n        right: -100%; /* Start off-screen to the left */\n    }\n    100% {\n        right: 100%; /* End off-screen to the right */\n    }\n}\n\n\n@media (max-width: 768px) { /* Adjust 768px to suit your definition of mobile screen size */\n    .slideImg {\n        animation: slideImg 30s linear infinite; /* Faster animation on mobile devices */\n    }\n\n    .slideImgRightSlow {\n        animation: slideImgRightSlow 20s linear infinite; /* Faster animation on mobile devices */\n    }\n\n    .slideImgLeft {\n        animation: slideImgLeft 25s linear infinite; /* Faster animation on mobile devices */\n    }\n\n    @keyframes slideImgRightSlow {\n        0% {\n            left: -100%; /* Start off-screen to the left */\n        }\n        100% {\n            left: 100%; /* End off-screen to the right */\n        }\n    }\n}\n\n"
        }
      >
        {children}
      </EmbedCss>
    </AntdConfigProvider>
  );
}
