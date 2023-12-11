// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXTYCQMcFRriEHeNaPTHe7
// Component: BLf5zOGH50LS

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button2 from "../../Button2"; // plasmic-import: t4Ewn2gBSIli/component

import { useScreenVariants as useScreenVariantswtDzL3SdIaL } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WtDzL_3SDIaL/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_tmg_demo.module.css"; // plasmic-import: tXTYCQMcFRriEHeNaPTHe7/projectcss
import sty from "./PlasmicCaseStudyTemplate.module.css"; // plasmic-import: BLf5zOGH50LS/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 8Ydc_EtyRQKt/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: fV2xAdFtCCM7/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: WWKN1zpTsehN/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: g0aZxbzKHlNV/icon

createPlasmicElementProxy;

export type PlasmicCaseStudyTemplate__VariantMembers = {};
export type PlasmicCaseStudyTemplate__VariantsArgs = {};
type VariantPropType = keyof PlasmicCaseStudyTemplate__VariantsArgs;
export const PlasmicCaseStudyTemplate__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCaseStudyTemplate__ArgsType = {};
type ArgPropType = keyof PlasmicCaseStudyTemplate__ArgsType;
export const PlasmicCaseStudyTemplate__ArgProps = new Array<ArgPropType>();

export type PlasmicCaseStudyTemplate__OverridesType = {
  caseStudy?: p.Flex<"div">;
  homeHero?: p.Flex<"section">;
  menu?: p.Flex<"div">;
  menuElements?: p.Flex<"div">;
  button?: p.Flex<"button">;
  heroText?: p.Flex<"h1">;
  span?: p.Flex<"span">;
  heroDescription?: p.Flex<"div">;
  heroCta?: p.Flex<typeof Button2>;
  columns?: p.Flex<"section">;
  background2?: p.Flex<"div">;
  copy?: p.Flex<"div">;
  section?: p.Flex<"section">;
  foreground?: p.Flex<"div">;
};

export interface DefaultCaseStudyTemplateProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCaseStudyTemplate__RenderFunc(props: {
  variants: PlasmicCaseStudyTemplate__VariantsArgs;
  args: PlasmicCaseStudyTemplate__ArgsType;
  overrides: PlasmicCaseStudyTemplate__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswtDzL3SdIaL()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicCaseStudyTemplate.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicCaseStudyTemplate.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicCaseStudyTemplate.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"caseStudy"}
          data-plasmic-override={overrides.caseStudy}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.caseStudy
          )}
        >
          <section
            data-plasmic-name={"homeHero"}
            data-plasmic-override={overrides.homeHero}
            className={classNames(projectcss.all, sty.homeHero)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"menu"}
              data-plasmic-override={overrides.menu}
              hasGap={true}
              className={classNames(projectcss.all, sty.menu)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"menuElements"}
                data-plasmic-override={overrides.menuElements}
                hasGap={true}
                className={classNames(projectcss.all, sty.menuElements)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__bKe0Q)}
                  displayHeight={"40px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"40px"}
                  src={{
                    src: "/plasmic/tmg_demo/images/tmgIconpng.png",
                    fullWidth: 64,
                    fullHeight: 64,
                    aspectRatio: undefined
                  }}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__uECn)}
                >
                  <Button2
                    className={classNames("__wab_instance", sty.button2__lZhyL)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__pq1Zf)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__aGXt)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__y9Yud
                      )}
                    >
                      {"Services"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames(
                      "__wab_instance",
                      sty.button2___2ACvR
                    )}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__xeicb)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__mori9)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nt1H5
                      )}
                    >
                      {"Features"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__sAaCl)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__up5SY)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__kgpxP)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__oZk5Z
                      )}
                    >
                      {"Company"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__dVnlp)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__usLzb)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__p0DUz)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___6O3S4
                      )}
                    >
                      {"Contact"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__b3Dib)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg___8Z35)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__n2Q9L)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hrtvX
                      )}
                    >
                      {"Log in"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__q4Zjl)}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__gPuVu)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__lFyds)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jfvwg
                      )}
                    >
                      {"Sign up"}
                    </div>
                  </Button2>
                </p.Stack>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__jwHw)}
                  >
                    <button
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button
                      )}
                    >
                      {"Sign up"}
                    </button>
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__jILnQ
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__unBc1)}
                          role={"img"}
                        />
                      }
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__txhEi)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__wx2Q7
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button2>
                  </div>
                ) : null}
              </p.Stack>
            </p.Stack>
            <h1
              data-plasmic-name={"heroText"}
              data-plasmic-override={overrides.heroText}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.heroText
              )}
            >
              <React.Fragment>
                <React.Fragment>
                  {"AN AGENCY CRAFTED\nBY ENTREPRENEURS\n"}
                </React.Fragment>
                {
                  <span
                    data-plasmic-name={"span"}
                    data-plasmic-override={overrides.span}
                    className={classNames(
                      projectcss.all,
                      projectcss.span,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.span
                    )}
                  >
                    {"FOR ENTREPRENEURS"}
                  </span>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </h1>
            <div
              data-plasmic-name={"heroDescription"}
              data-plasmic-override={overrides.heroDescription}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.heroDescription
              )}
            >
              {
                "Thela Media Group (TMG) was founded in 2010 with the goal of helping businesses of all sizes and industries achieve their marketing goals and reach their target audiences through innovative and effective strategies. Since then, we have grown into a full-service marketing and advertising agency with a team of experienced professionals and a proven track record of success"
              }
            </div>
            <Button2
              data-plasmic-name={"heroCta"}
              data-plasmic-override={overrides.heroCta}
              className={classNames("__wab_instance", sty.heroCta)}
              color={"softSand"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__uvSht)}
                  role={"img"}
                />
              }
              showEndIcon={true}
            >
              {"Let's Talk"}
            </Button2>
          </section>
          <section
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <h2
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2__ghpux
              )}
            >
              {"What We Do"}
            </h2>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__pqEcY)}
            >
              <div className={classNames(projectcss.all, sty.column___2OGhs)} />

              <div className={classNames(projectcss.all, sty.column___6SpBj)} />

              <div className={classNames(projectcss.all, sty.column__zAna2)} />
            </p.Stack>
          </section>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__xrfrh)}
          >
            <div className={classNames(projectcss.all, sty.columns__eoAfy)}>
              <div className={classNames(projectcss.all, sty.column__li75W)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__qrb2Z)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"320px"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  src={
                    "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2916&q=80"
                  }
                />

                <div
                  data-plasmic-name={"background2"}
                  data-plasmic-override={overrides.background2}
                  className={classNames(projectcss.all, sty.background2)}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column___0Ue0A)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___4BIi)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"copy"}
                    data-plasmic-override={overrides.copy}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.copy)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__pHtoP)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__eGeSb
                        )}
                      >
                        {"Welcome"}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__t7Hb
                        )}
                      >
                        {"Let's get going"}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mde75
                        )}
                      >
                        {
                          "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                        }
                      </div>
                    </p.Stack>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__lHcM2)}
                    >
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__ujalk
                        )}
                        color={"blue"}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__fu7Ak
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__mdH7L
                            )}
                            role={"img"}
                          />
                        }
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___75QuQ
                          )}
                        >
                          {"Start now ->"}
                        </div>
                      </Button2>
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__vtg1I
                        )}
                        color={"clear"}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__mjEo5
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__lQgi
                            )}
                            role={"img"}
                          />
                        }
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__rlSmm
                          )}
                        >
                          {"Learn more\u2026"}
                        </div>
                      </Button2>
                    </p.Stack>
                  </p.Stack>
                </p.Stack>
              </div>
            </div>
          </p.Stack>
          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground"}
              data-plasmic-override={overrides.foreground}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground)}
            >
              <div className={classNames(projectcss.all, sty.column___16J79)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__tPxZv)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4N2P
                    )}
                  >
                    {"Freedoms"}
                  </div>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__hLws4
                    )}
                  >
                    {"Open by design"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tbrUm
                    )}
                  >
                    {
                      "Vitae sed sem a justo mauris potenti a primis vivamus justo tempor viverra adipiscing convallis fusce odio condimentum mi parturient ultricies."
                    }
                  </div>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__vUanf)}
                    endIcon={
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg___9La6J)}
                        role={"img"}
                      />
                    }
                    showEndIcon={true}
                    size={"minimal"}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__k2Z05)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nafGj
                      )}
                    >
                      {"Learn more"}
                    </div>
                  </Button2>
                </p.Stack>
              </div>
              <div className={classNames(projectcss.all, sty.column__prJn)}>
                <div className={classNames(projectcss.all, sty.freeBox__bx56J)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__zAiD)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gQw9F
                      )}
                    >
                      {"Built on capability"}
                    </div>
                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg__ycoA)}
                      role={"img"}
                    />
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__b8PYm)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__eCZu4
                      )}
                    >
                      {"Highly energetic"}
                    </div>
                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg__fS8Na)}
                      role={"img"}
                    />
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__b65Lx)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jZjZm
                      )}
                    >
                      {"100% transparency and accountability"}
                    </div>
                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg__nT1Yx)}
                      role={"img"}
                    />
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__usRrs)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hvoad
                      )}
                    >
                      {"Refreshing clarity"}
                    </div>
                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg__j749)}
                      role={"img"}
                    />
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__m1FQa)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__erWhK
                      )}
                    >
                      {"Modern results"}
                    </div>
                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg__q2RR)}
                      role={"img"}
                    />
                  </p.Stack>
                </div>
              </div>
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  caseStudy: [
    "caseStudy",
    "homeHero",
    "menu",
    "menuElements",
    "button",
    "heroText",
    "span",
    "heroDescription",
    "heroCta",
    "columns",
    "background2",
    "copy",
    "section",
    "foreground"
  ],
  homeHero: [
    "homeHero",
    "menu",
    "menuElements",
    "button",
    "heroText",
    "span",
    "heroDescription",
    "heroCta"
  ],
  menu: ["menu", "menuElements", "button"],
  menuElements: ["menuElements", "button"],
  button: ["button"],
  heroText: ["heroText", "span"],
  span: ["span"],
  heroDescription: ["heroDescription"],
  heroCta: ["heroCta"],
  columns: ["columns"],
  background2: ["background2"],
  copy: ["copy"],
  section: ["section", "foreground"],
  foreground: ["foreground"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  caseStudy: "div";
  homeHero: "section";
  menu: "div";
  menuElements: "div";
  button: "button";
  heroText: "h1";
  span: "span";
  heroDescription: "div";
  heroCta: typeof Button2;
  columns: "section";
  background2: "div";
  copy: "div";
  section: "section";
  foreground: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCaseStudyTemplate__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCaseStudyTemplate__VariantsArgs;
    args?: PlasmicCaseStudyTemplate__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCaseStudyTemplate__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCaseStudyTemplate__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCaseStudyTemplate__ArgProps,
          internalVariantPropNames: PlasmicCaseStudyTemplate__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCaseStudyTemplate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "caseStudy") {
    func.displayName = "PlasmicCaseStudyTemplate";
  } else {
    func.displayName = `PlasmicCaseStudyTemplate.${nodeName}`;
  }
  return func;
}

export const PlasmicCaseStudyTemplate = Object.assign(
  // Top-level PlasmicCaseStudyTemplate renders the root element
  makeNodeComponent("caseStudy"),
  {
    // Helper components rendering sub-elements
    homeHero: makeNodeComponent("homeHero"),
    menu: makeNodeComponent("menu"),
    menuElements: makeNodeComponent("menuElements"),
    button: makeNodeComponent("button"),
    heroText: makeNodeComponent("heroText"),
    span: makeNodeComponent("span"),
    heroDescription: makeNodeComponent("heroDescription"),
    heroCta: makeNodeComponent("heroCta"),
    columns: makeNodeComponent("columns"),
    background2: makeNodeComponent("background2"),
    copy: makeNodeComponent("copy"),
    section: makeNodeComponent("section"),
    foreground: makeNodeComponent("foreground"),

    // Metadata about props expected for PlasmicCaseStudyTemplate
    internalVariantProps: PlasmicCaseStudyTemplate__VariantProps,
    internalArgProps: PlasmicCaseStudyTemplate__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Case Study",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCaseStudyTemplate;
/* prettier-ignore-end */