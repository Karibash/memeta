// eslint-disable-next-line @typescript-eslint/ban-types
type Completion<T extends string> = T | (string & {});

export interface MemetaHTMLAttributes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface MemetaHTMLTag {
  name: 'title' | 'meta' | 'link';
  attributes: MemetaHTMLAttributes;
}

export interface MemetaProps {
  title?: string;
  robots?: Completion<'index' | 'noindex' | 'follow' | 'nofollow' | `${'index' | 'noindex'}, ${'follow' | 'nofollow'}`>;
  canonical?: string;
  description?: string;
  metaTags?: MemetaHTMLAttributes[];
  linkTags?: MemetaHTMLAttributes[];
}
