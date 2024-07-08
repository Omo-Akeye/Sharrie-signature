import poster from '../assets/poster.jpg'
import poster1 from '../assets/poster (1).jpg'
import poster2 from '../assets/poster (2).jpg'
import poster3 from '../assets/poster (3).jpg'

const post = [
    { id:1,
      src:poster,
      name:'Cleanse & Prep'
    },
    { id:2,
        src:poster1,
        name:'Moisturize & Protect'
    },
    { id:3,
        src:poster2,
        name:'Treat & Nourish'
    },
    { id:4,
        src:poster3,
        name:'Body care'
    },

]

export default function OurCollections() {
  return (
    <div className='mt-36 w-[90%] m-auto'>
        <div className='text-xl font-light border-b-[1px] mb-10 pb-4'>Our Collections</div>
      <section>
        <ul className='flex gap-5'>
          {post.map((poster) => (
            <li key={poster.id}>
              <img src={poster.src} alt={poster.name} className='xl:w-[304px] xl:h-[270px] object-cover w-64 h-64 rounded-md' />
              <p className='text-center mt-6 text-lg'>{poster.name}</p>
            </li>
          ))}
        </ul>
      </section>

        
    </div>
  )
}
