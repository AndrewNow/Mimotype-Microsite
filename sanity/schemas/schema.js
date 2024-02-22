// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
<<<<<<< HEAD
import blockContent from './blockContent'
import research from './research'
import approach from './approach'
import strategy from './strategy'
=======
import blockContent from "./blockContent";
import thesis from "./thesis";
import team from "./team";
import companies from "./companies";
>>>>>>> aa6c5284271eff9877e0cc2e658a54a628329eb3

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
<<<<<<< HEAD
    research,
    approach,
    strategy,
=======
    thesis,
    team,
    companies,
>>>>>>> aa6c5284271eff9877e0cc2e658a54a628329eb3
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});
