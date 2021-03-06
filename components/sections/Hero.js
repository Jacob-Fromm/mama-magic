import PropTypes from "prop-types";
import Cta from "../Cta";
import { PortableText, urlFor } from "../../utils/sanity";

function Hero(props) {
  const { heading, backgroundImage, tagline, ctas } = props;

  return (
    <div>
      <div className="container mx-auto px-6 mt-4 py-auto">
        <div className="md:flex md:items-center md:justify-start">
          <div className="container md:flex flex-row w-full h-64 md:w-1/2 lg:h-96">
            <img
              className="h-full w-full px-auto rounded-md object-cover max-w-lg mx-auto my-10"
              src={urlFor(backgroundImage)
                .auto("format")
                .width(1051)
                .fit("crop")
                .quality(80)}
              alt={backgroundImage.alt}
            />
          </div>
          <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 className="text-gray-700 uppercase bold text-xl">{heading}</h3>
            {tagline && <PortableText blocks={tagline} />}
            {ctas && (
              <div>
                {ctas.map((cta) => (
                  <Cta {...cta} key={cta._key} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
};

export default Hero;
