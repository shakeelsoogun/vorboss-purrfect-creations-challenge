# Vorboss Challenge

## The Challenge: Purrfect Creations

Alice has recently started a business selling 3D printed jewellery for cats. 

As you would expect, business is booming and Alice wants to keep track of the success of the business with a metrics dashboard.

She is currently managing her orders in a spreadsheet in Airtable, and would like to continue doing so.

She would like her dashboard to contain some key figures, such as:
 - Total Orders
 - Total Orders this month
 - Number of orders in progress
 - Revenue
 - A list of the most recent few orders

and anything else you think she may find useful.

You can use any software stack that you like. At Vorboss we tend to favour Node + React, but also get submissions in Python, Go, and Rust. Use any language you feel comfortable using, and can talk through one of our engineers.

While this is an internal tool for Alice and doesn't need to win any design awards, you should take pride in the detail and keep in mind clean and maintainable code.

For ease of development and deployment we would like the application to be containerised using Docker.


## List of assumptions
Here are a list of things I've assumed about some of the potentially vague requirements.

 - No "cancelled" orders - Controversial choice here, but thought cancelled orders are likely not all that interesting for the chosen list of metrics or when listing recent orders so I filtered these out. As an addon to the dashboard, it could be interesting as a graph to see if cancelled orders are going up/down - could be an indicator of something being wrong in the sales process.

 - "Total Orders this month" - I took this to mean calendar month rather than last 30 days. From what I have seen, sales staff tend to prefer to track sales on a month-to-month basis, and so this may be more relevant in how sales staff/business owner might track their progress.

 - It's okay to display personal info - The data contains the names, addresses and email addresses of all customers who ordered products. From a dashboard perspective, we may not actually need to display all of that data and introduce a security risk to be retrieving and displaying it there. Since the requirements don't mention anything about this (and it's a test with fake data), I've erred on the side of including it but could reduce risk to filter this out.

