// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(({ createPage }) => {
    //gridsome.server.js
    createPage({
      path: "/partners/ACL/",
      component: "./src/templates/project.vue",
      context: {
        banner: `
          background: linear-gradient(90deg, rgb(162, 0, 255) 6%, rgba(192, 0, 255, 1) 100%);
        `,
        title: "Belniak Media - ACL Staticide",
        scope: "Web Design &bull; Web Development",
        vimeo: `<div style="padding:58.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/379511081?autoplay=1&loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div`,
        tldr:
          "Belniak Media looked to us to provide them with design and development of ACL Staticide's new website. By leveraging Craft's powerful CMS (content management system) we were able to build them a fully functional website that allows them to create and edit their own content (including a blog). This was designed with Adobe XD, which allowed us to build a powerful interactive prototype.",
        goal:
          "Redesign ACL's website to optimize conversions and communicate their brand effectively.",
        how: `
        <p>
          First, we studied their existing site. What's working? What are the
          problems and what could we improve?
        </p>
        <ul>
          <li>
            ✔️ They know their audience. ACL has a great understanding of who is
            on their website, and why they're there.
          </li>
          <li>
            ✔️ Belniak Media has optimized ACL's Search Engine Results (SEO)
            significantly. They run appropriate and highly research driven
            advertisements.
          </li>
          <li>
            ❌ Poor content strategy. Their content was well written, but it
            didn't tell a story that drove interest and engagement.
          </li>
          <li>
            ❌ User Experience (UX). The ACL's Website needed fluidity. We
            implemented smooth animations, new high quality images,
            interactions, and optimal performance speed.
          </li>
          <li>
            ❌ Design Trends. The design was good when it was made 10 years ago.
            Web design today requires wide, responsive, fluid, and concise
            layouts.
          </li>
        </ul>`
      }
    });
    createPage({
      path: "/partners/Belniak-Media/",
      component: "./src/templates/project.vue",
      context: {
        title: "Belniak Media",
        banner: `
        background: linear-gradient(90deg, rgba(245,217,0,1) 0%, rgba(255,64,0,1) 100%);

      `,
        scope: "Web Design &bull; Web Development",

        vimeo: `<div style="padding:58.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/381713346?autoplay=1&loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`,
        tldr:
          "Belniak Media is our sister company. We supply some of their graphic design, web design, and front end web development. They focus heavily on backend development, SEO, database management, and ecommerce. Moreover, they needed a total redesign of their website. Their site was built when SEO relied on heavily populated landing pages, but we know today that SEO a lot more complex than that. By creating a story from top to bottom, using concise content that engages the user, we were able to totally simplify their website and make it work for them. The site is being built with Craft 3 CMS (content management system) to allow Belniak to change their website copy, portfolio images, etc.",
        goal:
          "Redesign and repurpose their website so that there's more engangement and conversions. Build the site with a Content Management System, so they can easily update the website content.",
        how: `
        <p>
          First, we studied their existing site. What's working? What are the
          problems and what could we improve?
        </p>
        <ul>

          <li>
            ✔️ Belniak Media has outstanding SEO skills; they know what their doing and how to analyze their web analytics.
          </li>
          <li>
          ✔️ They know their audience. Belniak has a great understanding of who is
          on their website, and why they're there.
        </li>
        <li>
          ✔️ They provide quality results, which we can put on display. 
        </li>

          <li>
            ❌ Too many images. (Text inside images does more harm than good)
          </li>
          <li>
          ❌ Poor content strategy. Their content was well written, but it
          didn't tell a story that drove interest and engagement. 
          </li>
          <li>
            ❌ Conversion funnel needed optimization. The website wasn't doing enough to nudge users to convert.
          </li>
        </ul>
        <p>
           Next, since we knew what their website's issues were, we solved them one-by-one. 
        </p>  
        <p>
        Too many images? Which images are more important and why? We decided their portfolio should be the star of their website. So, we made sure their new website design had used images mainly to display their quality web development work. </p>
        <p>
        Poor contnet strategy? Well, they had great content, it just had to be repurposed. We took their content and made it engage their users by telling a story. We also made sure the content was more informative and educational.
        </p>
        <p>
            Lastly, we used our creative abilities to create a beautiful design. It's modern, works well with the story, and exemplifies their brand.
        </p>
        `
      }
    });
    createPage({
      path: "/partners/Benji/",
      component: "./src/templates/project.vue",
      context: {
        title: "Benji/6enji",
        banner: `
        background: linear-gradient(90deg, rgba(0,95,245,1) 0%, rgba(2,15,128,1) 100%);
        `,
        scope:
          "Branding &bull; Web Design &bull; Web Development &bull; Marketing",
        vimeo: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/381688384?autoplay=1&loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`,
        tldr:
          "Benji is an Artist out of Chicago, IL. He needed help branding himself as an artist; so we helped him out. First, we explored Benji's intrests and defining characterstics. What makes him unique as an artist? What's his message? Then, we applied our creativity to make him a Logo and define some brand attributes. Finally we put our visual brand identity together and began marketing his new brand on social media. We created him a website from scratch and now his fans can see all of his work or contact him directly for inquiries.",
        goal: "Define Benji's brand, design a website, and market his brand.",
        how: `
        Branding starts with research. You have to get to know the person or business, so that's what we did. We interviewed Benji extensively about his music and fanbase. Benji's music is full of emotion, his flow is melodic, and he's a creative person. We put these attributes together and began building a logo. Once we had a general idea of his brand, we looked at his contemporaries. What's working? We identified winners, and figured out why they were winning. The answer was honesty and strategy. Their message was honest. And their message was persistent through out their music. Their strategy was to release quality content and adjusting based on the results. Pivoting and reinventing your image when you need to. The way successful artists do this is that they are totally transparent about it all. The real magic is how we measure brand success, how we build brand awareness, and how we engage listeners. 
        `
      }
    });
  });
};
