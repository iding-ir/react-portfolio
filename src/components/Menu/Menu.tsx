import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import MoreIcon from "../../assets/icon-more.svg";
import { useClickOutside } from "../../hooks/use-click-outside";
import { useData } from "../../hooks/use-data";
import { getPath } from "../../methods/get-path";
import { Icon } from "../Icon";
import { Svg } from "../Svg";
import styles from "./Menu.module.scss";

export const Menu = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLLIElement>(null);
  const secondaryListRef = useClickOutside<HTMLUListElement>({
    onClick: () => setIsClosed(true),
  });
  const [isClosed, setIsClosed] = useState(true);
  const [containerSize, setContainerSize] = useState(0);
  const [iconSize, setIconSize] = useState(0);
  const { pages } = useData();
  const { slug: currentSlug } = useParams();

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
                active={slug === currentSlug}
                text={title}
                src={icon}
                size="xl"
              />
            </Link>
          </li>
        ))}
      </ul>

      <ul className={styles.secondary} ref={secondaryListRef}>
        <li className={moreClassNames} ref={iconRef}>
          <Icon size="xl" onClick={() => setIsClosed(!isClosed)}>
            <MoreIcon />
          </Icon>
        </li>

        {collapsedItems.map(({ slug, title, icon }) => (
          <li className={collapsedClassNames} key={slug}>
            <Link to={getPath({ slug })}>
              <Svg
                animated
                active={slug === currentSlug}
                text={title}
                src={icon}
                size="xl"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
