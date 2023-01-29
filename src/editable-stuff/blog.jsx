import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const blog1 = new BlogBuilder({
  title: "LARQ Website Clone",
  image: require("../assets/img/Larq.png"),
  description:
    "This blog is regarding the LARQ website cloning project built during construct week",
  bloglink:"https://medium.com/@binobajichiku/second-project-in-masai-5604bbfc6db9",   
});

const blog2 = new BlogBuilder({
  title: "EspnCricinfo Website Clone",
  image: require("../assets/img/Espn.png"),
  description:
    "This blog is regarding the ESPNCrickinfo website cloning project that I build along with four members of the team",
  bloglink:"https://medium.com/@binobajichiku/espncricinfo-clone-99b0fed2f638",  
})
  .addHeading("Heading")
  .addParagraph(
    "1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  )
  .addHeading("New Heading")
  .addParagraph(
    "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  );

//   const blog3 = new BlogBuilder({
//   title: "Jio-Mart Website Clone",
//   image: require("../assets/img/JioMart blog.png"),
//   description:
//     "This blog is regarding the Jio-Mart Website cloning project that I build along with four other members of the team",
//   bloglink:"https://medium.com/@charlesgalwyn/jiomart-clone-96e0b423f0d8", 
// });

//   const blog4 = new BlogBuilder({
//   title: "Dynamic Programming",
//   image: require("../assets/img/dynamic blog.png"),
//   description:
//     "This blog is regarding how Dynamic Programming can solve complex problems",
//   bloglink:"https://medium.com/@charlesgalwyn/how-dynamic-programming-can-help-solve-complex-problems-data-structures-algorithms-23fd9e8f23b1", 
// });

bloglist.push(blog1);
bloglist.push(blog2);
// bloglist.push(blog3);
// bloglist.push(blog4);

export default bloglist;
