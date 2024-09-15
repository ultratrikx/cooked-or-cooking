import React from 'react';
import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        cooked or cooking? htn 24
      </h1>
      <p className="mb-4">
        {`are you cooked or are you cooking?? track your productivity and find out the results at the end of the event!! download the app today:`}
      </p>
      <a 
        href="https://github.com/ultratrikx/are-you-cooked-/releases/tag/fr_release"
        className="inline-block px-4 py-2 mb-8 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download App
      </a>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
