# OVERVIEW

This project focuses on customer segmentation using RFM (Recency, Frequency, Monetary) analysis to better understand customer purchasing behavior and support data-driven business decisions.

It combines data processing, interactive visualization, and API development to deliver a complete customer intelligence solution. The system allows exploration of various segments, evaluation of their value, and insights into engagement and spending over time.

By grouping the transactional data into meaningful segments, the system provides a clear view of the most valuable groups, those at risk of churn, and areas of growth

# BUSINESS PROBLEM

In most retail businesses, buyers are often treated as a single group in marketing and engagement strategies, despite exhibiting different purchasing behaviors. This makes it difficult to effectively understand overall customer value across the business.

Segmenting buyers based on purchasing behavior allows businesses to move beyond a generalized marketing approach. Using RFM analysis (Recency, Frequency, Monetary) and clustering techniques, organizations can better understand customer value distribution, identify high-value and loyal buyers, detect those at risk of disengagement, and optimize marketing resource allocation.

This approach provides actionable insights that support targeted campaigns, improved retention strategies, and more efficient business performance.

# DATA UNDERSTANDING

The dataset used is the Online Retail Dataset from the UCI Machine Learning Repository, which contains real-world e-commerce transaction data capturing purchasing behavior over time.

The dataset is transformed into key RFM features:

Recency – How recently a purchase was made
Frequency – How often purchases are made
Monetary – Total spending

These features are used to segment records into meaningful groups.

# METHODS

The project follows a structured workflow that begins with data preparation, where data cleaning, preprocessing, and transformation are performed to ensure the dataset is suitable for analysis. Then followed by the modeling phase, where the optimal number of clusters is determined using the Elbow Method and evaluated using the Silhouette Score, before applying K-Means clustering for segmentation. The results are then explored through a Tableau dashboard, to provides interactive visualization of the insights. Finally, the solution is deployed to enable easy, interactive access to the application.

# RESULTS & INSIGHTS

Findings show differences across segments.

Promising segments form the largest group and contribute a significant share of revenue, indicating strong growth potential. Loyal segments are smaller in size but generate consistent revenue over time. At-risk or churned segments are many in number but contribute very little revenue, highlighting low engagement. In contrast, VIP segments are small in number but account for a disproportionately high share of revenue.

# KEY VALUE

The project delivers practical business value by:

Identifying high-value, revenue-driving segments
Detecting early churn risk for proactive retention
Supporting targeted marketing and personalization strategies
Improving customer lifetime value strategies
Translating raw data into clear, actionable insights

# CONCLUSION & RECOMMENDATIONS

The results show that value is not evenly spread across segments for example a small group of VIP segments generates a disproportionately high share of revenue, while larger segments contribute significantly less. This highlights the importance of RFM segmentation and K-Means clustering in understanding purchasing behavior and enabling data-driven decision-making.

To act on these insights, the focus should be on strengthening retention within Loyal segments to maximize long-term value, implementing re-engagement campaigns for At-Risk segments, moving Promising segments into Loyal segments through engagement strategies, and retaining VIP segments.