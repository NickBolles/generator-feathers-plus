// Define the Feathers schema for service `Movies`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
  // !<DEFAULT> code: schema_header
  title: 'Movies',
  description: 'Movies database.',
  // !end
  // !code: schema_definitions // !end

  // Required fields.
  required: [
    // !code: schema_required // !end
  ],
  // Fields with unique values.
  uniqueItemProperties: [
    // !code: schema_unique
    'email'
    // !end
  ],

  // Fields in the model.
  properties: {
    // !code: schema_properties
    title: {},
    releases: {
      type: 'boolean'
    },
    releaseDate: {
      type: 'date',
      default: function () {
        if (this.released) {
          return Date.now();
        }
        return null;
      }
    },
    registerdDate: {
      type: 'date',
      default: Date.now
    },
    genre: {
      type: 'string',
      default: 'action'
    },
    status: {
      type: 'string',
      default: 'active'
    }
    // !end
  },
  // !code: schema_more // !end
}

// Define optional, non-JSON-schema extensions.
let extensions = {
  // GraphQL generation.
  graphql: {
    // !<DEFAULT> code: graphql_header
    name: 'Movie',
    service: {
      sort: {
        _id: 1
      },
    },
    // sql: {
    //   sqlTable: 'Movies',
    //   uniqueKey: '_id',
    //   sqlColumn: {
    //     __authorId__: '__author_id__',
    //   },
    // },
    // !end
    discard: [
      // !code: graphql_discard // !end
    ],
    add: {
      // !<DEFAULT> code: graphql_add
      // __author__: { type: '__Movie__!', args: false, relation: { ourTable: '__authorId__', otherTable: '_id' } },
      // !end
    },
    // !code: graphql_more // !end
  },
}

// !code: more // !end

let moduleExports = {
  schema,
  extensions,
  // !code: moduleExports // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
