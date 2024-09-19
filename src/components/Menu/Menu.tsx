import clsx from "clsx";
import { Icon } from "../Icon";
import styles from "./Menu.module.scss";
import MoreIcon from "../../assets/icon-more.svg";
import { useEffect, useRef, useState } from "react";
import { routes } from "../../routes";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Menu = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLLIElement>(null);
  const [isClosed, setIsClosed] = useState(true);
  const [containerSize, setContainerSize] = useState(0);
  const [iconSize, setIconSize] = useState(0);
  const items = Object.values(routes).filter((route) => route.inMenu);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;

      setContainerSize(Math.max(width, height));
    });

    resizeObserver.observe(containerRef.current);
  }, []);

  useEffect(() => {
    if (!iconRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      setIconSize(entries[0].target.getBoundingClientRect().width);
    });

    resizeObserver.observe(iconRef.current);
  }, []);

  const isPrimary = (index: number) => (index + 2) * iconSize < containerSize;
  const hasSecondary = () => items.some((_, index) => !isPrimary(index));

  return (
    <div className={styles.container} ref={containerRef}>
      <ul className={styles.primary}>
        {items
          .filter((_, index) => isPrimary(index))
          .map(({ path, title }) => (
            <li key={path}>{<Link to={path}>{t(title)}</Link>}</li>
          ))}
      </ul>

      <ul className={styles.secondary}>
        <li
          className={clsx({ [styles.hidden]: !hasSecondary() })}
          ref={iconRef}
        >
          <Icon onClick={() => setIsClosed(!isClosed)}>
            <MoreIcon />
          </Icon>
        </li>

        {items
          .filter((_, index) => !isPrimary(index))
          .map(({ path, title }) => (
            <li className={clsx({ [styles.collapsed]: isClosed })} key={path}>
              {<Link to={path}>{t(title)}</Link>}
            </li>
          ))}
      </ul>
    </div>
  );
};
