
import Slider from "react-slick";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/img2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Custom styles for the dots and layout

export default function Testimonials() {
    const settings = {
        dots: true, // Show dots below the carousel
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides for partial visibility of adjacent slides
        slidesToScroll: 1,
        centerMode: true, // Keep the active slide in the center
        centerPadding: "0px", // No padding around the center slide
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // No arrows, only dots for navigation
      };
      

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO",
      image: image1,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      name: "Jane Doe",
      role: "CTO",
      image: image2,
      text: "Aliquet donec morbi convallis pretium eget cursus ut.",
    },
    {
      name: "Mark Smith",
      role: "Manager",
      image: image1,
      text: "Donec ultrices tincidunt arcu lorem ipsum dolor sit.",
    },
  ];

  // Helper function to limit text to 5 words
  const truncateText = (text) => {
    return text.split(" ").slice(0, 5).join(" ") + "...";
  };

  return (
    <div className="flex flex-col items-center py-16 ">
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
      </p>
      <Slider {...settings} className="w-full max-w-5xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide px-3">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center h-64 w-full"> {/* Fixed height */}
              {/* Image on the left */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-orange-500 mr-6"
              />
              {/* Text on the right */}
              <div className="flex flex-col text-left">
                <p className="text-gray-700 mb-4">{truncateText(testimonial.text)}</p>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
