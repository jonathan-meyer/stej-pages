import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import classNames from "classnames";
import { Children, useEffect, useMemo, useRef } from "react";
import { Container, ContainerProps, Image } from "react-bootstrap";
import { useLocation } from "react-router";
import { MenuItem } from "./Menu";
import PagesContext from "./PagesContext";
import { isFooter, isHeader, isPage } from "./pageTypes";

export type PagesProps = ContainerProps;

const Pages = ({ children, className, ...props }: PagesProps) => {
  const { hash } = useLocation();

  const parallax = useRef<IParallax>(null!);

  const menuItems = useMemo<MenuItem[]>(
    () =>
      Children.toArray(children)
        .filter((child) => isPage(child))
        .map((child, offset) => ({
          path: `#page-${offset + 1}`,
          label: child.props.label ?? "",
          hidden: child.props.hideFromMenu,
        })),
    [children],
  );

  const pages = useMemo(
    () =>
      Children.toArray(children)
        .filter((child) => isPage(child))
        .map((child) => child.props),
    [children],
  );

  const header = useMemo(
    () =>
      Children.toArray(children)
        .filter((child) => isHeader(child))
        .at(0)?.props.children,
    [children],
  );

  const footer = useMemo(
    () =>
      Children.toArray(children)
        .filter((child) => isFooter(child))
        .at(0)?.props.children,
    [children],
  );

  const pageCount = useMemo(() => pages.length, [pages]);

  useEffect(() => {
    const page = Number(hash.match(/page-(\d+)/)?.at(1) ?? "1") - 1;
    console.log("scrool to:", { page });
    parallax.current.scrollTo(page);
  }, [hash]);

  return (
    <PagesContext.Provider
      value={{
        menuItems,
        pageCount,
        scrollTo: (page) => {
          parallax.current.scrollTo(page);
        },
      }}
    >
      <Parallax ref={parallax} pages={pageCount}>
        <ParallaxLayer
          sticky={{ start: 0, end: pageCount }}
          className="d-flex flex-column justify-content-start"
        >
          <div className="d-flex flex-column align-self-start bg-body w-100 ">
            <Container
              {...props}
              className={classNames(className, {})}
              data-testid={`header`}
            >
              {header}
            </Container>
          </div>
        </ParallaxLayer>

        {pages.map(({ children, background }, i) => (
          <>
            <ParallaxLayer
              offset={i}
              speed={0.25}
              className="d-flex flex-column justify-content-center"
            >
              {background?.color && (
                <div
                  style={{ backgroundColor: background?.color }}
                  className="vh-100 vw-100 opacity-100 object-fit-cover "
                />
              )}
              {background?.image && (
                <Image
                  src={background?.image}
                  className="vh-100 vw-100 opacity-25 object-fit-cover"
                />
              )}
            </ParallaxLayer>

            <ParallaxLayer
              offset={i}
              speed={0.5}
              className="d-flex flex-column justify-content-start pt-2"
            >
              <Container {...props} data-testid={`page-${i}`}>
                {children}
              </Container>
            </ParallaxLayer>
          </>
        ))}

        <ParallaxLayer
          sticky={{ start: 0, end: pageCount }}
          className="d-flex flex-column justify-content-end"
        >
          <div className="d-flex flex-column align-self-end bg-body w-100 ">
            <Container {...props} data-testid={`footer`}>
              {footer}
            </Container>
          </div>
        </ParallaxLayer>
      </Parallax>
    </PagesContext.Provider>
  );
};

export default Pages;
