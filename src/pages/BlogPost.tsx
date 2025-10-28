import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import RelatedPosts from "@/components/RelatedPosts";
import { blogPosts } from "@/data/blogPosts";
import { Clock, Calendar, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pb-24 md:pb-0">
        <Header />
        <div className="container max-w-4xl py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
        <MobileCallBar />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Schema.org Article markup for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage,
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "First Class Construction Group",
      logo: {
        "@type": "ImageObject",
        url: "https://www.firstclassconstructionatlanta.com/assets/fcc-logo.png",
      },
    },
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Helmet>
        <title>{post.title} | First Class Construction Atlanta</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link
          rel="canonical"
          href={`https://www.firstclassconstructionatlanta.com/blog/${post.slug}`}
        />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.featuredImage} />
        <meta
          property="og:url"
          content={`https://www.firstclassconstructionatlanta.com/blog/${post.slug}`}
        />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Schema.org markup */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Header />

      {/* Breadcrumbs */}
      <nav className="bg-muted/30 border-b">
        <div className="container max-w-6xl py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link to="/blog" className="hover:text-accent transition-colors">
              Blog
            </Link>
            <span>›</span>
            <span className="text-foreground">{post.category}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article>
        <header className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container max-w-4xl">
            <AnimatedSection>
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min read
                </div>
                <span>•</span>
                <span>By {post.author}</span>
              </div>
            </AnimatedSection>
          </div>
        </header>

        {/* Featured Image */}
        <AnimatedSection delay={100}>
          <div className="container max-w-6xl mb-12">
            <div className="relative aspect-[21/9] rounded-lg overflow-hidden shadow-xl">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Article Content */}
        <AnimatedSection delay={200}>
          <div className="container max-w-4xl">
            <div
              className="prose prose-lg max-w-none mb-12 prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:mb-4 prose-ul:my-4 prose-li:my-2 prose-strong:font-semibold prose-a:text-accent hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
            />

            {/* CTA Box */}
            <div className="bg-accent text-accent-foreground rounded-lg p-8 text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg mb-6 opacity-90">
                Get a free consultation and detailed estimate from Atlanta's trusted contractors
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:678-671-6336">
                  <Button size="lg" variant="secondary" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Call 678-671-6336
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
                    Request Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Back to Blog */}
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </article>

      {/* Related Posts */}
      <RelatedPosts posts={blogPosts} currentSlug={post.slug} />

      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default BlogPost;
