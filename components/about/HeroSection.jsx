import { Link } from "react-router-dom";
import Button from "../Button";
import photo1 from "../../assets/about1.jpg";
import photo2 from "../../assets/about2.jpg";
import photo3 from "../../assets/about3.jpg";

function HeroSection() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
      <div className="flex flex-col items-center justify-between gap-[20px] md:flex-row">
        <div className="w-full text-center  text-lg font-bold md:w-[50%] md:text-left">
          <p className="text-yellow">Wellome</p>
          <h1 className="text-4xl">
            Best Burger Ideas & Traditions from Around the World
          </h1>
          <p className="my-[10px] text-lightGray">
            Discover the rich flavors and traditions that make burgers a beloved
            dish worldwide. From the classic American cheeseburger to gourmet
            creations with unique toppings, explore how different cultures have
            embraced this iconic food in their own delicious ways.
          </p>
          <p className="my-[30px] text-lightGray">
            Whether you're a fan of juicy beef patties, veggie options, or
            international twists, there’s a burger out there for everyone. Join
            us as we dive into the history and evolution of burgers, showcasing
            the creativity and passion behind this timeless favorite.
          </p>

          <Link to={"/menu"}>
            <Button>Order Now</Button>
          </Link>
        </div>
        <div className="flex  w-full items-start gap-[10px] text-lg font-bold md:w-[50%] ">
          <img src={photo1} alt="about us" className="w-[50%] rounded-xl" />
          <div className="flex w-[50%] flex-col gap-[10px]">
            <img src={photo2} alt="about us" className="rounded-xl" />
            <img src={photo3} alt="about us" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
