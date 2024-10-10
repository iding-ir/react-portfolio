import { RouteType } from "../../types";
import { Svg } from "../Svg";
import styles from "./Links.module.scss";

export const Links = ({ links }: { links: RouteType[] }) => {
  return (
    <nav className={styles.container}>
      {links.map(({ path, icon }) => (
        <a key={path} className={styles.link} href={path} target="_blank">
          <Svg src={icon} size="md" />
        </a>
      ))}
    </nav>
  );
};
