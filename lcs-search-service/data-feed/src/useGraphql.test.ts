import useGraphql from './useGraphql';

describe('useGraphql', () => {
  beforeEach(() => {
    process.env.GRAPHQL_ENDPOINT = 'http://localhost:8080/v1/graphql'
  })

  afterEach(() => {
    process.env.GRAPHQL_ENDPOINT = ''
  })

  it('queries graphql', async () => {
    const result = await useGraphql(`
      query MyQuery {
        places {
          name
        }
      }
    `)

    expect(result).toMatchInlineSnapshot(`
{
  "data": {
    "places": [
      {
        "name": "asdasdasd",
      },
      {
        "name": "asdasdasd",
      },
      {
        "name": "asdasdasd",
      },
      {
        "name": "asdasdasd",
      },
      {
        "name": "asdasdasd",
      },
      {
        "name": "asdasdasd",
      },
      {
        "name": "asdasdasd",
      },
      {
        "name": "asdasdasd",
      },
    ],
  },
}
`)
  })

  it('runs mutations graphql', async () => {
    const result = await useGraphql(`
    mutation InsertPlaces {
      insert_places(objects: {address: "asdasdasd", places_working_hour: {data: {monday: "AS"}}, name: "asdasdasd", phone_number: "asas", website: "ASas"}) {
        returning {
          name
        }
      }
    }
    `)

    expect(result).toMatchInlineSnapshot(`
{
  "data": {
    "insert_places": {
      "returning": [
        {
          "name": "asdasdasd",
        },
      ],
    },
  },
}
`)
  })
});