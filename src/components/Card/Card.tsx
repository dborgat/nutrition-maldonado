import Image from "next/image";
import type { StaticImageData } from "next/image";
const Card = ({ title, info, path, src }: { title: string, info: string, path: string, src: { href: StaticImageData, alt: string } }) => {
  return (
    <div className='block rounded-3xl bg-white shadow-xl dark:bg-neutral-700 text-center max-w-xs flex flex-col'>
      <div className='p-6'>
        <Image src={src.href} alt={src.alt} width={120} height={120} />
        <h5 className='my-3 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50'>
          {title}
        </h5>
        <p className='my-3 text-base text-neutral-500 dark:text-neutral-300'>
          {info}
        </p>
        <a
          href={path}
          className='mt-3 inline-block cardBlured rounded-full font-medium leading-normal transition duration-150 ease-in-out hover:bg-primary focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
        >
          Mas info
        </a>
      </div>
    </div>
  );
};

export default Card;