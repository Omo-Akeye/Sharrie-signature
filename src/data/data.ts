import product1 from '../assets/Repair scrub.jpg'
import product2 from '../assets/Frame 24.jpg'
import product3 from '../assets/Frame 27.jpg'
import product4 from '../assets/Frame 31.jpg'
import product5 from '../assets/Product card.jpg'
import product6 from '../assets/Repair oil card.jpg'


interface Product {
    id: number;
    src: string;
    name: string;
    price: number;
  }

export const data:Product[] = [
    {
        id:1,
        src:product1,
        name: 'Repair Scrub',
        price: 19.00
    },
    {
        id:2,
        src:product2,
        name: 'Bloom Serum',
        price: 28.00
    },
    {
        id:3,
        src:product3,
        name: '3 in 1 Repair Kit',
        price: 85.00
    },
    {
        id:4,
        src:product4,
        name: 'Deep Moisture ',
        price: 35.00
    },
    {
        id:5,
        src:product5,
        name: 'SPF 50 Sunscreen',
        price: 15.00
    },
    {
        id:6,
        src:product6,
        name: 'Repair Oil',
        price: 22.00
    }
]

