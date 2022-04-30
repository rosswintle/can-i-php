const features = [
    {
        name: 'Enums',
        description: 'Enums are a way to define a set of named constants.',
        keywords: [
            'constants', 'class', 'classes'
        ],
        added: '8.1',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Enums',
                url: 'https://stitcher.io/blog/php-enums'
            }
        ]
    },
    {
        name: 'Array unpacking with string keys',
        description: 'e.g. <code>$result = [\'a\' => 0, ...$arrayA, ...$arrayB];</code>',
        keywords: [
            'spread', 'unpacking', 'arrays', 'deconstruct'
        ],
        added: '8.1',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'RFC (php.net)',
                url: 'https://wiki.php.net/rfc/array_unpacking_string_keys'
            }
        ]
    },
    {
        name: 'Readonly properties',
        description: 'A property can be declared with the readonly modifier, which prevents modification of the property after initialization.',
        keywords: [
            'objects', 'classes', 'properties', 'modifier'
        ],
        added: '8.1',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Readonly properties (php.net)',
                url: 'https://www.php.net/manual/en/language.oop5.properties.php#language.oop5.properties.readonly-properties'
            }
        ]
    },
    {
        name: 'never type',
        description: '<code>never</code> is a return type indicating the function does not return.',
        keywords: [
            'types', 'typehints', 'return'
        ],
        added: '8.1',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Readonly properties (php.net)',
                url: 'https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.never'
            }
        ]
    },
    {
        name: 'new in initializers',
        description: 'Use <code>new</code> expressions inside parameter default values, attribute arguments, static variable initializers and global constant initializers.',
        keywords: [
            'new', 'objects'
        ],
        added: '8.1',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'new in initializers (stitcher.io)',
                url: 'https://stitcher.io/blog/php-81-new-in-initializers'
            }
        ]
    },
    {
        name: 'First-class callable syntax ',
        description: 'The first class callable syntax is introduced as of PHP 8.1.0, as a way of creating anonymous functions from callable.',
        keywords: [
            'closures'
        ],
        added: '8.1',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'First class callable syntax (php.net)',
                url: 'https://www.php.net/manual/en/functions.first_class_callable_syntax.php'
            }
        ]
    },
    {
        name: 'Intersection types',
        description: 'An intersection type declaration enforces that a value must belong to all of the declared types.',
        keywords: [
            'types', 'typehints', 'declarations'
        ],
        added: '8.1',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Intersection types (php.net)',
                url: 'https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.composite.intersection'
            },
            {
                name: 'Intersection types (PHP.Watch)',
                url: 'https://php.watch/versions/8.1/intersection-types'
            }
        ]
    },
    {
        name: 'Attributes',
        description: 'Attributes, also known as annotations in many other languages, can be used to add meta data to classes, methods, variables and what not; in a structured way. Like docblocks, but recognised properly by PHP.',
        keywords: [
            'annotations', 'docblocks', 'documentation', 'metadata', 'reflection'
        ],
        added: '8.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Attributes (php.net)',
                url: 'https://www.php.net/manual/en/language.attributes.overview.php'
            },
            {
                name: 'Attributes (stitcher.io)',
                url: 'https://stitcher.io/blog/attributes-in-php-8'
            }
        ]
    },
    {
        name: 'Union types',
        description: 'A union type declaration accepts values of multiple different simple types, rather than a single one. Also referred to as composite types.',
        keywords: [
            'types', 'typehints', 'declarations', 'composite type'
        ],
        added: '8.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Union types (php.net)',
                url: 'https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.composite.union'
            }
        ]
    },
    {
        name: 'Constructor promotion',
        description: 'Constructor parameters may be promoted to correspond to an object property.',
        keywords: [
            'parameters', 'properties', 'classes', 'promoted'
        ],
        added: '8.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Constructor promotion (php.net)',
                url: 'https://www.php.net/manual/en/language.oop5.decon.php#language.oop5.decon.constructor.promotion'
            }
        ]
    },
    {
        name: 'match expression',
        description: '<code>match</code> is like <code>switch</code>, but returns a value.',
        keywords: [
            'control', 'structures', 'switch', 'conditionals'
        ],
        added: '8.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Match expression (php.net)',
                url: 'https://www.php.net/manual/en/control-structures.match.php'
            }
        ]
    },
    {
        name: 'Named arguments',
        description: 'Named arguments allow passing arguments to a function based on the parameter name, rather than the parameter position.',
        keywords: [
            'parameters', 'call', 'functions'
        ],
        added: '8.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Named arguments (php.net)',
                url: 'https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments'
            }
        ]
    },
    {
        name: 'Nullsafe operator',
        description: 'Nullsafe operator allows you to access properties and methods of nullable objects. e.g. <code>$country = $session?->user?->getAddress()?->country;</code>',
        keywords: [
            'null'
        ],
        added: '8.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Nullsafe operator (stitcher.io)',
                url: 'https://stitcher.io/blog/php-8-nullsafe-operator'
            }
        ]
    },
    {
        name: 'str_contains',
        description: 'Determine if a string contains a given substring',
        keywords: [
            'functions', 'helpers', 'strings', 'utilities', 'utils'
        ],
        added: '8.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'str_contains (php.net)',
                url: 'https://www.php.net/manual/en/function.str-contains.php'
            }
        ]
    },
    {
        name: 'str_starts_with',
        description: 'Check if a string starts with a given substring',
        keywords: [
            'functions', 'helpers', 'strings', 'utilities', 'utils'
        ],
        added: '8.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'str_starts_with (php.net)',
                url: 'https://www.php.net/manual/en/function.str-starts-with.php'
            }
        ]
    },
    {
        name: 'str_ends_with',
        description: 'Check if a string ends with a given substring',
        keywords: [
            'functions', 'helpers', 'strings', 'utilities', 'utils'
        ],
        added: '8.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'str_ends_with (php.net)',
                url: 'https://www.php.net/manual/en/function.str-ends-with.php'
            }
        ]
    },
    {
        name: 'Throw expression',
        description: 'The <code>throw</code> keyword is an expression, therefore an exception can be thrown in any expression context.',
        keywords: [
            'throw', 'expression', 'exceptions'
        ],
        added: '8.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Exceptions (php.net)',
                url: 'https://www.php.net/manual/en/language.exceptions.php'
            },
            {
                name: 'RFC (php.net)',
                url: 'https://wiki.php.net/rfc/throw_expression'
            }
        ]
    },
    {
        name: 'Typed properties',
        description: 'Class properties now support type declarations.',
        keywords: [
            'properties', 'class', 'types', 'typehints'
        ],
        added: '7.4',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Typed properties in PHP 7.4 (stitcher.io)',
                url: 'https://stitcher.io/blog/typed-properties-in-php-74'
            }
        ]
    },
    {
        name: 'Arrow functions',
        description: 'Arrow functions are a shorthand for anonymous functions: <code>fn (argument_list) => expr</code>.',
        keywords: [
            'closures', 'anonymous', 'shorthand', 'short'
        ],
        added: '7.4',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Arrow functions (php.net)',
                url: 'https://www.php.net/manual/en/functions.arrow.php'
            }
        ]
    },
    {
        name: 'Array unpacking (numeric keys only)',
        description: 'e.g. <code>$result = [0, …$arrayA, …$arrayB, 6, 7];</code>',
        keywords: [
            'spread', 'unpacking', 'arrays', 'deconstruct'
        ],
        added: '7.4',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Array unpacking',
                url: ''
            }
        ]
    },
    {
        name: 'Multi catch exception handline',
        description: 'A catch block may specify multiple exceptions using the pipe (|) character',
        keywords: [
            'exceptions'
        ],
        added: '7.1',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Exceptions (php.net)',
                url: 'https://www.php.net/manual/en/language.exceptions.php'
            }
        ]
    },
    {
        name: 'nullable type declarations',
        description: 'Type declarations can be marked nullable by prefixing the type name with a question mark (?). This signifies that the value can be of the specified type or null.',
        keywords: [
            'declarations', 'typehints', 'return'
        ],
        added: '7.1',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Nullable type (php.net)',
                url: 'https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.nullable'
            }
        ]
    },
    {
        name: 'void return type',
        description: '<code>void</code> is a return type indicating the function does not return a value.',
        keywords: [
            'declarations', 'typehints', 'return'
        ],
        added: '7.1',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'void return type (php.net)',
                url: 'https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.return-only'
            }
        ]
    },
    {
        name: 'Group use declarations',
        description: 'Classes, functions and constants being imported from the same namespace can be grouped together in a single use statement.',
        keywords: [
            'imports'
        ],
        added: '7.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Group use declarations (php.net)',
                url: 'https://www.php.net/manual/en/language.namespaces.importing.php#language.namespaces.importing.group'
            }
        ]
    },
    {
        name: 'Null coalescing operator',
        description: 'Use <code>??</code>',
        keywords: [
            'short', 'shorthand', 'null', 'conditional', 'operators'
        ],
        added: '7.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Null coalescing operator (php.net)',
                url: 'https://www.php.net/manual/en/language.operators.comparison.php#language.operators.comparison.coalesce'
            }
        ]
    },
    {
        name: 'Return type declarations',
        description: 'Return type declarations specify the type of the value that will be returned from a function',
        keywords: [
            'typehints', 'types'
        ],
        added: '7.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Return type declarations (php.net)',
                url: 'https://www.php.net/manual/en/migration70.new-features.php#migration70.new-features.return-type-declarations'
            }
        ]
    },
    {
        name: 'Spaceship operator',
        description: 'Use <code><=></code> for comparisons for sorting',
        keywords: [
            'short', 'shorthand', 'spaceship', 'comparisons', 'operators', 'sorting'
        ],
        added: '7.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Spaceship operator (stitcher.io)',
                url: 'https://stitcher.io/blog/shorthand-comparisons-in-php#spaceship-operator'
            }
        ]
    },
    {
        name: 'Scalar type hints',
        description: 'As of PHP 7, the scalar types (integers, floating point numbers, booleans and strings) can be used as type hints. This is in addition to being able to use classes, arrays and callables, which were already allowed.',
        keywords: [
            'types', 'typehints', 'typed'
        ],
        added: '7.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'What is new in PHP 7?',
                url: 'https://trimurtidev.in/what-is-new-in-php-7/'
            }
        ]
    },
    {
        name: 'Shorthand Ternary (?:)',
        description: 'Use of <code>?:</code> - actually added in PHP v5.3!',
        keywords: [
            'short', 'shorthand', 'ternary', 'conditional', 'operators'
        ],
        added: '5.6',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Shorthand ternary (stitcher.io)',
                url: 'https://stitcher.io/blog/shorthand-comparisons-in-php#shorthand-ternary-operator'
            }
        ]
    }
]
