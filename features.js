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
    name: "Read-only classes",
    description:
      "Marking a class as read-only will implicitly mark all instance properties of a class as readonly. Furthermore, it will prevent the creation of dynamic properties.",
    keywords: ["readonly", "classes", "objects"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
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
    name: "null and false as standalone types",
    description:
      "null corresponds to PHP's unit type, i.e. the type which holds a single value. false is a literal type of type bool",
    keywords: ["types", "typehints", "booleans"],
    added: "8.2",
    deprecated: null,
    removed: null,
    resources: [
      {
        name: "(RFC) Allow null and false as standalone types",
        url: "https://wiki.php.net/rfc/null-false-standalone-types",
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
        name: "Backtrace parameter redaction (PHP.Watch)",
        url: "https://php.watch/versions/8.2/memory_reset_peak_usage",
      },
    ],
  },
  {
    name: "Backtrace parameter redaction",
    description:
      "Mark parameters as sensitive to exclude them from a backtrace",
    keywords: ["sensitive", "debugging", "data", "security", "traces"],
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
      "Attributes, also known as annotations in many other languages, can be used to add meta data to classes, methods, variables and what not; in a structured way. Like docblocks, but recognised properly by PHP.",
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
      "Nullsafe operator allows you to access properties and methods of nullable objects. e.g. <code>$country = $session?->user?->getAddress()?->country;</code>",
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
        name: "Typed properties in PHP 7.4 (stitcher.io)",
        url: "https://stitcher.io/blog/typed-properties-in-php-74",
      },
    ],
  },
  {
    name: "Arrow functions",
    description:
      "Arrow functions are a shorthand for anonymous functions: <code>fn (argument_list) => expr</code>.",
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
    name: "Filtered unserialize()",
    description:
      'Filtered unserialize allows developers to specify which classes they expect data to unserialize into. For example: <code>$data = unserialize($foo, ["allowed_classes" => ["MyClass", "MyClass2"]]);</code>. This improves security greatly when using PHP serialization.',
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
    name: "Splat operator / argument unpacking (... operator)",
    description:
      "The ... operator, aka the splat operator or array unpacking operator",
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
];
