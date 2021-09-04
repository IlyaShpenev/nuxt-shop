export default {
  categories: ({ categories }) =>
    [{id: 0, title: 'all'}, ...new Set(categories)].sort(),
  categorySelected: ({ categorySelected }) => categorySelected
}
