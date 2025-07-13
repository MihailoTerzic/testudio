import React from 'react';
import { projectList } from '../projectlist';
import Image from 'next/image';
import Link from 'next/link';

export default function Grid() {
  return (
    <section className="py-20 px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Map over projectList properly */}
        {projectList.map((project, index) => (
            <Link href={project.link} key={index}>
            
          <div
            
            className="group relative rounded-lg overflow-hidden shadow-lg bg-gray-100"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="object-cover group-hover:scale-105 transition-transform duration-300 p-20"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">
                {project.title}
              </span>
            </div>
            <p className="px-4 py-2 relative z-10 font-light ">
              {project.title}
            </p>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
