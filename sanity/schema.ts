import { type SchemaTypeDefinition } from 'sanity';

// import blockContent from './schemaTypes/blockContent'
// import category from './schemaTypes/category'
// import post from './schemaTypes/post'
// import author from './schemaTypes/author'
import speakers from './schemaTypes/speakers';
import events from './schemaTypes/events';
import featuredPost from './schemaTypes/featuredPost';
import blogPost from './schemaTypes/blogPost';
import blockContent from './schemaTypes/blockContent';
import blogAuthor from './schemaTypes/blogAuthor';
import featuredAuthor from './schemaTypes/featuredAuthor';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    speakers,
    events,
    featuredPost,
    blogPost,
    blockContent,
    blogAuthor,
    featuredAuthor,
  ],
};
