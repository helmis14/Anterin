import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      title: 'Restaurants',
      name: 'restaurants',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'restaurant'}]})],
    }),
  ],
})
