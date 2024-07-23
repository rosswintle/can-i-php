/**
 * The format of this file is documented in the README.md.
 *
 * The file is ordered with entries related to the most recent version of
 * PHP at the top, and the oldest version at the bottom.
 *
 * That means:
 *  - A feature added in the most recent version of PHP goes at the top of the file.
 *  - Equally a feature deprecated or removed in the most recent version of PHP
 *    will also go at the top of the file.
 *  - A feature added in the oldest version will go at the bottom of the file. UNLESS
 *    it is then deprecated or removed in a newer version.
 */
const features = [
    {
        name: "mb_str_pad",
        description:
          "The mbstring equivalent of `str_pad`.",
        keywords: ["string", "mbstring", "multibyte"],
        added: "8.3",
        deprecated: null,
        removed: null,
        resources: [
          {
            name: "RFC: mb_str_pad",
            url: "https://wiki.php.net/rfc/mb_str_pad",
          },
          {
            name: "New mb_str_pad function - Stitcher.io",
            url: "https://stitcher.io/blog/new-in-php-83#new-mb_str_pad-function-rfc",
          },
        ],
      },
      {
    name: "Anonymous readonly classes",
    description:
      "Anonymous classes can now be marked as readonly.",
    keywords: ["objects", "classes", "readonly"],
    added: "8.3",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Anonymous readonly classes - Stitcher.io",
        url: "https://stitcher.io/blog/new-in-php-83#anonymous-readonly-classes-upgrading",
      },
    ],
  },
  {
    name: "#[Override] attribute",
    description:
      "Mark a method as overriding a parent method using the #[Override] attribute.",
    keywords: ["objects", "methods", "inheritance", "attributes"],
    added: "8.3",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "RFC: Marking overridden methods",
        url: "https://wiki.php.net/rfc/marking_overriden_methods",
      },
      {
        name: "#[Override] attribute - Stitcher.io",
        url: "https://stitcher.io/blog/new-in-php-83#%23%5Boverride%5D-attribute-rfc",
      },
    ],
  },
  {
    name: "Reinitializing readonly properties when cloning objects",
    description:
      "PHP 8.3 adds the possibility of overwriting readonly property values while cloning an object.",
    keywords: ["objects", "properties", "readonly", "clone"],
    added: "8.3",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "RFC: Readonly amendments",
        url: "https://wiki.php.net/rfc/readonly_amendments",
      },
      {
        name: "Readonly amendments - Stitcher.io",
        url: "https://stitcher.io/blog/new-in-php-83#readonly-amendments-rfc",
      },
      {
        name: "Cloning readonly properties in PHP 8.3 - Stitcher.io",
        url: "https://stitcher.io/blog/cloning-readonly-properties-in-php-83",
      }
    ],
  },
  {
    name: "Randomizer::nextFloat",
    description:
      "Generates a random float between 0 and 1, where 1 is excluded.",
    keywords: ["random", "randomizer", "floats", "numbers"],
    added: "8.3",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "RFC: Randomizer Additions",
        url: "https://wiki.php.net/rfc/randomizer_additions",
      },
      {
        name: "Randomizer additions - Stitcher.io",
        url: "https://stitcher.io/blog/new-in-php-83#randomizer-additions-rfc",
      },
      {
        name: "Random extension: New \Random\Randomizer::getFloat() and nextFloat() methods - PHP.Watch",
        url: "https://php.watch/versions/8.3/Randomizer-getFloat-nextFloat",
      }
    ],
  },
  {
    name: "Randomizer::getFloat",
    description:
      "Generate a random float value.",
    keywords: ["random", "randomizer", "floats", "numbers"],
    added: "8.3",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "RFC: Randomizer Additions",
        url: "https://wiki.php.net/rfc/randomizer_additions",
      },
      {
        name: "Randomizer additions - Stitcher.io",
        url: "https://stitcher.io/blog/new-in-php-83#randomizer-additions-rfc",
      },
      {
        name: "Random extension: New \Random\Randomizer::getFloat() and nextFloat() methods - PHP.Watch",
        url: "https://php.watch/versions/8.3/Randomizer-getFloat-nextFloat",
      }
    ],
  },
  {
    name: "Randomizer::getBytesFromString",
    description:
      "Generate a string with a given length that consists of randomly selected bytes from a given string.",
    keywords: ["random", "randomizer"],
    added: "8.3",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "RFC: Randomizer Additions",
        url: "https://wiki.php.net/rfc/randomizer_additions",
      },
      {
        name: "Randomizer additions - Stitcher.io",
        url: "https://stitcher.io/blog/new-in-php-83#randomizer-additions-rfc",
      },
      {
        name: "Random extension: New \Random\Randomizer::getBytesFromString method - PHP.Watch",
        url: "https://php.watch/versions/8.3/Randomizer-getBytesFromString",
      }
    ],
  },
  {
    name: "Dynamic class constant and enum fetch with MyClass::{$constName}",
    description:
      "PHP 8.3 and later supports fetching class constants and Enum objects with a variable name using `MyClass::{$constName}`",
    keywords: ["constants", "enums"],
    added: "8.3",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "RFC: Dynamic class constant fetch",
        url: "https://wiki.php.net/rfc/dynamic_class_constant_fetch",
      },
      {
        name: "Dynamic class constant fetch - Stitcher.io",
        url: "https://stitcher.io/blog/new-in-php-83#dynamic-class-constant-fetch-rfc",
      },
      {
        name: "Dynamic class constant and Enum member fetch support - PHP.Watch",
        url: "https://php.watch/versions/8.3/dynamic-class-const-enum-member-syntax-support",
      }
    ],
  },
  {
    name: "json_validate",
    description:
      "Returns true if the string passed contains a valid json, otherwise returns false.",
    keywords: ["JSON", "validation"],
    added: "8.3",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "RFC: json_validate",
        url: "https://wiki.php.net/rfc/json_validate",
      },
      {
        name: "The new json_validate() function - Stitcher.io",
        url: "https://stitcher.io/blog/new-in-php-83#the-new-json_validate()-function-rfc",
      },
      {
        name: "Added json_validate function - PHP.Watch",
        url: "https://php.watch/versions/8.3/json_validate",
      }
    ],
  },
  {
    name: "Typed Class Constants",
    description:
      "PHP 8.3 and later support declaring a type for PHP Class constants.",
    keywords: ["types", "typehints", "constants", "classes"],
    added: "8.3",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "RFC: Typed class constants",
        url: "https://wiki.php.net/rfc/typed_class_constants",
      },
      {
        name: "Typed Class Constants - PHP.Watch",
        url: "https://php.watch/versions/8.3/typed-constants",
      },
      {
        name: "Typed class constants - Stitcher.io",
        url: "https://stitcher.io/blog/new-in-php-83#typed-class-constants-rfc",
      }
    ],
  },
  {
    name: "openssl_cipher_key_length",
    description:
      "Gets the cipher key length",
    keywords: ["openssl", "encryption", "security", "ssl"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Docs: openssl_cipher_key_length",
        url: "https://www.php.net/manual/en/function.openssl-cipher-key-length.php",
      }
    ],
  },
  {
    name: "sodium_crypto_stream_xchacha20_xor_ic",
    description:
      "Encrypts a message using a nonce and a secret key (no authentication)",
    keywords: ["sodium", "encryption", "security", "crypto", "cryptography"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Docs: sodium_crypto_stream_xchacha20_xor_ic",
        url: "https://www.php.net/manual/en/function.sodium-crypto-stream-xchacha20-xor-ic.php",
      }
    ],
  },
  {
    name: "libxml_get_external_entity_loader",
    description:
      "Get external entity loader previously installed by libxml_set_external_entity_loader().",
    keywords: ["xml"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Docs: libxml_get_external_entity_loader",
        url: "https://www.php.net/manual/en/function.libxml-get-external-entity-loader.php",
      }
    ],
  },
  {
    name: "libxml_get_external_entity_loader",
    description:
      "Get external entity loader previously installed by libxml_set_external_entity_loader().",
    keywords: ["xml"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Docs: libxml_get_external_entity_loader",
        url: "https://www.php.net/manual/en/function.libxml-get-external-entity-loader.php",
      }
    ],
  },
  {
    name: "ini_parse_quantity",
    description:
      "Returns the interpreted size in bytes on success from an ini shorthand.",
    keywords: ["ini", "php.ini"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Docs: ini_parse_quantity",
        url: "https://www.php.net/manual/en/function.ini-parse-quantity.php",
      }
    ],
  },
  {
    name: "curl_upkeep",
    description:
      "Performs any connection upkeep checks.",
    keywords: ["curl", "connection", "http"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Docs: curl_upkeep",
        url: "https://www.php.net/manual/en/function.curl_upkeep.php",
      }
    ],
  },
  {
    name: "ReflectionMethod::hasPrototype",
    description:
      "Returns whether a method has a prototype.",
    keywords: ["reflection", "functions", "methods"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Docs: ReflectionMethod::hasPrototype",
        url: "https://www.php.net/manual/en/reflectionmethod.hasprototype.php",
      }
    ],
  },
  {
    name: "ReflectionFunction::isAnonymous",
    description:
      "Checks if a function is anonymous.",
    keywords: ["reflection", "functions"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Docs: ReflectionFunction::isAnonymous",
        url: "https://www.php.net/manual/en/reflectionfunction.isanonymous.php",
      }
    ],
  },
  {
    name: "ZipArchive::clearError",
    description:
      "Clear the status error message, system and/or zip messages",
    keywords: ["zip", "errors"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Docs: ZipArchive::clearError",
        url: "https://www.php.net/manual/en/ziparchive.clearerror.php",
      }
    ],
  },
  {
    name: "ZipArchive::getStreamName",
    description:
      "Get a file handler to the entry defined by its name.",
    keywords: ["zip", "streams"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Docs: ZipArchive::getStreamName",
        url: "https://www.php.net/manual/en/ziparchive.getstreamname.php",
      }
    ],
  },
  {
    name: "ZipArchive::getStreamIndex",
    description:
      "Get a file handler to the entry defined by its index.",
    keywords: ["zip", "streams"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Docs: ZipArchive::getStreamIndex",
        url: "https://www.php.net/manual/en/ziparchive.getstreamindex.php",
      }
    ],
  },
  {
    name: "New mysqli_execute_query function and mysqli::execute_query method.",
    description:
      "In PHP 8.2, the MySQLi extension provides a more straight-forward approach to prepare, bind, execute, and retrieve results from SQL.",
    keywords: ["mysql", "mysqli", "extensions", "database"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Docs: mysqli_execute_query",
        url: "https://www.php.net/manual/en/mysqli.execute-query.php",
      },
      {
        name: "PHP Watch",
        url: "https://php.watch/versions/8.2/mysqli_execute_query",
      }
    ],
  },
  {
    name: "Constants in traits",
    description:
      "You can now use constants in traits.",
    keywords: ["constants", "const", "traits", "classes"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Announcement (php.net)",
        url: "https://www.php.net/releases/8.2/en.php#constants_in_traits",
      },
      {
        name: "(RFC) Constants in Traits",
        url: "https://wiki.php.net/rfc/constants_in_traits",
      },
      {
        name: "What's new in PHP 8.2 (stitcher.io)",
        url: "https://stitcher.io/blog/new-in-php-82#constants-in-traits-rfc",
      },
    ],
  },
  {
    name: "New 'Random' extension",
    description:
      "a new random number generator that fixes a lot of problems with the previous one.",
    keywords: ["random", "randomizer", "rng", "number", "numbers"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Announcement (php.net)",
        url: "https://www.php.net/releases/8.2/en.php#random_extension",
      },
      {
        name: "(RFC) Random Extension 5.x",
        url: "https://wiki.php.net/rfc/rng_extension",
      },
      {
        name: "(RFC) Random Extension Improvement",
        url: "https://wiki.php.net/rfc/random_extension_improvement",
      },
      {
        name: "What's new in PHP 8.2 (stitcher.io)",
        url: "https://stitcher.io/blog/new-in-php-82#new-random-extension-rfc",
      },
    ],
  },
  {
    name: "Disjunctive Normal Form types",
    description:
      "DNF types allow us to combine union and intersection types. Intersection types must be grouped with brackets. e.g. `(HasTitle&HasId)|null`",
    keywords: ["types", "typehints"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Announcement (php.net)",
        url: "https://www.php.net/releases/8.2/en.php#dnf_types",
      },
      {
        name: "(RFC) Disjunctive Normal Form Types",
        url: "https://wiki.php.net/rfc/dnf_types",
      },
      {
        name: "What's new in PHP 8.2 (stitcher.io)",
        url: "https://stitcher.io/blog/new-in-php-82#disjunctive-normal-form-types-rfc",
      },
    ],
  },
  {
    name: "Read-only classes",
    description:
      "Marking a class as read-only will implicitly mark all instance properties of a class as readonly. Furthermore, it will prevent the creation of dynamic properties.",
    keywords: ["readonly", "classes", "objects"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Announcement (php.net)",
        url: "https://www.php.net/releases/8.2/en.php#dnf_types",
      },
      {
        name: "(RFC) Readonly classes",
        url: "https://wiki.php.net/rfc/readonly_classes",
      },
      {
        name: "What's new in PHP 8.2 (stitcher.io)",
        url: "https://stitcher.io/blog/new-in-php-82#readonly-classes-rfc",
      },
    ],
  },
  {
    name: "null, true and false as standalone types",
    description:
      "null corresponds to PHP's unit type, i.e. the type which holds a single value. false is a literal type of type bool",
    keywords: ["types", "typehints", "booleans"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Announcement (php.net)",
        url: "https://www.php.net/releases/8.2/en.php#null_false_true_types",
      },
      {
        name: "(RFC) Allow null and false as standalone types",
        url: "https://wiki.php.net/rfc/null-false-standalone-types",
      },
      {
        name: "(RFC) Add true type",
        url: "https://wiki.php.net/rfc/true-type",
      },
      {
        name: "What's new in PHP 8.2 (stitcher.io)",
        url: "https://stitcher.io/blog/new-in-php-82#null-and-false-as-standalone-types-rfc",
      },
    ],
  },
  {
    name: "Reset peak memory usage function (memory_reset_peak_usage)",
    description:
      "Reset the peak memory usage returned by the <code>memory_get_peak_usage</code> function",
    keywords: ["memory", "functions", "memory_reset_peak_usage"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "memory_reset_peak_usage (php.net)",
        url: "https://www.php.net/manual/function.memory-reset-peak-usage.php",
      },
      {
        name: "Reset recorded peak memory usage: memory_reset_peak_usage",
        url: "https://php.watch/versions/8.2#memory_reset_peak_usage",
      },
    ],
  },
  {
    name: "Backtrace parameter redaction / New SensitiveParameter attribute",
    description:
      "Mark parameters as sensitive to exclude them from a backtrace using the new `#[\\SensitiveParameter]` attribute",
    keywords: ["sensitive", "debugging", "data", "security", "traces", "parameter", "attribute"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "RFC (php.net)",
        url: "https://wiki.php.net/rfc/redact_parameters_in_back_traces",
      },
      {
        name: "Backtrace parameter redaction (PHP.Watch)",
        url: "https://php.watch/versions/8.2/backtrace-parameter-redaction",
      },
    ],
  },
  {
    name: "Fibers (Fiber class, Fiber exceptions)",
    description:
      "Lightweight concurrency for PHP. Fibers represent full-stack, interruptible functions. Fibers may be suspended from anywhere in the call-stack, pausing execution within the fiber until the fiber is resumed at a later time.",
    keywords: [
      "class",
      "types",
      "functionality",
      "concurrency",
      "interruptible",
      "functions",
    ],
    added: "8.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "PHP.Watch Introduction to Fibers (php.watch)",
        url: "https://php.watch/versions/8.1/fibers",
      },
      {
        name: "Fibres overview and documentation (php.net)",
        url: "https://www.php.net/manual/en/language.fibers.php",
      },
    ],
  },
  {
    name: "xxHash algorithm",
    description:
      "xxHash is an extremely fast hashing algorithm that is not designed for cryptographic purposes, but provides excellent randomness and dispersion of output, and uniqueness of to minimize collisions",
    keywords: [
      "xxhash",
      "hash",
      "functions",
      "performance",
    ],
    added: "8.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "PHP.Watch xxHash hash algorithms support (php.watch)",
        url: "https://php.watch/versions/8.1/xxHash",
      },
      {
        name: "hash function documentation (php.net)",
        url: "https://www.php.net/manual/en/function.hash.php",
      },
      {
        name: "xxHash Website",
        url: "https://xxhash.com/",
      },
      {
        name: "xxHash Repository (github.com)",
        url: "https://github.com/Cyan4973/xxHash",
      },
    ],
  },
  {
    name: "Enums",
    description: "Enums are a way to define a set of named constants.",
    keywords: ["constants", "class", "classes"],
    added: "8.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Enums",
        url: "https://stitcher.io/blog/php-enums",
      },
    ],
  },
  {
    name: "Array unpacking with string keys",
    description:
      "e.g. <code>$result = ['a' => 0, ...$arrayA, ...$arrayB];</code>",
    keywords: ["spread", "unpacking", "arrays", "deconstruct"],
    added: "8.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "RFC (php.net)",
        url: "https://wiki.php.net/rfc/array_unpacking_string_keys",
      },
    ],
  },
  {
    name: "Readonly properties",
    description:
      "A property can be declared with the readonly modifier, which prevents modification of the property after initialization.",
    keywords: ["objects", "classes", "properties", "modifier"],
    added: "8.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Readonly properties (php.net)",
        url: "https://www.php.net/manual/en/language.oop5.properties.php#language.oop5.properties.readonly-properties",
      },
    ],
  },
  {
    name: "never type",
    description:
      "<code>never</code> is a return type indicating the function does not return.",
    keywords: ["types", "typehints", "return"],
    added: "8.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Readonly properties (php.net)",
        url: "https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.never",
      },
    ],
  },
  {
    name: "new in initializers",
    description:
      "Use <code>new</code> expressions inside parameter default values, attribute arguments, static variable initializers and global constant initializers.",
    keywords: ["new", "objects"],
    added: "8.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "new in initializers (stitcher.io)",
        url: "https://stitcher.io/blog/php-81-new-in-initializers",
      },
    ],
  },
  {
    name: "First-class callable syntax ",
    description:
      "The first class callable syntax is introduced as of PHP 8.1.0, as a way of creating anonymous functions from callable.",
    keywords: ["closures"],
    added: "8.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "First class callable syntax (php.net)",
        url: "https://www.php.net/manual/en/functions.first_class_callable_syntax.php",
      },
    ],
  },
  {
    name: "Intersection types",
    description:
      "An intersection type declaration enforces that a value must belong to all of the declared types.",
    keywords: ["types", "typehints", "declarations"],
    added: "8.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Intersection types (php.net)",
        url: "https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.composite.intersection",
      },
      {
        name: "Intersection types (PHP.Watch)",
        url: "https://php.watch/versions/8.1/intersection-types",
      },
    ],
  },
  {
    name: "array_is_list",
    description:
      "Checks whether a given array is a list. An array is considered a list if its keys consist of consecutive numbers from 0. This is useful when JSON encoding is involved.",
    keywords: ["functions", "helpers", "arrays", "utilities", "json"],
    added: "8.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "array_is_list (php.net)",
        url: "https://www.php.net/manual/fr/function.array-is-list.php",
      },
    ],
  },
  {
    name: "Attributes",
    description:
      "Attributes, also known as annotations in many other languages, can be used to add metadata to classes, methods, variables and what not; in a structured way. Like docblocks, but recognised properly by PHP.",
    keywords: [
      "annotations",
      "docblocks",
      "documentation",
      "metadata",
      "reflection",
    ],
    added: "8.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Attributes (php.net)",
        url: "https://www.php.net/manual/en/language.attributes.overview.php",
      },
      {
        name: "Attributes (stitcher.io)",
        url: "https://stitcher.io/blog/attributes-in-php-8",
      },
    ],
  },
  {
    name: "Union types",
    description:
      "A union type declaration accepts values of multiple different simple types, rather than a single one. Also referred to as composite types.",
    keywords: ["types", "typehints", "declarations", "composite type"],
    added: "8.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Union types (php.net)",
        url: "https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.composite.union",
      },
    ],
  },
  {
    name: "Constructor promotion",
    description:
      "Constructor parameters may be promoted to correspond to an object property.",
    keywords: ["parameters", "properties", "classes", "promoted"],
    added: "8.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Constructor promotion (php.net)",
        url: "https://www.php.net/manual/en/language.oop5.decon.php#language.oop5.decon.constructor.promotion",
      },
    ],
  },
  {
    name: "match expression",
    description:
      "<code>match</code> is like <code>switch</code>, but returns a value.",
    keywords: ["control", "structures", "switch", "conditionals"],
    added: "8.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Match expression (php.net)",
        url: "https://www.php.net/manual/en/control-structures.match.php",
      },
    ],
  },
  {
    name: "Named arguments",
    description:
      "Named arguments allow passing arguments to a function based on the parameter name, rather than the parameter position.",
    keywords: ["parameters", "call", "functions"],
    added: "8.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Named arguments (php.net)",
        url: "https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments",
      },
    ],
  },
  {
    name: "Nullsafe operator",
    description:
      `Nullsafe operator allows you to access properties and methods of nullable objects.

      e.g. \`$country = $session?->user?->getAddress()?->country;</$country>\``,
    keywords: ["null"],
    added: "8.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Nullsafe operator (stitcher.io)",
        url: "https://stitcher.io/blog/php-8-nullsafe-operator",
      },
    ],
  },
  {
    name: "str_contains",
    description: "Determine if a string contains a given substring",
    keywords: ["functions", "helpers", "strings", "utilities", "utils"],
    added: "8.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "str_contains (php.net)",
        url: "https://www.php.net/manual/en/function.str-contains.php",
      },
    ],
  },
  {
    name: "str_starts_with",
    description: "Check if a string starts with a given substring",
    keywords: ["functions", "helpers", "strings", "utilities", "utils"],
    added: "8.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "str_starts_with (php.net)",
        url: "https://www.php.net/manual/en/function.str-starts-with.php",
      },
    ],
  },
  {
    name: "str_ends_with",
    description: "Check if a string ends with a given substring",
    keywords: ["functions", "helpers", "strings", "utilities", "utils"],
    added: "8.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "str_ends_with (php.net)",
        url: "https://www.php.net/manual/en/function.str-ends-with.php",
      },
    ],
  },
  {
    name: "Throw expression",
    description:
      "The <code>throw</code> keyword is an expression, therefore an exception can be thrown in any expression context.",
    keywords: ["throw", "expression", "exceptions"],
    added: "8.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Exceptions (php.net)",
        url: "https://www.php.net/manual/en/language.exceptions.php",
      },
      {
        name: "RFC (php.net)",
        url: "https://wiki.php.net/rfc/throw_expression",
      },
    ],
  },
  {
    name: "mixed type",
    description:
      "`mixed` is equivalent to the union type `object|resource|array|string|int|float|bool|null`.",
    keywords: ["declarations", "typehints", "return", "types"],
    added: "8.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "mixed type (php.net)",
        url: "https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.mixed",
      },
      {
        name: "PHP 8.0: New mixed pseudo type (php.watch)",
        url: "PHP 8.0: New mixed pseudo type",
      },
    ],
  },
  {
    name: "Typed properties",
    description: "Class properties now support type declarations.",
    keywords: ["properties", "class", "types", "typehints"],
    added: "7.4",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Property type declarations (php.net)",
        url: "https://www.php.net/manual/en/language.oop5.properties.php#language.oop5.properties.typed-properties",
      },
      {
        name: "Typed properties in PHP 7.4 (stitcher.io)",
        url: "https://stitcher.io/blog/typed-properties-in-php-74",
      },
    ],
  },
  {
    name: "Arrow functions",
    description:
      `Arrow functions are a shorthand for anonymous functions:

      <code>fn (argument_list) => expr</code>.`,
    keywords: ["closures", "anonymous", "shorthand", "short"],
    added: "7.4",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Arrow functions (php.net)",
        url: "https://www.php.net/manual/en/functions.arrow.php",
      },
    ],
  },
  {
    name: "Array unpacking (numeric keys only)",
    description: "e.g. <code>$result = [0, …$arrayA, …$arrayB, 6, 7];</code>",
    keywords: ["spread", "unpacking", "arrays", "deconstruct"],
    added: "7.4",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "RFC (php.net)",
        url: "https://wiki.php.net/rfc/spread_operator_for_array",
      },
    ],
  },
  {
    name: "Null coalescing assignment operator",
    description: "e.g. `$data['date'] ??= new DateTime();`",
    keywords: ["operators", "assignment"],
    added: "7.4",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Other assignment operators (php.net)",
        url: "https://www.php.net/manual/en/language.operators.assignment.php#language.operators.assignment.other",
      },
      {
        name: " Null coalescing assignment operator (stitcher.io)",
        url: "https://stitcher.io/blog/new-in-php-74#null-coalescing-assignment-operator-rfc",
      },
    ],
  },
  {
    name: "Underscore as numeric separator",
    description:
      'An underscore "<code>_</code>" can be used in numeric literals to visually separate groups of digits.',
    keywords: ["numbers", "underscore", "literals"],
    added: "7.4",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Integers (php.net)",
        url: "https://www.php.net/manual/en/language.types.integer.php",
      },
      {
        name: "RFC (php.net)",
        url: "https://wiki.php.net/rfc/numeric_literal_separator",
      },
    ],
  },
  {
    name: "array_key_first()",
    description:
      'Gets the first key of an array',
    keywords: ["arrays", "functions", "helpers"],
    added: "7.3",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "array_key_first (php.net)",
        url: "https://www.php.net/manual/en/function.array-key-first.php",
      },
    ],
  },
  {
    name: "array_key_last()",
    description:
      'Gets the last key of an array',
    keywords: ["arrays", "functions", "helpers"],
    added: "7.3",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "array_key_last (php.net)",
        url: "https://www.php.net/manual/en/function.array-key-last.php",
      },
    ],
  },
  {
    name: "object type",
    description:
      "`object` is a generic type accepting any object. It can be used in both parameter and return types.",
    keywords: ["declarations", "typehints", "object", "return", "types", "parameters"],
    added: "7.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "object type (php.net)",
        url: "https://www.php.net/manual/en/language.types.declarations.php",
      },
      {
        name: "object parameter and return type",
        url: "https://kinsta.com/blog/php-7-2/#argument-type-declarations",
      },
    ],
  },
  {
    name: "Password hashing with Argon2",
    description:
      "Argon2 has been added to the password hashing API  where the following constants have been exposed:<p> <ol><li>PASSWORD_ARGON2I<li>PASSWORD_ARGON2_DEFAULT_MEMORY_COST</li><li>PASSWORD_ARGON2_DEFAULT_TIME_COST</li><li>PASSWORD_ARGON2_DEFAULT_THREADS</li>",
    keywords: ["password", "argon2"],
    added: "7.2",
    deprecated: null,
    removed: null,
    resources: [
        name: "Password Hashing API (php.net)",
        url: "https://www.php.net/manual/en/book.password.php",
      },
    ],
  },
  {
    name: "Extended string types for PDO",
    description:
      "PDO's string type has been extended to support the national character type when emulating prepares. This has been done with the following constants:<ol> <li>PDO::PARAM_STR_NATL</li><li>PDO::PARAM_STR_CHAR</li><li>PDO::ATTR_DEFAULT_STR_PARAM</li></ol>",
    keywords: ["pdo"],
    added: "7.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "PHP Data Objects (php.net)",
        url: "https://www.php.net/manual/en/book.pdo.php",
      },
    ],
  },
  {
    name: "PDOStatement::debugDumpParams method updated to include SQL sent",
    description:
      "The PDOStatement::debugDumpParams() method has been updated to include the SQL being sent to the DB, where the full, raw query (including the replaced placeholders with their bounded values) will be shown. This has been added to aid with debugging emulated prepares.",
    keywords: ["pdo"],
    added: "7.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "PDOStatement::debugDumpParams",
        url: "https://www.php.net/manual/en/pdostatement.debugdumpparams.php",
      },
    ],
  },
  {
    name: "Unquoted strings",
    description: " Unquoted strings that are non-existent global constants are taken to be strings of themselves. This behaviour used to emit an E_NOTICE, but will now emit an E_WARNING. In the next major version of PHP, an Error exception will be thrown instead.",
    keywords: ["functions", "deprecated", "removed"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "PHP RFC: Deprecate and Remove Bareword (Unquoted) Strings",
        url: "https://wiki.php.net/rfc/deprecate-bareword-strings",
      },
    ],
  },
  {
    name: "png2wbmp",
    description: "png2wbmp — Convert PNG image file to WBMP image file",
    keywords: ["functions", "deprecated", "removed"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "png2wbmp (php.net)",
        url: "https://www.php.net/manual/en/function.png2wbmp.php",
      },
    ],
  },
  {
    name: "jpeg2wbmp",
    description: "jpeg2wbmp — Convert JPEG image file to WBMP image file",
    keywords: ["functions", "deprecated", "removed"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "jpeg2wbmp (php.net)",
        url: "https://www.php.net/manual/en/function.png2wbmp.php",
      },
    ],
  },
  {
    name: "INTL_IDNA_VARIANT_2003 variant",
    description: "The Intl extension has deprecated the INTL_IDNA_VARIANT_2003 variant, which is currently being used as the default for idn_to_ascii() and idn_to_utf8().",
    keywords: ["functions", "deprecated", "removed", "idn_to_ascii", "idn_to_utf8"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "INTL_IDNA_VARIANT_2003 variant",
        url: "https://www.php.net/manual/en/migration72.deprecated.php#migration72.deprecated.INTL_IDNA_VARIANT_2003-variant",
      },
    ],
  },
  {
    name: "__autoload function",
    description: "The __autoload() method has been deprecated because it is inferior to spl_autoload_register() (due to it not being able to chain autoloaders), and there is no interoperability between the two autoloading styles.",
    keywords: ["functions", "deprecated", "removed", "__autoload", "spl_autoload_register"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "__autoload function",
        url: "https://www.php.net/manual/en/function.autoload.php",
      },
    ],
  },
  {
    name: "track_errors ini setting and $php_errormsg variable",
    description: "When the track_errors ini setting is enabled, a $php_errormsg variable is created in the local scope when a non-fatal error occurs. Given that the preferred way of retrieving such error information is by using error_get_last(), this feature has been deprecated.",
    keywords: ["functions", "deprecated", "removed", "track_errors", "php_errormsg"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "Deprecation notice",
        url: "https://www.php.net/manual/en/migration72.deprecated.php#migration72.deprecated.track_errors-and-php_errormsg",
      },
    ],
  },
  {
    name: "create_function function",
    description: "Given the security issues of this function (being a thin wrapper around eval()), this dated function has now been deprecated. The preferred alternative is to use anonymous functions.",
    keywords: ["functions", "deprecated", "removed", "create_function", "eval"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "create_function",
        url: "https://www.php.net/manual/en/function.create-function.php",
      },
    ],
  },
  {
    name: "mbstring.func_overload ini setting",
    description: "Given the interoperability problems of string-based functions being used in environments with this setting enabled, it has now been deprecated.",
    keywords: ["functions", "deprecated", "removed", "mbstring"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "Deprecation notice",
        url: "https://www.php.net/manual/en/migration72.deprecated.php#migration72.deprecated.mbstringfunc_overload-ini-setting",
      },
    ],
  },
  {
    name: "(uncast) cast",
    description: "Casting any expression to this type will always result in null, and so this superfluous casting type has now been deprecated.",
    keywords: ["functions", "deprecated", "removed", "uncast"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "Deprecation notice",
        url: "https://www.php.net/manual/en/migration72.deprecated.php#migration72.deprecated.unset-cast",
      },
    ],
  },
  {
    name: "parse_str() without a second argument",
    description: "Without the second argument to parse_str(), the query string parameters would populate the local symbol table. Given the security implications of this, using parse_str() without a second argument has now been deprecated. The function should always be used with two arguments, as the second argument causes the query string to be parsed into an array.",
    keywords: ["functions", "deprecated", "removed", "parse_str"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "parse_str",
        url: "https://www.php.net/manual/en/function.parse-str.php",
      },
      {
        name: "Deprecation notice",
        url: "https://www.php.net/manual/en/migration72.deprecated.php#migration72.deprecated.parse_str-no-second-arg",
      },
    ],
  },
  {
    name: "gmp_random() function",
    description: "This function generates a random number based upon a range that is calculated by an unexposed, platform-specific limb size. Because of this, the function has now been deprecated. The preferred way of generating a random number using the GMP extension is by gmp_random_bits() and gmp_random_range().",
    keywords: ["functions", "deprecated", "removed", "gmp_random", "gmp_random_bits", "gmp_random_range"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "gmp_random",
        url: "https://www.php.net/manual/en/function.gmp-random.php",
      },
      {
        name: "Deprecation notice",
        url: "https://www.php.net/manual/en/migration72.deprecated.php#migration72.deprecated.gmp_random-function",
      },
    ],
  },
  {
    name: "each() function",
    description: "This function is far slower at iteration than a normal foreach, and causes implementation issues for some language changes. It has therefore been deprecated.",
    keywords: ["functions", "deprecated", "removed", "each"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "each",
        url: "https://www.php.net/manual/en/function.each.php",
      },
    ],
  },
  {
    name: "assert() with a string argument",
    description: "Using assert() with a string argument required the string to be eval()'ed. Given the potential for remote code execution, using assert() with a string argument has now been deprecated in favour of using boolean expressions.",
    keywords: ["functions", "deprecated", "removed", "assert"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "assert",
        url: "https://www.php.net/manual/en/function.assert.php",
      },
    ],
  },
  {
    name: "$errcontext argument of error handlers",
    description: "The $errcontext argument contains all local variables of the error site. Given its rare usage, and the problems it causes with internal optimisations, it has now been deprecated. Instead, a debugger should be used to retrieve information on local variables at the error site.",
    keywords: ["functions", "deprecated", "removed", "assert"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "Deprecation notice",
        url: "https://www.php.net/manual/en/migration72.deprecated.php#migration72.deprecated.errcontext-arg-of-error-handlers",
      },
    ],
  },
  {
    name: "read_exif_data() function",
    description: "The read_exif_data() alias has been deprecated. The exif_read_data() function should be used instead.",
    keywords: ["functions", "deprecated", "removed", "read_exif_data", "exif_read_data"],
    added: "0.0",
    deprecated: "7.2",
    removed: "8.0",
    resources: [
      {
        name: "read_exif_data",
        url: "https://www.php.net/manual/en/function.read-exif-data.php",
      },
    ],
  },
  {
    name: "Multi catch exception handling",
    description:
      "A catch block may specify multiple exceptions using the pipe (|) character",
    keywords: ["exceptions"],
    added: "7.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Exceptions (php.net)",
        url: "https://www.php.net/manual/en/language.exceptions.php",
      },
    ],
  },
  {
    name: "nullable type declarations",
    description:
      "Type declarations can be marked nullable by prefixing the type name with a question mark (?). This signifies that the value can be of the specified type or null.",
    keywords: ["declarations", "typehints", "return"],
    added: "7.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Nullable type (php.net)",
        url: "https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.nullable",
      },
    ],
  },
  {
    name: "void return type",
    description:
      "<code>void</code> is a return type indicating the function does not return a value.",
    keywords: ["declarations", "typehints", "return", "types"],
    added: "7.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "void return type (php.net)",
        url: "https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.return-only",
      },
    ],
  },
  {
    name: "Iterables / iterable pseudo-type",
    description:
      "`iterable` is a pseudo-type introduced in PHP 7.1. It accepts any array or object implementing the Traversable interface. Both of these types are iterable using foreach and can be used with yield from within a generator.",
    keywords: ["declarations", "typehints", "types", "arrays", "iterators", "traversable"],
    added: "7.1",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Iterables (php.net)",
        url: "https://www.php.net/manual/en/language.types.iterable.php",
      },
    ],
  },
  {
    name: "Anonymous classes",
    description:
      "Anonymous classes can be created with <code>new class</code>. They're used for throw away objects.",
    keywords: ["closures", "anonymous", "class"],
    added: "7.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Anonymous classes (php.net)",
        url: "https://www.php.net/manual/en/migration70.new-features.php#migration70.new-features.anonymous-classes",
      },
    ],
  },
  {
    name: "Filtered unserialize()",
    description:
      `Filtered unserialize allows developers to specify which classes they expect data to unserialize into.

      For example:
      <code>$data = unserialize($foo, ["allowed_classes" => ["MyClass", "MyClass2"]]);</code>.

      This improves security greatly when using PHP serialization.`,
    keywords: ["unserialize", "security", "serialize"],
    added: "7.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "PHP 7 New features page (php.net)",
        url: "https://www.php.net/manual/en/migration70.new-features.php#migration70.new-features.filtered-unserialize",
      },
      {
        name: "Unserialize manual page (php.net)",
        url: "https://www.php.net/manual/en/function.unserialize.php",
      },
    ],
  },
  {
    name: "Group use declarations",
    description:
      "Classes, functions and constants being imported from the same namespace can be grouped together in a single use statement.",
    keywords: ["imports"],
    added: "7.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Group use declarations (php.net)",
        url: "https://www.php.net/manual/en/language.namespaces.importing.php#language.namespaces.importing.group",
      },
    ],
  },
  {
    name: "Null coalescing operator",
    description: "Use <code>??</code>",
    keywords: ["short", "shorthand", "null", "conditional", "operators"],
    added: "7.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Null coalescing operator (php.net)",
        url: "https://www.php.net/manual/en/language.operators.comparison.php#language.operators.comparison.coalesce",
      },
    ],
  },
  {
    name: "Return type declarations",
    description:
      "Return type declarations specify the type of the value that will be returned from a function",
    keywords: ["typehints", "types"],
    added: "7.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Return type declarations (php.net)",
        url: "https://www.php.net/manual/en/migration70.new-features.php#migration70.new-features.return-type-declarations",
      },
    ],
  },
  {
    name: "Spaceship operator",
    description: "Use <code><=></code> for comparisons for sorting",
    keywords: [
      "short",
      "shorthand",
      "spaceship",
      "space ship",
      "comparisons",
      "operators",
      "sorting",
    ],
    added: "7.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Spaceship operator (stitcher.io)",
        url: "https://stitcher.io/blog/shorthand-comparisons-in-php#spaceship-operator",
      },
    ],
  },
  {
    name: "Scalar type hints",
    description:
      "As of PHP 7, the scalar types (integers, floating point numbers, booleans and strings) can be used as type hints. This is in addition to being able to use classes, arrays and callables, which were already allowed.",
    keywords: ["types", "typehints", "typed"],
    added: "7.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "What is new in PHP 7?",
        url: "https://trimurtidev.in/what-is-new-in-php-7/",
      },
    ],
  },
  {
    name: "random_int",
    description:
      "Generates cryptographic random integers that are suitable for use where unbiased results are critical, such as when shuffling a deck of cards for a poker game.",
    keywords: [
      "randomness",
      "numbers",
      "functions",
      "integers",
      "cryptography",
      "security",
    ],
    added: "7.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "random_int (php.net)",
        url: "https://www.php.net/manual/en/function.random-int.php",
      },
    ],
  },
  {
    name: "random_bytes",
    description:
      " Generates an arbitrary length string of cryptographic random bytes that are suitable for cryptographic use, such as when generating salts, keys or initialization vectors. ",
    keywords: [
      "randomness",
      "numbers",
      "functions",
      "integers",
      "cryptography",
      "security",
    ],
    added: "7.0",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "random_bytes (php.net)",
        url: "https://www.php.net/manual/en/function.random-bytes.php",
      },
    ],
  },
  {
    name: "Variadic functions / methods (... operator)",
    description:
      "Variadic functions can now be implemented using the `...` operator, instead of relying on `func_get_args()`.",
    keywords: ["variadic", "argument", "parameter"],
    added: "5.6",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Variadic functions via ...",
        url: "https://www.php.net/manual/en/migration56.new-features.php#migration56.new-features.variadics",
      },
    ],
  },
  {
    name: "Splat operator / argument unpacking (... operator)",
    description:
      "The `...` operator, aka the splat operator or array unpacking operator",
    keywords: ["spread", "unpacking", "arrays", "splat"],
    added: "5.6",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Argument unpacking via ...",
        url: "https://www.php.net/manual/en/migration56.new-features.php#migration56.new-features.splat",
      },
    ],
  },
  {
    name: "Exponential operators ** and **=",
    description: "A right associative <code>**</code> operator has been added to support exponentiation, along with a <code>**=</code> shorthand assignment operator.",
    keywords: ["exponent", "exponentiation", "power", "pow", "math", "operators"],
    added: "5.6",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Exponentiation via **",
        url: "https://www.php.net/manual/en/migration56.new-features.php#migration56.new-features.exponentiation",
      },
    ],
  },
  {
    name: "Shorthand Ternary (?:)",
    description: "Use of <code>?:</code> - actually added in PHP v5.3!",
    keywords: ["short", "shorthand", "ternary", "conditional", "operators"],
    added: "5.6",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "Shorthand ternary (stitcher.io)",
        url: "https://stitcher.io/blog/shorthand-comparisons-in-php#shorthand-ternary-operator",
      },
    ],
  },
  {
    name: "get_magic_quotes_gpc",
    description: "Gets the current configuration setting of magic_quotes_gpc",
    keywords: ["functions", "deprecated", "removed"],
    added: "0.0",
    deprecated: "7.4",
    removed: "8.0",
    resources: [
      {
        name: "get_magic_quotes_gpc (php.net)",
        url: "https://www.php.net/manual/en/function.get-magic-quotes-gpc.php",
      },
    ],
  },
  {
    name: "FILTER_FLAG_SCHEME_REQUIRED constant",
    description:
      "Filter flag for `filter_var()` for use with `FILTER_VALIDATE_URL`",
    keywords: [
      "filters",
      "constants",
      "deprecated",
      "removed",
      "urls",
      "validation",
    ],
    added: "0.0",
    deprecated: "7.3.0",
    removed: "8.0",
    resources: [
      {
        name: "Validate filters (php.net)",
        url: "https://www.php.net/manual/en/filter.filters.validate.php",
      },
      {
        name: "Filter flags (php.net)",
        url: "https://www.php.net/manual/en/filter.filters.flags.php",
      },
    ],
  },
  {
    name: "FILTER_FLAG_HOST_REQUIRED constant",
    description:
      "Filter flag for `filter_var()` for use with `FILTER_VALIDATE_URL`",
    keywords: [
      "filters",
      "constants",
      "deprecated",
      "removed",
      "urls",
      "validation",
    ],
    added: "0.0",
    deprecated: "7.3.0",
    removed: "8.0",
    resources: [
      {
        name: "Validate filters (php.net)",
        url: "https://www.php.net/manual/en/filter.filters.validate.php",
      },
      {
        name: "Filter flags (php.net)",
        url: "https://www.php.net/manual/en/filter.filters.flags.php",
      },
    ],
  },
  {
    name: "Dynamic properties",
    description: "Set values on undeclared class properties",
    keywords: ["class", "dynamic", "deprecated"],
    added: "0.0",
    deprecated: "8.2",
    removed: "9.0",
    resources: [
      {
        name: "Announcement (php.net)",
        url: "https://www.php.net/releases/8.2/en.php#deprecate_dynamic_properties",
      },
      {
        name: "RFC (php.net)",
        url: "https://wiki.php.net/rfc/deprecate_dynamic_properties",
      },
      {
        name: "Dynamic Properties Deprecated (PHP.Watch)",
        url: "https://php.watch/versions/8.2/dynamic-properties-deprecated",
      },
    ],
  },
  {
    name: "Deprecate ${} string interpolation",
    description: "`\"${foo}\"` is deprecated in PHP 8.2; `\"{$foo}\"` is still allowed.",
    keywords: ["dynamic", "variables", "strings", "dollar", "brace"],
    added: "0.0",
    deprecated: "8.2",
    removed: "9.0",
    resources: [
      {
        name: "RFC (php.net)",
        url: "https://wiki.php.net/rfc/deprecate_dollar_brace_string_interpolation",
      },
      {
        name: "Deprecate ${} string interpolation (stitcher.io)",
        url: "https://stitcher.io/blog/new-in-php-82#deprecate-${}-string-interpolation-rfc",
      },
    ],
  },
  {
    name: "Deprecate partially supported callables",
    description: "deprecate callables that are supported by `call_user_func($callable)`, but not by `$callable()` - read the resources!",
    keywords: [],
    added: "0.0",
    deprecated: "8.2",
    removed: "9.0",
    resources: [
      {
        name: "RFC (php.net)",
        url: "https://wiki.php.net/rfc/deprecate_partially_supported_callables",
      },
      {
        name: "Deprecate partially supported callables (stitcher.io)",
        url: "https://stitcher.io/blog/new-in-php-82#deprecate-partially-supported-callables-rfc",
      },
    ],
  },
  {
    name: "utf8_encode (deprecated)",
    description: "utf8_encode and utf8_decode Functions Deprecated - The RFC suggests using mb_convert_encoding() instead.",
    keywords: ["encode", "encoding", "utf8", "deprecations"],
    added: "0.0",
    deprecated: "8.2",
    removed: "9.0",
    resources: [
      {
        name: "RFC (php.net)",
        url: "https://wiki.php.net/rfc/remove_utf8_decode_and_utf8_encode",
      },
      {
        name: "utf8_encode() and utf8_decode() deprecations (stitcher.io)",
        url: "https://stitcher.io/blog/new-in-php-82#utf8_encode()-and-utf8_decode()-deprecations-rfc",
      },
    ],
  },
  {
    name: "utf8_decode (deprecated)",
    description: "utf8_encode and utf8_decode Functions Deprecated - The RFC suggests using mb_convert_encoding() instead.",
    keywords: ["decode", "decoding", "utf8", "deprecations"],
    added: "0.0",
    deprecated: "8.2",
    removed: "9.0",
    resources: [
      {
        name: "RFC (php.net)",
        url: "https://wiki.php.net/rfc/remove_utf8_decode_and_utf8_encode",
      },
      {
        name: "utf8_encode() and utf8_decode() deprecations (stitcher.io)",
        url: "https://stitcher.io/blog/new-in-php-82#utf8_encode()-and-utf8_decode()-deprecations-rfc",
      },
    ],
  },
];

module.exports = features;
