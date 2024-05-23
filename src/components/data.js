export const accordions = [
    {
        id: 1,
        question: "What are accordion components?",
        answer: "Accordion components are UI elements that let users expand and collapse sections of content to manage visibility and focus on relevant information."
    }, {
        id: 2,
        question: "What are they used for?",
        answer: "Accordion components are used to organize and display content in a collapsible and expandable format, allowing users to manage visibility and focus on specific information."
    }, {
        id: 3,
        question: "Accordion as a musical Instrument",
        answer: "An accordion is a musical instrument that creates sound through the vibration of reeds as air passes over them, typically played by compressing and expanding the bellows while pressing keys or buttons to produce different notes and chords."
    }, {
        id: 4,
        question: "Can I create an accordion component with a different framework?",
        answer: "Yes, you can create an accordion component with different frameworks or libraries such as React, Vue.js, Angular, or even plain HTML, CSS, and JavaScript."
    }
]



export const sideMenu = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "Profile",
        to: "/profile",
        children: [
            {
                label: "Details",
                to: "/details",
                children: [
                    {
                        label: "Location",
                        to: "/location",
                        children: [
                            {
                                label: "City",
                                to: "/city",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: "Settings",
        to: "/setting",
        children: [
            {
                label: "Account",
                to: "/account",
            }, {
                label: "Security",
                to: "/security",
                children: [
                    {
                        label: "Login",
                        to: "/login",
                    }, {
                        label: "Register",
                        to: "/register",
                        children: [
                            {
                                label: "Random Data",
                                to: "/random-data"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]


export const tabs = [
    {
        id: 0,
        to: 'tab1',
        label: 'Tab1',
        text: 'This is the tab 1'
    },
    {
        id: 1,
        to: 'tab2',
        label: 'Tab2',
        text: 'This is the tab 2'
    },
    {
        id: 2,
        to: 'tab3',
        label: 'Tab3',
        text: 'This is the tab 3'
    },

]


// this is for the recipe app

export const availableSearchedItems = [
    { id: 1, item: "carrot" },
    { id: 2, item: "broccoli" },
    { id: 3, item: "asparagus" },
    { id: 4, item: "cauliflower" },
    { id: 5, item: "corn" },
    { id: 6, item: "cucumber" },
    { id: 7, item: "green pepper" },
    { id: 8, item: "lettuce" },
    { id: 9, item: "mushrooms" },
    { id: 10, item: "onion" },
    { id: 11, item: "potato" },
    { id: 12, item: "pumpkin" },
    { id: 13, item: "red pepper" },
    { id: 14, item: "tomato" },
    { id: 15, item: "beetroot" },
    { id: 16, item: "brussel sprouts" },
    { id: 17, item: "peas" },
    { id: 18, item: "zucchini" },
    { id: 19, item: "radish" },
    { id: 20, item: "sweet potato" },
    { id: 21, item: "artichoke" },
    { id: 22, item: "leek" },
    { id: 23, item: "cabbage" },
    { id: 24, item: "celery" },
    { id: 25, item: "chili" },
    { id: 26, item: "garlic" },
    { id: 27, item: "basil" },
    { id: 28, item: "coriander" },
    { id: 29, item: "parsley" },
    { id: 30, item: "dill" },
    { id: 31, item: "rosemary" },
    { id: 32, item: "oregano" },
    { id: 33, item: "cinnamon" },
    { id: 34, item: "saffron" },
    { id: 35, item: "green bean" },
    { id: 36, item: "bean" },
    { id: 37, item: "chickpea" },
    { id: 38, item: "lentil" },
    { id: 39, item: "apple" },
    { id: 40, item: "apricot" },
    { id: 41, item: "avocado" },
    { id: 42, item: "banana" },
    { id: 43, item: "blackberry" },
    { id: 44, item: "blackcurrant" },
    { id: 45, item: "blueberry" },
    { id: 46, item: "boysenberry" },
    { id: 47, item: "cherry" },
    { id: 48, item: "coconut" },
    { id: 49, item: "fig" },
    { id: 50, item: "grape" },
    { id: 51, item: "grapefruit" },
    { id: 52, item: "kiwifruit" },
    { id: 53, item: "lemon" },
    { id: 54, item: "lime" },
    { id: 55, item: "lychee" },
    { id: 56, item: "mandarin" },
    { id: 57, item: "mango" },
    { id: 58, item: "melon" },
    { id: 59, item: "nectarine" },
    { id: 60, item: "orange" },
    { id: 61, item: "papaya" },
    { id: 62, item: "passion fruit" },
    { id: 63, item: "peach" },
    { id: 64, item: "pear" },
    { id: 65, item: "pineapple" },
    { id: 66, item: "plum" },
    { id: 67, item: "pomegranate" },
    { id: 68, item: "quince" },
    { id: 69, item: "raspberry" },
    { id: 70, item: "strawberry" },
    { id: 71, item: "watermelon" },
    { id: 72, item: "salad" },
    { id: 73, item: "pizza" },
    { id: 74, item: "pasta" },
    { id: 75, item: "popcorn" },
    { id: 76, item: "lobster" },
    { id: 77, item: "steak" },
    { id: 78, item: "bbq" },
    { id: 79, item: "pudding" },
    { id: 80, item: "hamburger" },
    { id: 81, item: "pie" },
    { id: 82, item: "cake" },
    { id: 83, item: "sausage" },
    { id: 84, item: "tacos" },
    { id: 85, item: "kebab" },
    { id: 86, item: "poutine" },
    { id: 87, item: "seafood" },
    { id: 88, item: "chips" },
    { id: 89, item: "fries" },
    { id: 90, item: "masala" },
    { id: 91, item: "paella" },
    { id: 92, item: "som tam" },
    { id: 93, item: "chicken" },
    { id: 94, item: "toast" },
    { id: 95, item: "marzipan" },
    { id: 96, item: "tofu" },
    { id: 97, item: "ketchup" },
    { id: 98, item: "hummus" },
    { id: 99, item: "chili" },
    { id: 100, item: "maple syrup" },
    { id: 101, item: "parma ham" },
    { id: 102, item: "fajitas" },
    { id: 103, item: "champ" },
    { id: 104, item: "lasagna" },
    { id: 105, item: "poke" },
    { id: 106, item: "chocolate" },
    { id: 107, item: "croissant" },
    { id: 108, item: "arepas" },
    { id: 109, item: "bunny chow" },
    { id: 110, item: "pierogi" },
    { id: 111, item: "donuts" },
    { id: 112, item: "rendang" },
    { id: 113, item: "sushi" },
    { id: 114, item: "ice cream" },
    { id: 115, item: "duck" },
    { id: 116, item: "curry" },
    { id: 117, item: "beef" },
    { id: 118, item: "goat" },
    { id: 119, item: "lamb" },
    { id: 120, item: "turkey" },
    { id: 121, item: "pork" },
    { id: 122, item: "fish" },
    { id: 123, item: "crab" },
    { id: 124, item: "bacon" },
    { id: 125, item: "ham" },
    { id: 126, item: "pepperoni" },
    { id: 127, item: "salami" },
    { id: 128, item: "ribs" },
];
