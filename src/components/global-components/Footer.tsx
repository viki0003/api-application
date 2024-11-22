import Logo from "@/src/Assets/APPLogo.png";
import Image from "next/image";

const Footer = () => {
  const sections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Login", href: "/all-api" },
        { name: "About Us", href: "/about-us" },
        { name: "API's List", href: "/all-api" },
        { name: "About Author", href: "/all-api" },
        { name: "Contact Us", href: "/all-api" },
        { name: "Privacy Policy", href: "/all-api" },
        { name: "Terms & Conditions", href: "/all-api" },
      ],
    },
    {
      title: "Registeration Needed",
      links: [
        { name: "Unsplash API", href: "/images-api/unsplash-api" },
        { name: "Lorem Picsum", href: "/images-api/lorem-picsum-api" },
        { name: "Open Weather Map", href: "/data-api/open-weather-api" },
        { name: "Free Geo IP", href: "/data-api/free-geo-ip-api" },
        { name: "CoinGecko API", href: "/finance-api/crypto-api" },
        {
          name: "Open Exchange Rates",
          href: "/finance-api/open-exchange-rates-api",
        },
        { name: "NewsAPI", href: "/news-data-api/news-api" },
        { name: "The Guardian API", href: "/news-data-api/the-guardian-api" },
      ],
    },
    {
      title: "No Registration Needed",
      links: [
        { name: "Cat API", href: "/components/application-ui/lists/tables" },
        { name: "Dog API", href: "/components/application-ui/lists/feeds" },
        {
          name: "Pokemon API",
          href: "/components/application-ui/forms/form-layouts",
        },
        {
          name: "Trivia API",
          href: "/components/application-ui/forms/select-menus",
        },
        {
          name: "QR Code Generator API",
          href: "/components/application-ui/forms/radio-groups",
        },
        {
          name: "Deck of Cards",
          href: "/components/application-ui/forms/checkboxes",
        },
        {
          name: "Joke API",
          href: "/components/application-ui/forms/comboboxes",
        },
        {
          name: "JSONPlaceholder",
          href: "/components/application-ui/navigation/navbars",
        },
      ],
    },
    {
      title: "API Categories",
      links: [
        { name: "Images API's", href: "/images-api" },
        { name: "API's For Data", href: "/data-api" },
        { name: "Cryptocurrency API", href: "/finance-api" },
        { name: "Health & Wellness API's", href: "/health-wellness-api" },
        { name: "Fun and Games API's", href: "/fun-games-api" },
        {
          name: "Natural Language and AI API's",
          href: "/natural-language-ai-api",
        },
        { name: "Education API's", href: "/education-ai" },
        { name: "Miscellaneous API's", href: "/miscellaneous-api" },
      ],
    },
  ];

  return (
    <footer
      className="mx-auto mt-32 w-full px-4 sm:px-6 lg:px-8 bg-slate-50"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className=" max-w-container m-auto">
        <div className="pt-10">
          <Image src={Logo} alt="Logo" className="w-[125px]" />
        </div>
        <p className="mt-5  text-sm/6 text-gray-600">
          Beautifully designed and expertly crafted components for seamless
          integration of Free API&apos;s.
          <br />
          Build innovative solutions using free APIs for weather, geolocation,
          QR code generation, and more
        </p>
        <hr className="mt-7 border-t border-zinc-200" />
        <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 pb-10">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm/6 font-semibold text-gray-900">
                {section.title}
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {section.links.map((link, index) => (
                  <li key={index} className="group">
                    <a
                      className="text-sm/6 text-gray-600 hover:text-gray-900 group-last:text-slate-900 [&>span]:group-last:inline-block [&>span]:group-last:transition [&>span]:group-last:hover:translate-x-0.5 hover:border-b border-[#4b5563]"
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="mt-7 border-t border-zinc-200" />
        <div className="flex justify-center items-center p-3">
          <p className="text-sm/6 text-gray-600">
            © 2024 FREE API PLATFORM • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
