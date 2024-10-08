import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import MoreIcon from "../../assets/icon-more.svg";
import { useRoutes } from "../../hooks/use-routes";
import { ROUTE_TYPES } from "../../types";
import { Icon } from "../Icon";
import { Svg } from "../Svg";
import styles from "./Menu.module.scss";

export const Menu = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLLIElement>(null);
  const [isClosed, setIsClosed] = useState(true);
  const [containerSize, setContainerSize] = useState(0);
  const [iconSize, setIconSize] = useState(0);
  const { pathname } = useLocation();
  const { routes, isLoading } = useRoutes();

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;

      setContainerSize(Math.max(width, height));
    });

    resizeObserver.observe(containerRef.current);
  }, []);

  useEffect(() => {
    if (!iconRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      setIconSize(entries[0].target.getBoundingClientRect().width);
    });

    resizeObserver.observe(iconRef.current);
  }, []);

  if (isLoading) {
    return null;
  }

  const items = routes.filter(
    (route) => route.type === ROUTE_TYPES.NORMAL_PAGE,
  );
  const isPrimary = (index: number) => (index + 2) * iconSize < containerSize;
  const hasSecondary = () => items.some((_, index) => !isPrimary(index));
  const visibleItems = items.filter((_, index) => isPrimary(index));
  const collapsedItems = items.filter((_, index) => !isPrimary(index));
  const collapsedClassNames = clsx({ [styles.collapsed]: isClosed });
  const moreClassNames = clsx({
    [styles.hidden]: !containerSize || !iconSize || !hasSecondary(),
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <ul className={styles.primary}>
        {visibleItems.map(({ path, title, icon }) => (
          <li key={path}>
            <Link to={path}>
              <Svg
                animated
                active={path === pathname}
                text={title}
                src={icon}
              />
            </Link>
          </li>
        ))}
      </ul>

      <ul className={styles.secondary}>
        <li className={moreClassNames} ref={iconRef}>
          <Icon onClick={() => setIsClosed(!isClosed)}>
            <MoreIcon />
          </Icon>
        </li>

        {collapsedItems.map(({ path, title, icon }) => (
          <li className={collapsedClassNames} key={path}>
            <Link to={path}>
              <Svg
                animated
                active={path === pathname}
                text={title}
                src={icon}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
