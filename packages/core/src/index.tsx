import { MemetaProps, MemetaHTMLTag, MemetaHTMLAttributes } from './types';

export * from './types';

const createCustomTags = (name: MemetaHTMLTag['name'], attributesArray: MemetaHTMLAttributes[]): MemetaHTMLTag[] => {
  return attributesArray.map(({ key, ...attributes }, i) => ({
    name: name,
    attributes: {
      key: key || `memeta-${i}`,
      ...attributes,
    },
  }));
};

const memeta = ({
  metaTags = [],
  linkTags = [],
}: MemetaProps = {}): MemetaHTMLTag[] => {
  const tags: MemetaHTMLTag[] = [];

  if (0 < metaTags.length) tags.push(...createCustomTags('meta', metaTags));
  if (0 < linkTags.length) tags.push(...createCustomTags('link', linkTags));

  return tags;
};

export default memeta;
