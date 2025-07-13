// Carl Beaverson portfolio clone (Next.js + Tailwind)

// 1. Basic Next.js project structure
// Let's start with the homepage layout.

// pages/index.tsx

import Head from 'next/head';
import Image from 'next/image';
import Grid from './components/grid';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className=" min-h-screen font-sans">
      <Head>
        <title>Carl Beaverson Clone</title>
        <meta name="description" content="Portfolio clone using Next.js and Tailwind CSS" />
      </Head>

      {/* Hero Section */}
      <header className="flex items-center justify-center h-[40vh] text-center px-4">
        <div className='max-w-3xl mx-auto px-6'>
          
          <p className="text-xl md:text-2xl text-gray-400">TE Studio is a creative development and design studio that expands your digital presence. Based in Serbia and working with clients worldwide, we build websites using our custom templates or entirely from scratch — depending on your needs.</p>
        </div>
      </header>

      {/* Projects Section */}
     <Grid/>
      {/* Contact Section */}
      <div className="flex items-center justify-center py-20 text-center px-4">
        <div className='max-w-3xl mx-auto px-6'>
          <p className="text-xl md:text-2xl text-gray-400">
            If you are looking for an in-depth audit of your existing website or need guidance on a new project, we are here to help. Get in touch to discuss how we can improve your online presence.
           </p>
           
        </div>
        
      </div>
<a
  href="mailto:webstudio.te@gmail.com"
  className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition"
>
  Email Us
</a>
     <Footer/>
    </div>
  );
}
