import styles from "./SemanticResponsivity.module.css";
function SemanticResponsivity() {
  return (
    <div className={styles.main}>

      <section className={styles.centralBanners}>
        <h1 className={styles.mainTitle}>          
          How semantic HTML, CSS Flex box and Grid layout Work?
        </h1>
        <img src="../assets/articleImages/html5-and-css3-banner.png" alt="logo HTMl and CSS" className={styles.img}></img>        
      </section>

      <article id="introduction-content">
        <h1 className={styles.mainTitle}>A little bit of the history</h1>

        <p>
          Try to imagine how it was a few years ago when companies that wanted
          to share documents among themselves, or among their own employees, did
          not have the possibility of doing this in a quick and practical way as
          today, where with just one click we can do all this transport. For
          them, it was necessary to use other tools that demanded much more
          time. So, in 1991, <strong>Tim Berners-Lee</strong> had a great idea
          that would not only facilitate the daily life of companies, but would
          change the world: he designed HTML.
          <br></br>
        </p>

        <p>
          This markup language, therefore, had been developed to enable the
          sharing of documents in a more convenient way. However, in the
          following year the <strong>World Wide Web (WWW)</strong> was created,
          a network of worldwide reach, making HTML a tool used for everything
          and by everyone.
          <br></br>
        </p>

        <p>
          CSS emerged as a consequence of this great growth of HTML. The more
          HTML was used, the more developers used their creativity to make their
          pages look beautiful and stylish. However, all this aesthetic part was
          written in the same file as the structural part, making them gigantic
          and more and more difficult to understand. Thus, in 1995, CSS was
          created to take care of the aesthetic part of the page, separately
          from the structure, the role of HTML.
        </p>
      </article>

      <article className={styles.htmlContent}>
        <img src="../assets/articleImages/logohtml.png" alt="Logo" height="250px"
          width="250px" className={styles.htmlContent}></img>

        <p>
          Its name comes from <strong>"Hyper Text Markup Language</strong>
          What do you mean by "markup language"? Well, <strong>HTML</strong> is
          not considered a programming language like the others and you will
          soon find out why. Imagine a web page, like the one you are reading
          right now. You can see that there are several separate elements, such
          as headline, title, paragraphs, images and many others. All the
          organization of these elements is made by the HTML. It is used to
          create the whole structure of the page and, for that, it uses the
          famous tags (labels) to signal where each type of element will be
          implemented.
        </p>
      </article>

      <article className={styles.cssContent}>
        <p>
          <strong>CSS</strong> is called the{" "}
          <strong>Cascading Style Sheet</strong> language and is used to style
          elements written in a markup language like HTML. CSS separates the
          content from the visual representation of the site. Think about your
          page decor. Using CSS it is possible to change the text and background
          color, font and spacing between paragraphs. You can also create
          tables, use layout variations, adjust images for their respective
          screens, and so on.
          <br></br>
          <br></br>
          CSS was developed by the W3C (World Wide Web Consortium) in 1996 for a
          very simple reason. HTML was not designed to have tags that would help
          format the page. You should just write the markup for the site.
          <br></br>
        </p>
        <img
          id="logoCSS"
          src="../assets/articleImages/CSS-3-logo-vector-01.svg"
          alt="LogCss"
          height="250px"
          width="250px"
        ></img>
      </article>

      <article className={styles.centralBanners}>       
        
        <img id="imgTec" src="../assets/articleImages/semantic.jpg" alt="ilustration html semantic" width="642" height="321" className={styles.img}></img>
        
        <p>
          Semantic means "relating to meaning". Writing semantic HTML means
          using HTML elements to structure your content based on each element's
          meaning, not its appearance. We should use it for several reasons: for
          example as a developer, besides setting a standard it is a good
          practice that characterizes good professionals. That old story, what
          can be easily understood by you, can be well understood by any
          developer. It also makes it easier for accessibility devices in
          general to read content and interpret any text as it really should be.
          Search engines also rank websites according to their tags. The more
          semantics is applied to a text on the web, the more likely this text
          is to be ranked as relevant.
        </p>
      </article>

      <article className={styles.centralBanners}>
        <img
          id="imgGrid"
          src="../assets/articleImages/css-gridlayout.png"
          alt="describing a Grid Layout"
          width="642" height="321"
          className={styles.img}
        ></img>

        <p>
          
          Grid-based design is fundamental to website development, and
          <strong>CSS GRID</strong> is the easiest and most powerful tool we
          have available at the moment. Basically structuring the layout in a
          table concept where you can easily create a layout usually used for
          multi dimensional solutions.
          <br></br>

          <strong>Six key concepts:</strong> Grid, Grid Lines, Grid Tracks, Grid
          Cell, Grid Gradiant, Grid Area .
        </p>
        
        <p>         
          <h2 className={styles.mainTitle}>All CSS Grid Properties</h2>
        </p>

        <table className={styles.table}>
          <thead>
            <th>Property</th>
            <th>Description</th>
          </thead>
          <tbody>
            <tr>
              <td>column-gap</td>
              <td>Specifies the gap between the columns</td>
            </tr>
            <tr>
              <td>gap</td>
              <td>
                A shorthand property for the row-gap and the column-gap
                properties
              </td>
            </tr>
            <tr>
              <td>grid</td>
              <td>
                {" "}
                A shorthand property for the grid-template-rows,
                grid-template-columns, grid-template-areas, grid-auto-rows,
                grid-auto-columns, and the grid-auto-flow properties
              </td>
            </tr>
            <tr>
              <td>grid-area</td>
              <td>
                {" "}
                Either specifies a name for the grid item, or this property is a
                shorthand property for the grid-row-start, grid-column-start,
                grid-row-end, and grid-column-end properties
              </td>
            </tr>
            <tr>
              <td>grid-auto-columns</td>
              <td>Specifies a default column size</td>
            </tr>
            <tr>
              <td>grid-auto-flow</td>
              <td>Specifies how auto-placed items are inserted in the grid</td>
            </tr>
            <tr>
              <td>grid-auto-rows</td>
              <td>Specifies a default row size</td>
            </tr>
            <tr>
              <td>grid-column</td>
              <td>
                {" "}
                A shorthand property for the grid-column-start and the
                grid-column-end properties
              </td>
            </tr>
            <tr>
              <td>grid-column-end</td>
              <td> Specifies where to end the grid item</td>
            </tr>
            <tr>
              <td>grid-column-gap</td>
              <td> Specifies the size of the gap between columns</td>
            </tr>
            <tr>
              <td>grid-column-start</td>
              <td>Specifies where to start the grid item</td>
            </tr>
            <tr>
              <td>grid-gap</td>
              <td>
                A shorthand property for the grid-row-gap and grid-column-gap
                properties
              </td>
            </tr>
            <tr>
              <td>grid-row</td>
              <td>
                A shorthand property for the grid-row-start and the grid-row-end
                properties
              </td>
            </tr>
            <tr>
              <td>grid-row-end</td>
              <td>Specifies where to end the grid item</td>
            </tr>
            <tr>
              <td>grid-row-gap</td>
              <td>Specifies the size of the gap between rows</td>
            </tr>
            <tr>
              <td>grid-row-start</td>
              <td>Specifies where to start the grid item</td>
            </tr>
            <tr>
              <td>grid-template</td>
              <td>
                A shorthand property for the grid-template-rows,
                grid-template-columns and grid-areas properties
              </td>
            </tr>
            <tr>
              <td>grid-template-areas</td>
              <td>
                Specifies how to display columns and rows, using named grid
                items
              </td>
            </tr>
            <tr>
              <td>grid-template-columns</td>
              <td>
                {" "}
                Specifies the size of the columns, and how many columns in a
                grid layout
              </td>
            </tr>
            <tr>
              <td>grid-template-rows</td>
              <td>Specifies the size of the rows in a grid layout</td>
            </tr>
            <tr>
              <td>row-gap</td>
              <td>Specifies the gap between the grid rows</td>
            </tr>
          </tbody>
        </table>
      </article>

      <section className={styles.centralBanners}>
        <img className={styles.img}         
          src="../assets/articleImages/flexbox.jpg"
          alt="ilustrating flexbox"
          width="642" height="321"
          
        ></img>

        <p>
          The <strong>Flexbox is a CSS3 concept</strong> that aims to
          dynamically organize the elements of an HTML page within its
          containers. That is, regardless of their dimensions, they will always
          maintain a flexible layout within their main element, rearranging
          themselves as needed. Thus very efficient and used for responsiveness
          and normally used for one dimensional layouts.
        </p>
      </section>
      <article>
        <p>
          <h2 className={styles.mainTitle}>The CSS Flexbox Container Properties</h2>
        </p>

        <table className={styles.table}>
          <thead>
            <th>Property</th>
            <th>Description</th>
          </thead>
          <tbody>
            <tr>
              <td>align-content</td>
              <td>
                {" "}
                Modifies the behavior of the flex-wrap property. It is similar
                to align-items, but instead of aligning flex items, it aligns
                flex lines
              </td>
            </tr>
            <tr>
              <td>align-items</td>
              <td>
                {" "}
                Vertically aligns the flex items when the items do not use all
                available space on the cross-axis
              </td>
            </tr>
            <tr>
              <td>display</td>
              <td>Specifies the type of box used for an HTML element</td>
            </tr>
            <tr>
              <td>flex-direction</td>
              <td>
                Specifies the direction of the flexible items inside a flex
                container
              </td>
            </tr>
            <tr>
              <td>flex-flow</td>
              <td>A shorthand property for flex-direction and flex-wrap</td>
            </tr>
            <tr>
              <td>flex-wrap</td>
              <td>
                Specifies whether the flex items should wrap or not, if there is
                not enough room for them on one flex line
              </td>
            </tr>
            <tr>
              <td>justify-content</td>
              <td>
                Horizontally aligns the flex items when the items do not use all
                available space on the main-axis
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <h2 className={styles.mainTitle}>The CSS Flexbox Items Properties</h2>
        </p>

        <table className={styles.table}>
          <thead>
            <th>Property</th>
            <th>Description</th>
          </thead>
          <tbody>
            <tr>
              <td>align-self</td>
              <td>
                {" "}
                Specifies the alignment for a flex item (overrides the flex
                container's align-items property)
              </td>
            </tr>
            <tr>
              <td>flex</td>
              <td>
                {" "}
                A shorthand property for the flex-grow, flex-shrink, and the
                flex-basis properties
              </td>
            </tr>
            <tr>
              <td>flex-basis</td>
              <td>Specifies the initial length of a flex item</td>
            </tr>
            <tr>
              <td>flex-grow</td>
              <td>
                Specifies how much a flex item will grow relative to the rest of
                the flex items inside the same container
              </td>
            </tr>
            <tr>
              <td>flex-shrink</td>
              <td>
                Specifies how much a flex item will shrink relative to the rest
                of the flex items inside the same container
              </td>
            </tr>
            <tr>
              <td>order</td>
              <td>
                Specifies the order of the flex items inside the same container
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  );
}

export default SemanticResponsivity;
