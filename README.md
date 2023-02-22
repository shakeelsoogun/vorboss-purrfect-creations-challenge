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

## How to run

A Dockerfile has been provided to run the backend and serve the frontend. To run it:
 - Simply fill out the 3 environment variables for the Airtable credentials in the Dockerfile (or provide these via docker env variables)
    - AIRTABLE_API_KEY
    - AIRTABLE_BASE_ID
    - AIRTABLE_TABLE_NAME
 - Build and run the Dockerfile
 - Go to localhost:3000/ to see the work!

## List of assumptions
Here are a list of things I've assumed about some of the potentially vague requirements.

 - No "cancelled" orders - Controversial choice here, but thought cancelled orders are likely not all that interesting for the chosen list of metrics or when listing recent orders so I filtered these out. As an addon to the dashboard, it could be interesting as a graph to see if cancelled orders are going up/down - could be an indicator of something being wrong in the sales process.

 - "Total Orders this month" - I took this to mean calendar month rather than last 30 days. From what I have seen, sales staff tend to prefer to track sales on a month-to-month basis, and so this may be more relevant in how sales staff/business owner might track their progress.

 - It's okay to display personal info - The data contains the names, addresses and email addresses of all customers who ordered products. From a dashboard perspective, we may not actually need to display all of that data and introduce a security risk to be retrieving and displaying it there. Since the requirements don't mention anything about this (and it's a test with fake data), I've erred on the side of including it but could reduce risk to filter this out.

## Architecture
The project is made up of two main parts:
 - A Python Flask RESTful API
 - A React frontend built with Vite

A Dockerfile has been provided that both runs the backend and serves the frontend for ease of access of checking the test results. However this would probably not be how I'd usually run things for production! Typically I would:
 - Run the python server using a more productionised one like gunicorn. This would likely be run from a platform where there is load balancers/nginx in front of it to ensure that the API only has to handle its job without having to deal with poor connections from clients.
 - Host the frontend separately, typically in a bucket in the cloud with a CDN in front of it (depending on how heavily it gets accessed and from where). That way the backend API can focus purely on responding to requests.

The API has two endpoints:
 - GET /order - for retrieving a list of orders. Optional args that can be passed:
  - `limit` - So the frontend can limit how much it gets sent
  - `sort` - so the frontend can request asc/desc orders
 - GET /order/metric - for retrieving metrics on all the orders. Here we fetch all orders and then work the metrics out with python. Fetching all the orders seems fairly slow however. 
 
## Things I'd do differently/in the future
- the GET /order/metric endpoint seems to take 3-4s which is quite slow. In the future I'd likely initially put some caching around this. As a bigger effort I'd perhaps add some kind of recurring batch system that picks up data from Airtable and puts it in a much faster store of our own and/or pre-calculate the metrics and store them only. Another approach could be to try to only fetch the delta between what we got last time and anything new that has arrived since - couldn't see a simple way to do that from the Airtable API however.
 - The vague outline of a cloud architecture, listed above
 - Maybe use node.js for the backend. I used python to try to make something simple and quick, but given the nature of the I/O involved in requesting lots of data from Airtable, it might make more sense with something more suited towards doing that efficiently.
 - Add some interesting graphs using D3! I really wanted to do a sales chart to show the products selling the best, but ended up spending more time than I thought setting up the API, initial frontend and Dockerfile and so didn't get around to this.
