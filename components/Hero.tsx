import Image from "next/image";
import Link from "next/link";
import TypingAnimation from "./ui/typing-animation";
import InteractiveHoverButton from "./ui/interactive-hover-button";


export default function Hero() {
  return (
    <main className="w-screen h-screen relative">
      {/* Background Section */}
      <div
        className="flex items-center justify-center sm:justify-start w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/images/bg-port2.jpg)" }}
      >
        <div className="px-5 sm:pl-10 md:pl-20 pb-10 sm:pb-20 flex flex-col gap-5 z-[10] w-full max-w-[90%] sm:max-w-[750px] text-center sm:text-left">
          <h1 className="text-[20px] sm:text-[30px] md:text-[50px] text-white font-semibold leading-tight">
            <TypingAnimation className="text bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
              {`Hi,\nI am Shahzaib\nWeb Developer`}
            </TypingAnimation>
          </h1>
          <p className="text-gray-200 text-xs sm:text-sm md:text-base hidden sm:block">
            I am a passionate web developer with a strong focus on creating
            exceptional user experiences. With a keen eye for design and a
            deep understanding of web technologies, I strive to craft
            visually stunning and highly functional websites.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-3">
            <Link
              href="/my-skills"
            >
          
              <InteractiveHoverButton />
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] bg-transparent border border-white px-4 py-2 text-xs sm:text-sm md:text-lg text-white max-w-[150px] sm:max-w-[200px] text-center hover:bg-white hover:text-black"
            >
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] bg-transparent border border-white px-4 py-2 text-xs sm:text-sm md:text-lg text-white max-w-[150px] sm:max-w-[200px] text-center hover:bg-blue-500"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      <div className="absolute bottom-10 right-5 flex flex-col sm:hidden gap-3 z-[20]">
        <Link
          href="/my-skills"
          className="rounded-[20px] bg-blue-500 px-4 py-2 text-xs text-white max-w-[120px] text-center"
        >
          Learn more
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] border border-white px-4 py-2 text-xs text-white max-w-[120px] text-center"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] border border-white px-4 py-2 text-xs text-white hover:bg-blue-500 max-w-[120px] text-center"
        >
          Contact me
        </Link>
      </div>

      {/* Trees Background */}
      <div className="absolute bottom-0 z-[5] w-full">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-auto"
        />
      </div>

      {/* Stars */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Image
          src="/stars.png"
          alt="stars"
          width={2000}
          height={2000}
          className="opacity-50 object-cover"
        />
      </div>
    </main>
  );
}
