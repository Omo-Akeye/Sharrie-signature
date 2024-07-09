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
    <div className='md:mt-36 w-[90%] m-auto mt-12'>
        <div className='md:text-2xl font-light border-b-[1px] mb-10 pb-4 spacing2'>Our Collections</div>
      <section>
        <ul className='md:flex md:gap-5 gap-4 grid grid-cols-2'>
          {post.map((poster) => (
            <li key={poster.id}>
              <img src={poster.src} alt={poster.name} className='xl:w-[304px] xl:h-[270px] object-cover md:w-64 md:h-64 rounded-md w-[160px] h-[142px]' />
              <p className='md:mt-6 mt-4 md:text-lg text-center text-sm'>{poster.name}</p>
            </li>
          ))}
        </ul>
      </section>

        
    </div>
  )
}
