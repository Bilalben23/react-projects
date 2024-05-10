import { Children } from "react"

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