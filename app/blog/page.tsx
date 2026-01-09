import { blogPosts } from "@/data/blog-posts.data";
import { siteCopy } from "@/data/content.data";

export default function BlogPage() {
  const copy = siteCopy.blog;

  return (
    <div className="space-y-8">
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">{copy.title}</h1>
        <p className="text-lg text-muted-foreground">{copy.subtitle}</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">
              {new Date(post.publishedOn).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase text-muted-foreground">
              {post.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
