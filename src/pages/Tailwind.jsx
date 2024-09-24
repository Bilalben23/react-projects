import { useLayoutEffect, useRef, useState } from 'react'


export default function Tailwind() {

    return (
        <div>
            <div className='card'>
                <h1>Card title</h1>
                <p>Card description...</p>
                <div>
                    <button>Button 1</button>
                    <button>Button 2</button>
                </div>
            </div>

        </div>
    )
}

// Design System

// Core Concepts:

// * Utility-First approach:
// + stop using traditional approach.
// + You aren't wasting energy inventing class names.
// + Your CSS stops growing.
// + Making changes feels safer.
// + a lot of easier than maintaining a large CSS codebase.
// + Advantages of Tailwind utility classes:
// => designing with constraints.(predefined design system)
// => Responsive design (responsive utilities)
// => Hover, focus, and other states: (state variants)

// * Custom modifiers
// Arbitrary variants are just format strings that represent the selector, wrapped in square brackets.
// - Using arbitrary variants: [&:nth-child(3)]:underline
// [&_p]:mt-4


//* Responsive design:
// Tailwind uses a mobile-first breakpoint system.
// Targeting a breakpoint range: md:max-xl:flex.
// Targeting a single breakpoint.
// Arbitrary values min-[] / max-[]

// * Dark Mode:
// + Media strategy => darkMode: 'media': based on the media query 'prefers-color-scheme'
// + selector strategy => darkMode: 'selector': based on whenever the 'dark' class is present earlier in the HTML
// avoid FOUC "Flashed of Unstyled Content"

// * Reusing Styles:
// + Using Editor and language features: like multi-cursor feature or loops
// + when you use components and template partials, you have a single source of truth for the styles.
// + Don’t use @apply just to make things look “cleaner”
// + mt-[theme(spacing.32)]

// * Adding Custom Styles:
// + Tailwind has been designed from the ground up. be extensible and customizable.
// + custom your theme.
// + using arbitrary values.(Tailwind's square bracket notation).
// + Arbitrary variants: like Arbitrary values.
// + many utilities in Tailwind share namespace but map different CSS properties. text-lg/ text-black
// + @layer directive to add styles to Tailwind's 'base', 'components' and 'utilities' layers
// + @layer


// * Functions & Directives:
// @tailwind: directive to insert Tailwind's 'base', 'components', 'utilities' and 'variants' styles into your CSS.
// @layer 
// @apply: to inline any existing utility classes into your own custom CSS.
// theme(): function to access your Tailwind config values using dot notation.
// screen():


// https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles

/* 
    * Modifiers:
    ✔ :hover 
    ✔ :focus 
    ✔ :focus-within 
    ✔ :focus-visible 
    ✔ :active 
    ✔ :visited 
    ✔ :target (URL fragment) 
    ✔ :* 
    ✔ :has
    ✔ :first 
    ✔ :last 
    ✔ [&:nth-child(2)]: 
    ✔ :odd 
    ✔ :even 
    ✔ :first-of-type 
    ✔ :last-of-type 
    ✔ :only-of-type 
    ✔ :empty 
    ✔ :only 
    ✔ :in-range 
    ✔ :out-of-range 
    ✔ :autofill 
    ✔ :disabled 
    ✔ :checked 
    ✔ :required 
    ✔ :read-only 
    ✔ :before 
    ✔ :after 
    ✔ :after 
    ✔ :first-letter 
    ✔ :first-line 
    ✔ :marker 
    ✔ :selection 
    ✔ :file 
    ✔ :placeholder 
    ✔ :sm => (min-width:640px) 
    ✔ :md => (min-width:768px) 
    ✔ :lg => (min-width:1024px) 
    ✔ :xl => (min-width:1280px) 
    ✔ :2xl => (min-width:1536px) 
    ✔ :min-[...]
    ✔ :max-sm[...]
    ✔ :max[...]
    ✔ :dark @media(prefers-color-scheme: dark)
    ✔ :portrait
    ✔ :landscape
    ✔ :print
    ✔ :ltr / :rtl
    ✔ :open
    ✔ group-{modifier}
*/