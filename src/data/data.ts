
import product1 from '../assets/Repair scrub.jpg';
import product2 from '../assets/Frame 24.jpg';
import product3 from '../assets/Frame 27.jpg';
import product4 from '../assets/Frame 31 (1).jpg';
import product5 from '../assets/Product card.jpg';
import product6 from '../assets/Repair oil card.jpg';
import product7 from '../assets/Group 8.jpg';
import product8 from '../assets/Group 7 (1).jpg';
import product9 from '../assets/Frame 31.jpg';

interface Product {
    id: number;
    src: string;
    name: string;
    price: number;
    description: string;
}

export const data: Product[] = [
    {
        id: 1,
        src: product1,
        name: 'Repair Scrub',
        price: 19.00,
        description: 'Our Repair Body Scrub is expertly crafted to rejuvenate and revitalize your skin. This luxurious scrub combines natural exfoliants with nourishing ingredients to gently remove dead skin cells, promote cell renewal, and restore your skin\'s natural radiance.'
    },
    {
        id: 2,
        src: product2,
        name: 'Bloom Serum',
        price: 28.00,
        description: 'Experience the transformative power of our Bloom Serum. Formulated with a potent blend of active ingredients, this serum deeply penetrates the skin to deliver intense hydration, reduce the appearance of fine lines, and enhance your skin\'s overall brightness and clarity.'
    },
    {
        id: 3,
        src: product3,
        name: '3 in 1 Repair Kit',
        price: 85.00,
        description: 'The 3 in 1 Repair Kit is your ultimate solution for comprehensive skin care. This kit includes a unique combination of products designed to cleanse, treat, and protect your skin, ensuring a healthy and radiant complexion. Perfect for daily use to address multiple skin concerns.'
    },
    {
        id: 4,
        src: product4,
        name: 'Deep Moisture',
        price: 35.00,
        description: 'Immerse your skin in intense hydration with our Deep Moisture. This rich and creamy formula penetrates deeply to nourish and moisturize, leaving your skin feeling soft, supple, and rejuvenated.'
    },
    {
        id: 5,
        src: product5,
        name: 'SPF 50 Sunscreen',
        price: 15.00,
        description: 'Protect your skin from harmful UV rays with our SPF 50 Sunscreen. This lightweight, non-greasy formula provides broad-spectrum protection while hydrating and soothing your skin. Perfect for daily use to keep your skin safe and healthy.'
    },
    {
        id: 6,
        src: product6,
        name: 'Repair Oil',
        price: 22.00,
        description: 'Revitalize your skin with our Repair Oil. Enriched with essential oils and vitamins, this potent formula penetrates deeply to repair and rejuvenate your skin, leaving it smooth, radiant, and youthful.'
    },
    {
        id: 7,
        src: product7,
        name: 'Body Oil',
        price: 35.00,
        description: 'Experience the firming effects of our Firming Body Oil. This luxurious oil is formulated with natural ingredients that help to tighten and tone your skin, improving its elasticity and leaving it feeling firm and supple.'
    },
    {
        id: 8,
        src: product8,
        name: 'Deep Moisture',
        price: 35.00,
        description: 'Immerse your skin in intense hydration with our Deep Moisture. This rich and creamy formula penetrates deeply to nourish and moisturize, leaving your skin feeling soft, supple, and rejuvenated.'
    },
    {
        id: 9,
        src: product9,
        name: 'Body Milk',
        price: 35.00,
        description: 'Indulge your skin with our Body Milk. This silky, lightweight lotion is infused with nourishing ingredients to hydrate and soften your skin, leaving it feeling smooth, refreshed, and beautifully radiant.'
    }
];
