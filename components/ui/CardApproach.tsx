"use client";
import { cn } from "@/utils/cn";

export function CardDemo({ title, text, image }: { title: string, text: string, image: string }) {
  //console.log(`"${image}"`);
  return (
    <div className="max-w-xs w-full">
      {/* <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          `bg-[url("${image}")] bg-cover`,
          // Preload hover image by setting it in a pseudo-element
          `before:bg-[url("${image}")] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
          `hover:bg-[url("${image}")]`,
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text flex flex-col gap-2 items-center">
          <h1 className="font-bold text-xl text-center md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          <p className="font-normal text-base text-center text-gray-50 relative my-4">
            {text}
          </p>
        </div>
      </div> */}
    </div>
  );
}
