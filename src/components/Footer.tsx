interface Link {
  text: string;
  url?: string;
  className?: string;
}

interface FooterSectionProps {
  title: string;
  links: Link[];
}

function FooterSection ({ title, links }:FooterSectionProps) {
  return (
    <li className="flex-1">
      <p className="text-[#818181] md:mb-8 mb-6">{title}</p>
      {links.map((link, index) => (
        <p key={index} className="mb-3">
          {link.url ? (
            <a href={link.url} className={link.className}>{link.text}</a>
          ) : (
            link.text
          )}
        </p>
      ))}
    </li>
  );
};





interface Section {
  title: string;
  links: { text: string; url?: string; className?: string }[];
}

interface FooterProps {
  sections: Section[];
}

export default function Footer({ sections }:FooterProps)  {
  return (
    <>
    <div className="border-y-[1px] border-[#DFDFDF] w-full md:py-24 py-12">
      <ul className="md:flex justify-between w-[80%] m-auto">
        {sections.map((section, index) => (
          <FooterSection key={index} title={section.title} links={section.links} />
        ))}
      </ul>

    
    </div>

    <div className="mt-8">
        <div className="w-[80%] m-auto flex justify-between max-md:text-[10px]">
          <p>&copy; sharrie’s signature 2020</p>
          <span className="flex gap-5">
            <p>Legal & Privacy</p>
            <p>Cookies</p>
          </span>
        </div>
      </div>

      <h2 className='md:text-2xl redress text-[#408C2B] text-center mb-20 text-xl mt-10'>Sharrie's Signature</h2>
    </>
  );
};




export const footerSections = [
  {
    title: "About us",
    links: [
      { text: "Shop" },
      { text: "Our Story" },
      { text: "Blog" }
    ]
  },
  {
    title: "Help",
    links: [
      { text: "You can email us", url: "#", className: "text-[#408C2B] underline" },
      { text: "FAQ" },
      { text: "Shipping" }
    ]
  },
  {
    title: "Socials",
    links: [
      { text: "Facebook" },
      { text: "Instagram" },
      { text: "Twitter" }
    ]
  },
  {
    title: "Email Sign-up",
    links: [
      {text: "Sign up for Sharrie’s", url: "#", className: "text-[#408C2B] underline" },
      {text: "signature emails and receive latest news including exclusive offers"},
      { text: "Follow us" }
    ]
  }
];

