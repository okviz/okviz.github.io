---
layout:     page-no-nav
title:      Contributing
published:  true
date:       2021-12-20
modified:   2021-12-21
sitemap:    false
draft:      "no"
toc_max:    3
---
This document explains the workflow for editing the OKVIZ documentation (**docs**). Note that:
- The files consisting of the docs are hosted on Github at this URL (**repo**):
    <https://github.com/okviz/docs>  
- We use Github to edit, review and manage documents, but despite the repo being publicly accessible, end users will browse the docs at this URL (**website**):
    <https://docs.okviz.com>

For more information on Github, [check out this video](https://www.youtube.com/watch?v=w3jLJU7DT5E)

## Workflow

To edit the docs you need to follow the steps below:

- **Create a Github Account:**  
    You can create a Github account at this URL: <https://github.com/join>  
    Follow the on-screen directions, activate your account, then provide us your username, so we can invite you as a repo collaborator.

- **Setup** (steps to follow once):
    1. [Install Git](#install-git)
    2. [Install VSCode](#install-vscode)
    3. [Clone the Repo](#clone-the-repo)  


- **Make Changes** (steps to follow on every session):
    1. [Synchronize your Local Copy](#synchronize-your-local-copy)
    2. [Create a Branch](#create-a-branch)
    3. [Make your Changes](#make-your-changes)
    4. [Commit your Changes](#commit-your-changes)
    5. [Create a Pull Request](#create-a-pull-request)  
    6. [Switch Back to "main"](#switch-back-to-main) 

- **Approve Changes** (for reviewers only):
    1. [Review the Pull Request](#review-the-pull-request)  
    2. [Delete the Branch](#delete-the-branch)

### Setup

You need to follow the steps below only the first time.
1. #### Install Git

    Download Git from <https://git-scm.com/> and install it using the default options.

    After installing it, you need to configure your Github account – to do that:

    1. Open Command Prompt (or Terminal on Mac).
        The easiest way to do that is from search tool in the ***Start*** menu - search for ***cmd*** and click on the first result.
        
        <img src="assets/images/contributing/cmd.png" width="600">

    2. At the command prompt, enter the following commands (replace ***your-email@domain.com*** and ***your-username*** with the ones you registered on Github): 
        - `git config --global user.email "your-email@domain.com"` (press Enter)
        - `git config --global user.name "your-username"` (press Enter)

        <img src="assets/images/contributing/git-config.png" width="550">
    
2. #### Install VSCode

    While it is possible to edit repo documents directly through the Github website, it's easier to use a desktop tool such as Visual Studio Code (**VSCode**). 

    Download VSCode from <https://code.visualstudio.com/> and install it.

3. #### Clone the Repo

    Cloning a repository means creating a local copy of a remote repository on your computer. You can make any changes on your local copy and then, send those changes back online through a **Commit**.

    To clone the repo, open VSCode, click on the ***Clone Repository*** button in the ***Editors*** sidebar, and insert this repository URL: `https://github.com/okviz/docs.git`

    <img src="assets/images/contributing/clone-repo.png" width="700">

    After inserting the URL, you are asked to choose a folder on your computer to store the content of the copy of the repo. Create a new one called ***OKVIZ*** and press ***Select Repository Location***. 

    At this point, VSCode downloads all the content from the repo online to your local folder and you're ready to start.  
    Proceed by opening the folder and trusting the authors.

### Make Changes

You have to follow the steps below every time you want to make some changes to the docs in a session. 
A session starts with synchronization and ends with a Pull Request.

1. #### Synchronize your Local Copy

    The first thing to do is to synchronize your local version of the repo with the version online, to include any changes made by the other contributors.

    In VSCode, click on the source control icon, select the ellipsis button, and choose the ***Pull*** command from the context menu. 

    <img src="assets/images/contributing/pull.png" width="450">

2. #### Create a Branch

    Now that you have the latest content on your computer, you need to create a new branch.  
    All documents accessible by the end users on the website are stored in the ***main*** branch of the repo, to make the review of your changes easier you need to copy this branch into a new one.

    Treat this new branch like a patch - a group of changes you want to apply to the ***main*** branch at the end of the current session.  

    > After the end of the session, **you will no longer use this branch**.

    To create a new branch, click on the label ***main*** on the lower-left corner of the VSCode window. Then click ***Create new branch...***, and enter a name in the format `username-YYYY-MM-DD` (replace ***username*** with your Github username and ***YYYY-MM-DD*** with the current date in ISO 8601 format).

    <img src="assets/images/contributing/create-branch.png" width="550">

3. #### Make your Changes

    At this point, you are working on a different branch (you see the name of the branch you have just created in the lower-left corner of the VSCode window - if the name is still ***main***, click on the name and select the correct one).

    <img src="assets/images/contributing/branch-name.png" width="200">

    The only place containing documents you may want to change is the **_docs** directory:

        _docs
            general 
            smart-filter-pro
            calendar-pro
            [any-other-visual-name]
       

    > **IMPORTANT**: Don't change any files outside of the ***_docs*** directory.

    The files in the _docs directory are written in Markdown (file extension ***.md***) which is a simplified version of HTML - see the [Markdown Syntax](#markdown-syntax) section for more information.  

    You can create files or folders directly in VSCode by right-clicking on the sidebar and choosing the appropriate command, and you can edit a file by left clicking on it in the sidebar. 
    
    Editing a Markdown file is easier if you also open the preview pane via the preview button - any changes in Markdown are interpreted and displayed in the preview pane in real time.

    <img src="assets/images/contributing/preview-pane.png" width="850">

    After editing the files, save them and you are ready for the next steps.

4. #### Commit your Changes

    Committing a change means sending the files you changed locally back to the online repo. In fact, before committing, all changes are stored only in your local computer.

    To commit with VSCode, click on the ***Source Control*** icon, add a small description of the changes made in the input box above the ***Changes*** section, click the ellipsis button and choose Commit (or CTRL + Enter).

    <img src="assets/images/contributing/commit.png" width="850">

    Then click ***Publish Branch***.

    <img src="assets/images/contributing/publish-branch.png" width="300">

    > The first time you commit something, VSCode needs to be authorized to access your Github account. Click on **Sign in with your browser** on the dialog box that appears, and follow the on-screen instructions to proceed.  
    > <img src="assets/images/contributing/signin.png" width="300">

    

5. #### Create a Pull Request

    At this point your changes are online on another branch, not visible on the website. You want to make them available to everyone, but you can't commit them directly to the ***main*** branch because every change requires approval. To request approval, you need to create a Pull Request (**PR**).

    First of all, go to the repo on Github (<https://github.com/okviz/docs>), ***Sign in*** if you are not logged in, then click on ***Compare & pull request*** button that should appear on top of the files list.
    
    <img src="assets/images/contributing/pr-1.png" width="700">

    On the next page you can add more details to the request you are making and you can review all the changes you made. Also, note the top bar with the merge information - you are asking to merge you patch branch to the main branch.

    <img src="assets/images/contributing/pr-3.png" width="800">

    If everything looks fine, press the ***Create pull request*** button.

   <img src="assets/images/contributing/pr-2.png" width="800">

   At this point, the repo owner and the collaborator will be notified and may decide to approve your changes,  request more details, or discard the PR.

6. #### Switch Back to "main"

    After sending the PR, you need to switch back your local repo to the ***main*** branch.
    To do that, click the newly created branch name on the lower-left corner of the VSCode window and select ***main*** from the dropdown list. 

    <img src="assets/images/contributing/branch-back.png" width="600">

    > This step is performed just to be safe - so you are sure not to use the wrong branch the next time you work on the docs.

    *You are done, congratulations!*

### Approve Changes

These steps are for reviewers only. They must review the Pull Request, approve it, and delete the patch branch created by the contributor.

1. #### Review the Pull Request

    To review the PR, open the repo on Github, click on [Pull requests](https://github.com/okviz/docs/pulls) and select it from the list.

    <img src="assets/images/contributing/pr-4.png" width="800">

    On the next page you can see that the PR requires at least 1 approving review to be merged into the main branch. To proceed, click on ***Add your review***. 

    <img src="assets/images/contributing/pr-5.png" width="700">

    Here you can see all the changes included in the PR and decide to approve them from the ***Review changes*** dialog. 

    <img src="assets/images/contributing/pr-6.png" width="800">

    If you want to make some changes to the files included in the PR, you can do it in Github. Click the ellipsis button of the file you want to edit and choose ***Edit file*** from the context menu.

    <img src="assets/images/contributing/pr-7.png" width="400">

    After approving the PR, you can merge the changes into the main branch. Do this by clicking ***Merge pull request*** and confirming it.

    <img src="assets/images/contributing/pr-8.png" width="800">

2. #### Delete the Branch

    After the PR has been merged into the main branch, the patch branch must be deleted.
    
    <img src="assets/images/contributing/delete-branch.png" width="800">

    *You are done, congratulations! The changes will be visible on the website in a couple of minutes.*

## Markdown Syntax
 
Markdown documents (file extension ***.md***) are simple text files with additional special syntax that you can use to style your content, embed images, or create links.  
These documents are interpreted, this means that **what you write is not exactly what will appear** on the website, for this reason it is recommended to use the VSCode preview pane to see the final result while editing.

### Header

Every file must contain a header in the following format (note that the ***\-\-\-*** lines are required):

    ---
    layout:         page
    title:          Document title
    menu_title:     Menu title
    published:      true
    draft:          false
    date:           2021-11-15
    modified:   	2021-11-21
    order:          /1/2/document-title
    toc:            false
    version:        2.0
    available:      Availability note
    internal:       Internal reference
    ---

- **layout:** always set the value ***page***.
- **title:** set the title of the document.
- **menu_title:** (optional) set a title for the navigation menu if you want to make it different from the main title.
- **published:** set ***true*** to display the document on the website 
- **draft:** (optional) set ***true*** to show a notice that the document is not completed (note that this notice appears automatically if the document is empty or if it contains &lt;todo&gt;&lt;/todo&gt; tag.
- **date:** set the creation date of the document.
- **modified:** set the date of the last modification of the document.
- **order:** set a string to be used to sort the document in the navigation menu - check existing files to know how sorting works. In general, if the page is the child of a node, it is necessary to insert the order attribute of the parent node plus a slash ***/*** and a number (if you want to give a static position) or a sanitized version of the title (without spaces and special characters - if you want to use alphabetical sorting).
- **toc:** (optional) set ***false*** to hide the automatic table of contents.
- **version:** (optional) used only with visual options - set the version of the visual when the option was introduced.
- **available:** (optional) used only with visual options - set the mode(s) in which the option is available.
- **internal:** (optional) used to define some internal reference, useful for maintenance - this attribute is not displayed in the website.

### Body

Here is a common list of syntaxes you may want to use. For a full explanation of the syntax, check out this article: [Basic writing and formatting syntax on Github](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

#### Title

    ## The second largest title after the document title
    ### Title 3
    #### Title 4
    ##### Title 5
    ###### The smallest title in the document

#### Paragraph

Define paragraphs by inserting a blank line between them.

    This line is on paragraph 1.

    This line is on paragraph 2.

#### Carriage Return

Put at least two spaces after the end of a line and a carriage return, otherwise the carriage return alone will be ignored.

    This line is on line 1.  (two spaces here)
    This line is on line 2.

#### Bold

    This text is **bold**.

#### Italic

    This text is *italic*.

#### Bold Italic

    This text is ***bold italic***.

#### Unordered List

    - Item A
    - Item B
    - Item C

#### Ordered List

    1. Item 1
    2. Item 2
    3. Item 3

#### Notices

    > Use this syntax to write a notice.

#### Code

    `Use this syntax to write blocks of code, or to refer to the user input.`

#### Links

    [text](URL)

Text can be everything, but it is preferable to use a meaningful text like the title of the document to be linked rather than a generic call to action such as ***Click here*** or ***Learn more***.  
URL is invisible to the end user and can be:

- **Absolute URL**  
    When you need to link a page external to the repo. For instance:

        [OKVIZ website](https://okviz.com/) 

- **Relative URL**  
    When you need to link a page of the repo. 

    - If the page to link is in the same folder as the document, simply use the file name (without extension) as the URL.  
        For example, ***smart-filter-pro/changelog.md*** contains the following link to ***smart-filter-pro/about.md***:

            [About](about)

    - If the page belongs to a different folder, you need to go up one level and include the new folder name in the URL.  
        For example, ***smart-filter-pro/changelog.md*** contains the following link to ***general/licensing.md***:

            [Licensing](../general/licensing)

    > Do not put the file extension ***.md*** or a trailing slash ***/*** into these links.

- **Anchor**  
    Markdown automatically generates anchors for each title/heading you place in a document.
    An anchor is a way to identify a location in a document.  
    Every anchor has an ID equal to a sanitized version of the title it refers to.  
    For example, a title like this:

        ## Check for updates 

    has an anchor with this ID:

        check-for-updates

    Sanitizing the title means that spaces are replaced with dashes ***-*** and all special characters (such as &, ; or :) are removed.

    You can create links to anchors by adding a # plus the anchor ID to the URL.  
    For example, ***smart-filter-pro/changelog.md*** contains this link to the Price section of ***general/licensing.md***:
	
        [Licensing](../general/licensing#price)

    If the link needs to point to an anchor on the same document, you can simply write # plus the anchor ID. 
    For instance:

        [See "Check for updates" below](#check-for-updates)

#### Images

You are not allowed to embed images in Markdown documents like in Word, but they must be referenced from another location. This means that you need to place image files in a separate folder to use them in a document.

Always create a folder called images in the parent folder of the document you are working on (if not exists) and put all the images in it.  
For example, the images of ***smart-filter-pro/about.md*** must be placed in the folder ***_docs/smart-filter-pro/images/***.

To insert an image into a document you can use this syntax:

    <img src="images/IMAGE_FILE_NAME" width="WIDTH">

Replace ***WIDTH*** with a reasonable value – note that you don't need to specify the height - it is automatically calculated by the browser to maintain the aspect ratio of the image.

For example, ***smart-filter-pro/about.md*** contains the image ***check-for-updates.png***:

    <img src="images/check-for-updates.png" width="200">

> **PNG is the preferred format for images**. Use JPG only if the image is a photography.
You can use GIF images too, but the problem with this format is the size - it gets too big very quickly when you record something on the screen (screencasting).  
In general, an **acceptable file size is less than 150KB**.


#### TODO/Placeholders

You can add some placeholders and notes in unfinished documents, to keep track of the content to be edited or the tasks to be performed. You can also define an assignment attribute with the contributor's username.

    <todo>Retake the screenshot</todo>

    <todo assign="danieleperilli">Complete this section</todo>
