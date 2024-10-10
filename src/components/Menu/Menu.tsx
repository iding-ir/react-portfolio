import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import MoreIcon from "../../assets/icon-more.svg";
import { useData } from "../../hooks/use-data";
import { usePage } from "../../hooks/use-page";
import { getPath } from "../../methods/get-path";
import { Icon } from "../Icon";
import { Svg } from "../Svg";
import styles from "./Menu.module.scss";

export const Menu = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLLIElement>(null);
  const [isClosed, setIsClosed] = useState(true);
  const [containerSize, setContainerSize] = useState(0);
  const [iconSize, setIconSize] = useState(0);
  const { pages } = useData();
  const { page } = usePage();

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

  const isPrimary = (index: number) => (index + 2) * iconSize < containerSize;
  const hasSecondary = () => pages.some((_, index) => !isPrimary(index));
  const visibleItems = pages.filter((_, index) => isPrimary(index));
  const collapsedItems = pages.filter((_, index) => !isPrimary(index));
  const collapsedClassNames = clsx({ [styles.collapsed]: isClosed });
  const moreClassNames = clsx({
    [styles.hidden]: !containerSize || !iconSize || !hasSecondary(),
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <ul className={styles.primary}>
        {visibleItems.map(({ slug, title, icon }) => (
          <li key={slug}>
            <Link to={getPath({ slug })}>
              <Svg
                animated
                active={slug === page.slug}
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

        {collapsedItems.map(({ slug, title, icon }) => (
          <li className={collapsedClassNames} key={slug}>
            <Link to={getPath({ slug })}>
              <Svg
                animated
                active={slug === page.slug}
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
