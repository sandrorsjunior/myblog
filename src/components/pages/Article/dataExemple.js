export const dataContentOfArticleExemple = `
    <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
          className="card-img-top"
          alt="Article cover"
        />
        <div className="card-body">
          {/* Main Title */}
          <h1 className="card-title">
            Exploring the Future of Web Development
          </h1>
          <div className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>
            <strong>By John Doe</strong> | March 12, 2025
          </div>

          {/* Introduction */}
          <p className="card-text">
            The web development landscape is evolving rapidly, with new technologies and frameworks
            shaping the way we build applications. In this article, we’ll explore key trends and insights.
          </p>

          {/* Topic 1 */}
          <h2 className="mt-5">1. The Rise of JAMstack</h2>
          {tags(['JAMstack', 'Web Performance', 'SEO'])}
          <p>
            JAMstack (JavaScript, APIs, and Markup) is revolutionizing how we think about web architecture.
            By decoupling the frontend from the backend, developers can create blazing-fast and highly secure applications.
            Learn more about JAMstack on{' '}
            <a href="https://jamstack.org" target="_blank" rel="noopener noreferrer">
              jamstack.org
            </a>.
          </p>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
            alt="JAMstack Diagram"
            className="img-fluid my-3 rounded"
          />

          {/* Topic 2 */}
          <h2 className="mt-5">2. The Importance of Web Performance</h2>
          {tags(['Performance', 'Optimization', 'User Experience'])}
          <p>
            Web performance isn't just about speed; it's about creating an experience that keeps users engaged.
            According to Google,{' '}
            <a
              href="https://web.dev/vitals/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Core Web Vitals
            </a>{' '}
            are essential metrics to track.
          </p>
          <Bar data={chartData} options={chartOptions} className="my-4" />

          {/* Topic 3 */}
          <h2 className="mt-5">3. Accessibility Matters</h2>
          {tags(['Accessibility', 'Inclusive Design', 'WCAG'])}
          <p>
            Creating accessible websites ensures inclusivity for everyone. Follow the{' '}
            <a
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WCAG guidelines
            </a>{' '}
            to improve your site’s accessibility.
          </p>
          <img
            src="https://images.unsplash.com/photo-1612831455549-8f01e418f9c4?auto=format&fit=crop&w=1200&q=80"
            alt="Accessibility Checklist"
            className="img-fluid my-3 rounded"
          />

          {/* Highlighted quote */}
          <blockquote className="blockquote my-4 p-3 bg-light border-start border-4 border-primary">
            <p>
              "Accessibility is not a feature, it’s a necessity. Inclusive design leads to better
              experiences for everyone."
            </p>
          </blockquote>

          {/* Conclusion */}
          <h2 className="mt-5">Conclusion</h2>
          {tags(['Future', 'Best Practices', 'Innovation'])}
          <p>
            Web development continues to advance, offering new opportunities and challenges. By staying
            informed and embracing best practices, we can build better, faster, and more inclusive web
            applications for the future.
          </p>

          <p>
            Feel free to connect with me on{' '}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{' '}
            or check out more articles on{' '}
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>.
          </p>
        </div>
`