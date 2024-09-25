import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Icon } from "../Icon";
import { routes } from "../../routes";
import MoreIcon from "../../assets/icon-more.svg";
import styles from "./Menu.module.scss";

export const Menu = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLLIElement>(null);
  const [isClosed, setIsClosed] = useState(true);
  const [containerSize, setContainerSize] = useState(0);
  const [iconSize, setIconSize] = useState(0);
  const { pathname } = useLocation();

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

  const items = Object.values(routes).filter((route) => route.inMenu);
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
              <Icon animated active={path === pathname} text={t(title)}>
                {icon}
              </Icon>
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
              <Icon animated active={path === pathname} text={t(title)}>
                {icon}
              </Icon>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
