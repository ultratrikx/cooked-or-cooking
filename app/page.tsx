import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        cooked or cooking? htn 24
      </h1>
      <p className="mb-4">
        {`are you cooked or are you cooking?? track your productivity and find out the results at the end of the event!! download the app today at:  `}
      </p>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter"  href="https://github.com/ultratrikx/are-you-cooked-/releases/tag/fr_release">
        https://github.com/ultratrikx/are-you-cooked-/releases/tag/fr_release
      </h1>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
