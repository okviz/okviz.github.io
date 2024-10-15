---
layout:         page
title:          Rating System
published:      true
date:           2024-10-04
modified:       2024-10-15
order:          /website/contributing/review-guidelines/rating-system
---

Welcome to the rating system guidelines for reviewing Power BI custom visuals. 

This system is designed to ensure consistent and objective evaluations by assessing key aspects of each visual. Reviewers will evaluate visuals based on specific criteria categorized into three main areas: **Features**, **Design**, and **Support**.

[Jump to the Reviewer Checklist](#reviewer-checklist)

## Areas of Evaluation

### Features

The **Features** category assesses the core functionality of the visual, considering both common and chart-specific features. Some features are essential must-haves, while others enhance usability and interactivity.

- **Common Features:**

  Common features are functionalities that are present in most visuals and are essential for effective data visualization. These features include basic interactions, formatting options, and Power BI integration capabilities.

- **Chart-Specific Features:**

  Chart-specific features are functionalities that are unique to a particular chart type. These features enhance the visual's ability to represent data effectively and provide additional value to users. In the checklist, you will find features specific to various chart types, such as bar charts, line charts, pie charts, etc.

  > **For multi-purpose visuals** (visuals that can represent multiple chart types), you must evaluate the visual against the feature checklists for **all applicable chart types**. This ensures a comprehensive assessment of the visual's capabilities across its various functionalities.

- **Unique Features:**

  Unique features are innovative functionalities that set a visual apart from others. If you encounter a feature that is not listed in the standard checklist and is unique to the visual, you can include it as a *Unique Feature* in your evaluation. These features are given significant weight in the overall rating and **will be automatically highlighted as Pros** in the review.

  >> **IMPORTANT**: If the unique feature becomes common (i.e., it appears in other visuals of the same type in the future), it will be added to the standard checklist with a lower weight. Since updating the checklist frequently is challenging, **please be selective and thoughtful about adding unique features.**

### Design

This category focuses on the visual's appearance, user experience, and performance. It evaluates how well the visual integrates into Power BI dashboards, its aesthetic appeal, consistency, ease of use, and how efficiently it performs.

- **Visual Design:**

    Visual design includes the overall aesthetic quality of the visual, the use of color, layout, and other graphical elements. A visually appealing design can enhance user engagement and comprehension.

- **Accessibility:**
    
    Accessibility features are essential for ensuring that the visual can be used by all users, including those with disabilities. This includes support for screen readers, keyboard navigation, and other accessibility features.

- **Performance:**

    Performance aspects are critical components of the user experience and are included within this category. This includes loading times, responsiveness, and rendering performance. 

    The suggested approach to evaluate performance, is to 
    use a dataset with at lease 10M rows, which is a good representation of a large dataset. Such a dataset is available for download here: [Contoso 10M.7z (420 MB)](https://github.com/sql-bi/Contoso-Data-Generator-V2-Data/releases/download/ready-to-use-data/pbix-10M.7z)

### Support

This category examines the quality of documentation, tutorials, user guides, and vendor responsiveness. Good support ensures that users have the resources they need to use the visual effectively and resolve any issues that may arise.

## Other Considerations

### Weights and Scoring

While you won't need to consider weights in your evaluation directly, please be aware that some features are more significant than others. The final rating considers the importance of each feature to provide a fair and balanced score. Essential features will have a greater impact on the overall rating than nice-to-have features.

### Pros and Cons

Our system will automatically generate **Pros** and **Cons** based on your evaluations. Exceptionally good or poor results for significant features will be highlighted to provide insights into the visual's strengths and weaknesses. This helps in creating a balanced review that highlights key points for potential users.

## Reviewer Checklist

Please use the following checklist to evaluate each visual. For each feature, select the appropriate option based on your assessment.

**Version**: 1.1  
**Date**: Oct 15, 2024

<a href="files/rating.xlsx" class="icon-download">Download Rating Checklist (.xlsx)</a>

> **NOTE**:   
- For features with **Yes/No** options, select **Yes** if the feature is present and functions well, or **No** if it is absent or poorly implemented.
- For features with multiple options (e.g., **Poor / Good / Excellent**), choose the option that best describes the quality or availability of that feature.
- **For multi-purpose visuals**, ensure that you evaluate each chart type's features separately to provide a comprehensive assessment.