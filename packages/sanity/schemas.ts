// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

//Links
import internalLink from '../next/components/utils/links/InternalLink/InternalLink.schema.js';
import internalLinkWithTitle from '../next/components/utils/links/InternalLink/InternalLinkWithTitle.schema.js';
import externalLink from '../next/components/utils/links/ExternalLink/ExternalLink.schema.js';
import externalLinkWithTitle from '../next/components/utils/links/ExternalLink/ExternalLinkWithTitle.schema.js';

// Navigation

import header from '../next/components/navigation/Header/Header.schema.js';

// Formatted text
import exampleText from '../next/components/utils/text/ExampleFormattedText/ExampleFormattedText.schema';

// Settings
import globalMetadata from '../next/components/utils/rendering/Metadata/GlobalMetadata.schema';



// Content
import exampleSection from '../next/components/sections/ExampleSection/ExampleSection.schema';

// Pages
import homePage from '../next/components/layouts/HomePage/HomePage.schema';
import page from '../next/components/layouts/Page/Page.schema';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Links
    internalLink,
    internalLinkWithTitle,
    externalLink,
    externalLinkWithTitle,

    // Navigation
    header,

    // Formatted text
    exampleText,

    // Settings
    globalMetadata,

    // Content
    exampleSection,

    // Pages
    homePage,
    page
  ]),
})
