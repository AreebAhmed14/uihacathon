import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import Blogs from './Blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Blogs],
}
