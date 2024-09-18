import { Slug } from './slug'

test('deve ser possivel criar uma nova slug de um texto', () => {
  const slug = Slug.createFromText('Example question title')

  expect(slug.value).toEqual('example-question-title')
})
