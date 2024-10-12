import { LinkType } from "../../types";
import { Svg } from "../Svg";
import styles from "./Links.module.scss";

export const Links = ({ links }: { links: LinkType[] }) => {
  return (
    <nav className={styles.container}>
      {links.map(({ url, icon }) => (
        <a key={url} className={styles.link} href={url} target="_blank">
          <Svg src={icon} size="md" />
        </a>
      ))}
    </nav>
  );
};