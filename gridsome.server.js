// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = function(api) {

  var fs = require('fs');
  // var files = fs.readdirSync('./dist/assets/static/');

  
  // function getImagePath(startsWith) {

  //   for ( let i = 0 ; i <= files.length; i++ ) {
  //     if ( files[i].split(".")[0] == startsWith ) {
  //       console.log(files[i].split(".")[0], startsWith );
  //       return `/dist/asset/src/${files[i]}`
  //     } 
  //   }
        
  // }


  // console.log(files)

  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`  
    { 
      allPosts {
        edges {
          node {
            title
            slug
          }
        }
      } 
    }
    `)

    data.allPosts.edges.forEach(({ node }) => {
      createPage({
        path: `/posts/${node.slug}`,
        component: './src/pages/Posts.vue',
        context: {
          title: node.title
        }
      })
    })
  })
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`  
    {
      allCaseStudies {
        edges {
          node {
            title,
            scope,
            goal,
            slug,
            tldr,
            how,
            image,
            short_image,
            wireframes
          }
        }
      } 
    }
    `)

    data.allCaseStudies.edges.forEach(({ node }) => {
      createPage({
        path: `/case-studies/${node.slug}`,
        component: './src/templates/project.vue',
        context: {
          node
        }
      })
    })
  })
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`  
    {
      allServices {
        edges {
          node {
            service_headline
            service_content
          }
        }
      } 
    }
    `)

    // data.allServices.edges.forEach(({ node }) => {
    //   createPage({
    //     path: `/case-studies/${node.slug}`,
    //     component: './src/templates/project.vue',
    //     context: {
    //       node
    //     }
    //   })
    // })
  })
  // api.createPages(({ createPage }) => {
  //   //gridsome.server.js
  //   createPage({
  //     path: "/partners/ACL/",
  //     component: "./src/templates/project.vue",
  //     context: {
  //       banner: `
  //         background: linear-gradient(90deg, rgb(162, 0, 255) 6%, rgba(192, 0, 255, 1) 100%);
  //       `,
  //       mtitle: "Web Design, Web Development | Case Study (ACL)",
  //       title: "Belniak Media - ACL Staticide",
  //       scope: "Web Design &bull; Web Development",
  //       vimeo: `<div style="padding:58.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/379511081?autoplay=1&loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div`,
  //       tldr:
  //         "Belniak Media looked to us to provide them with design and development of ACL Staticide's new website. By leveraging Craft's powerful CMS (content management system) we were able to build them a fully functional website that allows them to create and edit their own content (including a blog). This was designed with Adobe XD, which allowed us to build a powerful interactive prototype.",
  //       goal:
  //         "Redesign ACL's website to optimize conversions and communicate their brand effectively.",
  //       how: `
  //       <p>
  //         First, we studied their existing site. What's working? What are the
  //         problems and what could we improve?
  //       </p>
  //       <ul>
  //         <li>
  //           ✔️ They know their audience. ACL has a great understanding of who is
  //           on their website, and why they're there.
  //         </li>
  //         <li>
  //           ✔️ Belniak Media has optimized ACL's Search Engine Results (SEO)
  //           significantly. They run appropriate and highly research driven
  //           advertisements.
  //         </li>
  //         <li>
  //           ❌ Poor content strategy. Their content was well written, but it
  //           didn't tell a story that drove interest and engagement.
  //         </li>
  //         <li>
  //           ❌ User Experience (UX). The ACL's Website needed fluidity. We
  //           implemented smooth animations, new high quality images,
  //           interactions, and optimal performance speed.
  //         </li>
  //         <li>
  //           ❌ Design Trends. The design was good when it was made 10 years ago.
  //           Web design today requires wide, responsive, fluid, and concise
  //           layouts.
  //         </li>
  //       </ul>`
  //     }
  //   });
  //   createPage({
  //     path: "/partners/Belniak-Media/",
  //     component: "./src/templates/project.vue",
  //     context: {
  //       mtitle: "Web Design, Web Development | Case Study (Belniak Media)",
  //       title: "Belniak Media",
  //       banner: `
  //       background: linear-gradient(90deg, rgba(245,217,0,1) 0%, rgba(255,64,0,1) 100%);

  //     `,
  //       scope: "Web Design &bull; Web Development",

  //       vimeo: `<div style="padding:58.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/381713346?autoplay=1&loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`,
  //       tldr:
  //         "Belniak Media is our sister company. We supply some of their graphic design, web design, and front end web development. They focus heavily on backend development, SEO, database management, and ecommerce. Moreover, they needed a total redesign of their website. Their site was built when SEO relied on heavily populated landing pages, but we know today that SEO a lot more complex than that. By creating a story from top to bottom, using concise content that engages the user, we were able to totally simplify their website and make it work for them. The site is being built with Craft 3 CMS (content management system) to allow Belniak to change their website copy, portfolio images, etc.",
  //       goal:
  //         "Redesign and repurpose their website so that there's more engangement and conversions. Build the site with a Content Management System, so they can easily update the website content.",
  //       how: `
  //       <p>
  //         First, we studied their existing site. What's working? What are the
  //         problems and what could we improve?
  //       </p>
  //       <ul>

  //         <li>
  //           ✔️ Belniak Media has outstanding SEO skills; they know what their doing and how to analyze their web analytics.
  //         </li>
  //         <li>
  //         ✔️ They know their audience. Belniak has a great understanding of who is
  //         on their website, and why they're there.
  //       </li>
  //       <li>
  //         ✔️ They provide quality results, which we can put on display. 
  //       </li>

  //         <li>
  //           ❌ Too many images. (Text inside images does more harm than good)
  //         </li>
  //         <li>
  //         ❌ Poor content strategy. Their content was well written, but it
  //         didn't tell a story that drove interest and engagement. 
  //         </li>
  //         <li>
  //           ❌ Conversion funnel needed optimization. The website wasn't doing enough to nudge users to convert.
  //         </li>
  //       </ul>
  //       <p>
  //          Next, since we knew what their website's issues were, we solved them one-by-one. 
  //       </p>  
  //       <p>
  //       Too many images? Which images are more important and why? We decided their portfolio should be the star of their website. So, we made sure their new website design had used images mainly to display their quality web development work. </p>
  //       <p>
  //       Poor contnet strategy? Well, they had great content, it just had to be repurposed. We took their content and made it engage their users by telling a story. We also made sure the content was more informative and educational.
  //       </p>
  //       <p>
  //           Lastly, we used our creative abilities to create a beautiful design. It's modern, works well with the story, and exemplifies their brand.
  //       </p>
  //       `
  //     }
  //   });
  //   createPage({
  //     path: "/partners/Benji/",
  //     component: "./src/templates/project.vue",
  //     context: {
  //       mtitle: "Artist Branding, Website | Case Study (Benji)",
  //       title: "Benji/6enji",
  //       banner: `
  //       background: linear-gradient(90deg, rgba(0,95,245,1) 0%, rgba(80,95,245,1) 100%);
  //       `,
  //       scope:
  //         "Branding &bull; Web Design &bull; Web Development &bull; Marketing",
  //       vimeo: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/381688384?autoplay=1&loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`,
  //       tldr:
  //         "Benji is an Artist out of Chicago, IL. He needed help branding himself as an artist; so we helped him out. First, we explored Benji's intrests and defining characterstics. What makes him unique as an artist? What's his message? Then, we applied our creativity to make him a Logo and define some brand attributes. Finally we put our visual brand identity together and began marketing his new brand on social media. We created him a website from scratch and now his fans can see all of his work or contact him directly for inquiries.",
  //       goal: "Define Benji's brand, design a website, and market his brand.",
  //       how: `
  //       Branding starts with research. You have to get to know the person or business, so that's what we did. We interviewed Benji extensively about his music and fanbase. Benji's music is full of emotion, his flow is melodic, and he's a creative person. We put these attributes together and began building a logo. Once we had a general idea of his brand, we looked at his contemporaries. What's working? We identified winners, and figured out why they were winning. The answer was honesty and strategy. Their message was honest. And their message was persistent through out their music. Their strategy was to release quality content and adjusting based on the results. Pivoting and reinventing your image when you need to. The way successful artists do this is that they are totally transparent about it all. The real magic is how we measure brand success, how we build brand awareness, and how we engage listeners. 
  //       `
  //     }
  //   });
  //   createPage({
  //     path: "/partners/American-Association-of-Individual-Investors/",
  //     component: "./src/templates/project.vue",
  //     context: {
  //       mtitle: "Company Web Development, Website Design | Case Study (AAII)",
  //       title: "AAII/American Association of Individual Investors",
  //       banner: `
  //       background: linear-gradient(90deg, rgba(0,95,245,1) 0%, rgba(80,95,245,1) 100%);
  //       `,
  //       imagePath: '/uploads/aaii.png',
  //       scope:
  //         "Web Design &bull; Web Development",
  //       tldr:
  //         "As a principal member of AAII's tech team, we were tasked with developing the front end of their website redesign.",
  //       goal: "Redesign and rebuild AAII's website.",
  //       how: `
  //       The American Association of Individual Investors (AAII) needed a fresh look for their website. We had to make sure that the design encompassed and communicated their services as an educational resource for investors. We were able to highlight their stock/ticker information, robust journal and article posts, featured writers, featured community, and featured videos. The site is fully responsive and works on any device.
  //       `
  //     }
  //   });
  //   createPage({
  //     path: "/partners/Stock-Superstars-Report/",
  //     component: "./src/templates/project.vue",
  //     context: {
  //       mtitle: "Company Web Development, Website Design | Case Study (SSR)",
  //       title: "SSR - Stock Superstars Report",
  //       banner: `
  //       background: linear-gradient(90deg, rgba(0,95,245,1) 0%, rgba(80,95,245,1) 100%);
  //       `,
  //       imagePath: '/uploads/ssr.png',
  //       scope:
  //         "Web Design &bull; Web Development",
  //       tldr:
  //         "SSR is an AAII product. We were tasked with redesigning and rebuilding a website that was over a decade old.",
  //       goal: "Redesign and rebuild the Stock Superstars Reports's website.",
  //       how: `
  //       SSR is an educational, portfolio-building publication that makes low risk and high returns a priority. The American Association of Individual Investors (AAII) offers SSR as a product/tool for their members. They needed a fresh look for a decade old website and we delivered a modern, colorful, and concise website design. We used lean frontend technology to optimize SEO and increase page speed. 
  //       `
  //     }
  //   });
  //   createPage({
  //     path: "/partners/Dedicated-Runners/",
  //     component: "./src/templates/project.vue",
  //     context: {
  //       mtitle: "Chicago Website Design | Case Study (Dedicated Runners)",
  //       title: "Dedicated Runners",
  //       banner: `
  //       background: linear-gradient(90deg, rgba(0,95,245,1) 0%, rgba(80,95,245,1) 100%);
  //       `,
  //       imagePath: getImagePath('dedicatedrunners'),

  //       scope:
  //         'Web Design &bull; Web Development &bull; Branding &bull; Click <a href="http://dedicatedrunners.net">here</a>  to view full site.',
  //       tldr:
  //         "Dedicated Runners are a logistics company from the Southwest side of Chicago.",
  //       goal: "Design and build a logistics company's website from scratch in 2 days.",
  //       how: `
  //        Dedicated Runners are a logistics company from Chicago, IL. We were tasked with designing and developing a full website in 2 days. We went to work and began researching logistics companies and began to learn how they exist online. We took notice of different website features, but mainly their offering of a broad range of services and a job application section. We also implemented a beautiful set of professional stock photos which we offer to our clients at no cost. 
  //       `
  //     }
  //   });
  // });
};
