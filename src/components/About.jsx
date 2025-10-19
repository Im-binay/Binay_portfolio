import profile from '../assets/images/aboutimage.JPG';

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
          I’m Binay Sharma, a UI/UX & Frontend Developer with a strong foundation in Figma, HTML, Tailwind CSS, and JavaScript. I design and develop intuitive, user-centered interfaces that blend clean aesthetics with functional performance. I believe good design is about simplifying complexity and creating experiences that feel natural, engaging, and meaningful to users.
          <span className="block mt-4">
            My process combines research, prototyping, and iterative testing to ensure each product is both visually appealing and highly usable. I’ve recently completed my final semester exams for a Bachelor’s in Computer Application (BCA) at Pokhara University, and I’m passionate about crafting seamless digital experiences while staying current with modern design and web trends.
          </span>
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
