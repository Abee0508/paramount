export interface Link {
    router: string;
    title: string;
}

export const HEADER_LINKS: Link[] = [
    {
        router: "/",
        title: "Home",
    },
    {
        router: "/about-us",
        title: "About Us",
    },
    {
        router: "/blogs",
        title: "Blogs",
    },
    {
        router: "/contact-us",
        title: "Contact Us",
    },
    {
        router: "/dashboard",
        title: "Dashboard",
    },
    {
        router: "/services",
        title: "Services",
    },
];

// =======================================================================
// =======================================================================

export const EXPLORE_ITEMS: Link[] = [
    {
        router: "/services",
        title: "Services",
    },
    {
        router: "/service-detail",
        title: "Service Detail",
    },
    {
        router: "/properties",
        title: "Properties",
    },
    {
        router: "/property-detail-one",
        title: "Property Detail One",
    },
    {
        router: "/property-detail-two",
        title: "Property Detail Two",
    },
];

// =======================================================================
// =======================================================================

export const PARAMOUNT_ITEMS: Link[] = [
    {
        router: "/login",
        title: "Login",
    },
    {
        router: "/messages",
        title: "Messages",
    },
    {
        router: "/submit-ticket",
        title: "Submit Ticket",
    },
    {
        router: "/blog-detail",
        title: "Blog Detail",
    },
];
