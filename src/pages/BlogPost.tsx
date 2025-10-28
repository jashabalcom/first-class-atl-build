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
import BlogContentRenderer from "@/components/blog/BlogContentRenderer";
import ReadingProgress from "@/components/blog/ReadingProgress";

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
    <>
      <ReadingProgress />
      <div className="min-h-screen pb-24 md:pb-0 bg-[hsl(var(--editorial-cream))]">
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
      <nav className="bg-card/50 border-b border-[hsl(var(--editorial-border))]">
        <div className="container max-w-7xl py-3">
          <div className="flex items-center gap-2 font-inter text-xs uppercase tracking-wider text-muted-foreground">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span className="text-[hsl(var(--editorial-border))]">•</span>
            <Link to="/blog" className="hover:text-accent transition-colors">
              Blog
            </Link>
            <span className="text-[hsl(var(--editorial-border))]">•</span>
            <span className="text-foreground">{post.category}</span>
          </div>
        </div>
      </nav>

      {/* Article Header - Magazine Style */}
      <article>
        <header className="py-16 md:py-20 bg-card/30">
          <div className="container max-w-4xl">
            <AnimatedSection>
              <div className="text-center">
                <span className="font-inter text-xs uppercase tracking-[0.2em] text-accent font-medium">
                  {post.category}
                </span>
                <h1 className="font-playfair text-5xl md:text-7xl font-bold mt-6 mb-8 leading-[1.1] text-balance">
                  {post.title}
                </h1>
                <p className="font-cormorant text-2xl md:text-3xl text-muted-foreground/80 mb-8 leading-[1.5] max-w-3xl mx-auto font-light">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-4 font-inter text-xs uppercase tracking-wider text-muted-foreground">
                  <time dateTime={post.publishDate} className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(post.publishDate)}
                  </time>
                  <span className="text-[hsl(var(--editorial-border))]">•</span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime} min read
                  </span>
                  <span className="text-[hsl(var(--editorial-border))]">•</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </header>

        {/* Featured Image - Full Bleed Editorial Style */}
        <AnimatedSection delay={100}>
          <div className="container max-w-7xl mb-16">
            <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Article Content - Magazine Typography */}
        <AnimatedSection delay={200}>
          <div className="container max-w-4xl px-6">
            {/* Lead paragraph styling via content renderer */}
            <div className="mb-16">
              <BlogContentRenderer content={post.content} />
            </div>

            {/* Elegant CTA Box */}
            <div className="bg-card/50 border-2 border-accent/20 rounded-sm p-10 text-center mb-16">
              <h3 className="font-playfair text-3xl font-semibold mb-4 text-foreground">
                Ready to Start Your Project?
              </h3>
              <p className="font-cormorant text-xl text-muted-foreground mb-8 leading-relaxed">
                Get a free consultation and detailed estimate from Atlanta's trusted contractors
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:678-671-6336">
                  <Button 
                    size="lg" 
                    className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-inter tracking-wide"
                  >
                    <Phone className="h-5 w-5" />
                    Call 678-671-6336
                  </Button>
                </a>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-inter tracking-wide"
                  >
                    Request Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Tags - Magazine Style */}
            <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-[hsl(var(--editorial-border))]">
              {post.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="font-inter text-xs uppercase tracking-wider border-[hsl(var(--editorial-border))] hover:border-accent hover:text-accent transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Back to Blog - Editorial Style */}
            <Link to="/blog">
              <Button 
                variant="ghost" 
                className="gap-2 font-inter uppercase tracking-wider text-sm hover:text-accent"
              >
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
    </>
  );
};

export default BlogPost;
