import profile from '../assets/images/aboutimage.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center pb-10 px-4 md:px-0 bg-light text-dark transition-colors duration-300"
    >
      <div
        className="flex flex-col-reverse justify-around md:flex-row items-center gap-10 max-w-6xl mx-auto py-5"
        data-aos="fade-up"
      >
        <p className="text-justify w-full md:w-[45%] text-base mt-10 md:text-xl">
          I'm Binay Sharma — a Frontend Developer with a strong foundation in
          HTML, Tailwind CSS, JavaScript, and Figma. I specialize in crafting
          responsive, user-focused websites that balance clean design with
          optimal performance. Currently in my final semester of a Bachelor’s
          in Computer Application (BCA) at Pokhara University, I’m passionate
          about building seamless digital experiences and staying current with
          modern web trends and technologies.
        </p>
        <div
          className="w-full md:w-[30%] mt-10 bg-blue-50 rounded-2xl   perspective"
          data-aos="fade-up"
          style={{ perspective: '1000px' }}
        >
          <div className="transform-style preserve-3d transition-transform duration-500  cursor-pointer rounded-lg shadow-xl">
            <img
              src={profile}
              alt="Profile"
              className="object-cover h-full  w-full rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>


    </section>
  );
}
