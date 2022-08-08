---
layout:     page-no-nav
title:      Content Editing
published:  true
date:       2021-12-20
modified:   2022-07-18
sitemap:    false
noindex:    true
---

Markdown documents (file extension ***.md***) are simple text files with additional special syntax that you can use to style your content, embed images, or create links. 

These documents are interpreted, this means that **what you write is not exactly what will appear** on the website, for this reason, it is recommended to use the VSCode preview pane to see the final result while editing.

See the full guide: [Contributing](contributing.md)

### Header

Every file must contain a header in the following format (note that the ***\-\-\-*** lines are required):

    ---
    layout:             page
    title:              Document title
    menu_title:         Document title in menu
    next_title:         Document title in Next Reading section
    published:          true
    draft:              false
    date:               2021-11-15
    modified:   	    2022-07-20
    order:              /01/02/document-title
    toc:                true
    version:            2.0
    available:          Availability note
    premium:            /01/premium.md
    internal:           Internal reference (not displayed)
    next_reading:       false
    next_reading_title: Next Reading
    related:        
        - page-1.md
        - page-2.md, 
        - /folder/page-3.md
    related_title:      Related Pages
    ---

Options:

- **layout:** always set the value ***page***.
- **title:** set the title of the document.
- **menu_title:** (optional) set a title for the navigation menu, if you want to make it different from the main title.
- **next_title:** (optional) set a title for the ***Next Reading*** section of the pages, if you want to make it different from the main title.
- **published:** set ***true*** to display the document on the website 
- **draft:** (optional) set ***true*** to show a notice that the document is not completed (note that this notice appears automatically if the document is empty or if it contains &lt;todo&gt;&lt;/todo&gt; tag. Set ***"no"*** to never show the notice.
- **date:** set the creation date of the document.
- **modified:** set the date of the last modification of the document.
- **order:** set a string to be used to sort the document in the navigation menu - check existing files to know how sorting works. In general, if the page is the child of a node, it is necessary to insert the order attribute of the parent node plus a slash ***/*** and a number (if you want to give a static position) or a sanitized version of the title (without spaces and special characters - if you want to use alphabetical sorting). Note that numbers come  before letters (as they are placed before in the ASCII table); if you want that they are placed after letters, you need to enclose them in curly braces: e.g. ***zzz*** is after ***01*** but before ***{01}***.
- **toc:** (optional) set ***false*** to hide the automatic table of contents.
- **version:** (optional) used only with visual options - set the version of the visual when the option was introduced. You can manually place this information in a different place using the [badge syntax](#available-badge).
- **available:** (optional) used only with visual options - set the mode(s) in which the option is available. Setting this attribute will display an indicator under the document title. You can manually place this information in a different place using the [badge syntax](#available-badge).
- **premium:** (optional) used to say that the argument of the page is relevant to premium users only. Set **true** to just show a badge or enter a file path to also add a link to the specified page - **../** is not supported. You can manually place this information in a different place using the [badge syntax](#available-badge).
- **internal:** (optional) used to define some internal reference, useful for maintenance - not displayed on the website.
- **next_reading:** (optional) set **true** to show the ***Next Reading*** section at the end of the page. Note there is also a [special template tag](#next-reading) you can use to obtain the same result, useful if you need to place it on a different position.
- **next_reading_title:** (optional) set a custom title for the ***Next Reading*** section. Default is: "Next Reading".
- **related:** (optional) define a list of pages related to this one; you can use URLs relative to the _docs root (they must start with a slash) or relative to the same parent path (no slashes at the beginnig) - **../** is not supported. At the bottom of the page will be displayed a section like ***Next Reading***. If defined, the **next_reading** option will be ignored.
- **related_title:** (optional) set a custom title for the related section. Default is: "Related Pages"

### Body

Here is a common list of elements you may want to use in your documents. For the full syntax, check out this [external guide](https://www.markdownguide.org/basic-syntax/)

#### Title

Use titles to separate sections of the document. The table of content is automatically created using the structure you define with titles.

> Note that **Title 1** is used as the main title of the document - don't use it.

<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>## Title 2</pre>
        </td>
        <td>
            <h2 class="no_toc">Title 2</h2>
        </td>
    </tr>
    <tr>
        <td>
            <pre>### Title 3</pre>
        </td>
        <td>
            <h3 class="no_toc">Title 3</h3>
        </td>
    </tr>
    <tr>
        <td>
            <pre>#### Title 4</pre>
        </td>
        <td>
            <h4 class="no_toc">Title 4</h4>
        </td>
    </tr>
    <tr>
        <td>
            <pre>##### Title 5</pre>
        </td>
        <td>
            <h5 class="no_toc">Title 5</h5>
        </td>
    </tr>
    <tr>
        <td>
            <pre>###### Title 6</pre>
        </td>
        <td>
            <h6 class="no_toc">Title 6</h6>
        </td>
    </tr>
</table>


#### Paragraph

Define paragraphs by inserting a blank line between them.

<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>This line is in paragraph 1.

This line is in paragraph 2.</pre>
        </td>
        <td>
            <p>This line is in paragraph 1.</p>
            <p>This line is in paragraph 2.</p>
        </td>
    </tr>
</table>

#### Carriage Return

Put at least two spaces after the end of a line and a carriage return, otherwise the carriage return alone will be ignored.

<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>This line is in line 1.  (two spaces here)
This line is in line 2.</pre>
        </td>
        <td>
            This line is in line 1.<br>
            This line is in line 2.
        </td>
    </tr>
</table>

#### Bold


<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>This text is **bold**.</pre>
        </td>
        <td>
            This text is <strong>bold</strong>.
        </td>
    </tr>
</table>

#### Italic

<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>This text is *italic*.</pre>
        </td>
        <td>
            This text is <em>italic</em>.
        </td>
    </tr>
</table>

#### Bold Italic

<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>This text is ***bold italic***.</pre>
        </td>
        <td>
            This text is <strong><em>bold italic</em></strong>.
        </td>
    </tr>
</table>


#### Unordered List
<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
<pre>
- Item A
- Item B
- Item C
</pre>
        </td>
        <td>
            <ul>
                <li>Item A</li>
                <li>Item B</li>
                <li>Item C</li>
            </ul>
        </td>
    </tr>
</table>

#### Ordered List

<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
<pre>
1. Item 1
2. Item 2
3. Item 3
</pre>
        </td>
        <td>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        </td>
    </tr>
</table>

#### Table

<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
<pre>
| Column A | Column B |
| --- | --- |
| Value 1A | Value 1B |
| Value 2A | Value 2B |
</pre>
        </td>
        <td>
            
            <table>  
                <thead>  
                    <tr>
                        <th>Column A</th>
                        <th>Column B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Value 1A</td>
                        <td>Value 1B</td>
                    </tr>
                    <tr>
                        <td>Value 2A</td>
                        <td>Value 2B</td>
                    </tr>
                </tbody>
            </table>

        </td>
    </tr>
</table>

#### Notice

<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>> Use this syntax to write a notice.</pre>
        </td>
        <td>
            <blockquote><p>
                Use this syntax to write a notice.
            </p></blockquote>
        </td>
    </tr>
</table>

#### Code

<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>`Use this syntax to write a block of code.`</pre>
        </td>
        <td>
            <code>Use this syntax to write a block of code.</code>
        </td>
    </tr>
</table>

#### Line

<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>---</pre>
        </td>
        <td>
            <hr>
        </td>
    </tr>
</table>


#### Link

<table>
    <tr>
        <th>Markdown</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>[This website](https://docs.okviz.com)</pre>
        </td>
        <td>
            <a href="https://docs.okviz.com">This website</a>
        </td>
    </tr>
</table>

The URL of the links can be:

- **Absolute URL**  
    When you need to link a page external to the repo. For instance:

    `[OKVIZ website](https://okviz.com/)`

- **Relative URL**  
    When you need to link a page of the repo. 

    - If the page to link is in the same folder as the document, simply use the file name as the URL.  
        For example, ***smart-filter-pro/changelog.md*** contains the following link to ***smart-filter-pro/about.md***:

        `[About](about.md)`

    - If the page belongs to a different folder, you need to go up one level and include the new folder name in the URL.  
        For example, ***smart-filter-pro/changelog.md*** contains the following link to ***general/licensing.md***:

        `[Licensing](../general/licensing.md)`

- **Anchor**  
    Markdown automatically generates anchors for each title/heading you place in a document.
    An anchor is a way to identify a location in a document.  
    Every anchor has an ID equal to a sanitized version of the title it refers to.  
    For example, a title like this:

    `## Check for updates`

    has an anchor with this ID:

    `check-for-updates`

    Sanitizing the title means that spaces are replaced with dashes ***-*** and all special characters (such as & , ; :) are removed.

    You can create links to anchors by adding a # plus the anchor ID to the URL.  
    For example, ***smart-filter-pro/changelog.md*** contains this link to the Price section of ***general/licensing.md***:
	
    `[Licensing](../general/licensing.md#price)`

    If the link needs to point to an anchor on the same document, you can simply write # plus the anchor ID. 
    For instance:

    `[See "Check for updates" below](#check-for-updates)`

#### Screenshot (Image)

<table>
    <tr>
        <th>Syntax</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>&#60;img src="images/screenshot.png" width="500"&#62;</pre>
        </td>
        <td>
            <img src="images/markdown-editing/screenshot.png" width="500" class="noround noshadow noborder">
        </td>
    </tr>
</table>

You are not allowed to embed images in Markdown documents like in Word, but they must be referenced from another location. This means that you need to place image files in a separate folder to use them in a document.

Always create a folder called images in the parent folder of the document you are working on (if it doesn't exist) and put all the images in it. For example, the images of ***smart-filter-pro/about.md*** must be placed in the folder ***_docs/smart-filter-pro/images/***.

> Set a reasonable number of pixels in the ***width*** attribute of the &lt;img&gt; tag (see the [Best Practices](best-practices.md)).

> You can align text around images by adding `class="fr"` or `class="fl"` to the img tag.

#### Screencast (Video)

<table>
    <tr>
        <th>Syntax</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
<pre>&#60;video src="images/screencast.mp4" 
 autoplay loop muted width="500"&#62;&#60;/video&#62;</pre>
        </td>
        <td>
            <video src="images/markdown-editing/screencast.mp4" width="500" autoplay loop muted></video>
        </td>
    </tr>
</table>

Like with images, you need to use a HTML syntax to embed videos in your pages. Follow the same rules and best practices of images.

> Be sure to include ***autoplay***, ***loop*** and ***muted*** attributes.

#### Badges

Sometimes it is necessary to display the availability limits of a feature described by the document. You can do this by adding the ***available***, ***version*** or ***premium*** attributes in the [document header](#header) or, if you need to put this information in a different position on the page, you can use this syntax anywhere in the text:

<table>
    <tr>
        <th>Syntax</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>&#123;% include badge in="Dropdown mode" %&#125;</pre>
        </td>
        <td>
            <div class="badge availability">Dropdown mode</div>
        </td>
    </tr>
    <tr>
        <td>
            <pre>&#123;% include badge v="2.2.1" %&#125;</pre>
        </td>
        <td>
            <div class="badge version lc" title="Available from version 2.2.1">v2.2.1</div>
        </td>
    </tr>
    <tr>
        <td>
            <pre>&#123;% include badge premium="/folder/premium-page.md" %&#125;</pre>
        </td>
        <td>
            <div class="badge premium" title="Available to Premium users only"><a href="#">Premium</a></div>
        </td>
    </tr>
</table>

#### Color Cells

You can include simple color cells in your pages.

<table>
    <tr>
        <th>Syntax</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>&#123;% include color value="#FF0000" %&#125;</pre>
        </td>
        <td>
            <div class="color-cell" style="background:#FF0000"></div>
        </td>
    </tr>
</table>

#### Next Reading

You can add a section containing a list of links to other pages at the same folder level. You can also use the ***next_reading*** option in the [document header](#header) to automatically display this section at the bottom of the page.

<table>
    <tr>
        <th>Syntax</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
            <pre>&#123;% include next %&#125;</pre>
        </td>
        <td>
            <div class="next-reading" style="margin:0; width: 300px">
                <div class="title">Next Reading:</div>
                <ul>
                    <li>
                        <a href="best-practices">Best Practices</a>
                    </li>
                    <li>
                        <a href="contributing">Contributing</a>
                    </li>
                </ul>
            </div>
        </td>
    </tr>
</table>

#### ToDo

You can add some placeholders and notes in unfinished documents, to keep track of the content to be edited or the tasks to be performed. You can also define an assignment attribute with the contributor's name.

<table>
    <tr>
        <th>Syntax</th>
        <th>Rendered Output</th>
    </tr>
    <tr>
        <td>
<pre>
&#60;todo&#62;Take a screenshot&#60;/todo&#62;

&#60;todo assign="marco"&#62;TODO&#60;/todo&#62;
</pre>
        </td>
        <td>
            <todo>Take a screenshot</todo><br>
            <todo assign="marco">TODO</todo>
        </td>
    </tr>
</table>

> TODOs are not displayed on the website by default, please contact the administrator to learn how to enable them.