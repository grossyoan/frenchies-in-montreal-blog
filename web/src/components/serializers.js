import React from "react";
import { Figure } from "./Figure";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import "../styles/layout.css";
import * as styles from "./layout.module.css";

const serializers = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return (
        <div className={styles.containerVideo}>
          <YouTube videoId={id} />
        </div>
      );
    },
  },
};

export default serializers;
