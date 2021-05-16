import React from "react";
import Figure from "./Figure";
import Code from "./Code";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const serializers = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: Code,
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
  },
};

export default serializers;
