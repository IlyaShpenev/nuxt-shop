import createRepository from '@/services/api.service';

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios);

  const repositories = {
    products: repositoryWithAxios('5e982fa93500007f00c47f6c'),
    categories: repositoryWithAxios('5e982f9c3500007a00c47f6b'),
  }

  inject('repositories', repositories)
}
