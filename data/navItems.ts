export interface NavItemsTypes {
    id: number;
    title: string;
    link: string;
}

export const navItems: NavItemsTypes[] = [
    { id: 1, title: 'About', link: '#about' },
    { id: 2, title: 'Projects', link: '#projects' },
    { id: 3, title: 'Testimonials', link: '#testiomoials' },
    { id: 4, title: 'Contact', link: '#contact' },
]