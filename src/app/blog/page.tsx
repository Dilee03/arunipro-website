import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    title: "Tax Tips for International Students",
    excerpt: "Learn how to claim tuition credits and get your GST/HST refund.",
    date: "March 15, 2025",
    slug: "tax-tips-international-students",
  },
  {
    title: "Understanding Capital Gains in Canada",
    excerpt: "A guide to reporting capital gains and losses on your tax return.",
    date: "February 28, 2025",
    slug: "understanding-capital-gains",
  },
];

export default function Blog() {
  return (
    <>
      <PageHeader
        title="Tax Tips & Updates"
        description="Stay informed with the latest tax news and advice from our experts."
      />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{post.date}</p>
                  <p className="mt-3 text-gray-600">{post.excerpt}</p>
                  <div className="mt-4 inline-flex items-center text-primary text-sm font-medium">
                    Read more →
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}