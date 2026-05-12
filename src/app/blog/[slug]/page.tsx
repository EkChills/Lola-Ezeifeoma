import { blogPosts } from '@/data/blogData';
import BlogPost from '@/components/BlogPost';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const dynamic = 'force-static';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Omolola Ezeifeoma',
    };
  }

  return {
    title: `${post.title} | Omolola Ezeifeoma`,
    description: post.excerpt,
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navigation />
        <main style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Post Not Found</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
              The blog post you are looking for does not exist.
            </p>
            <a
              href="/#blog"
              style={{
                color: '#c9a96e',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Back to Blog
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main>
        <BlogPost post={post} />
      </main>
      <Footer />
    </>
  );
}