# COMP2110 Week 05

Briefly summarise the work you've done this week here.

API
HTML API
JASON API

How to format JASON to make it more readable?
you need to have JASON formatter extension 

# Looking at JSON over HTTP
# In the first case, the response is a redirect to another page - what is the status code and where is the browser redirected to?

The browser redirected to https://openlibrary.org/works/OL45804W/Fantastic_Mr_Fox 
an Open Library webpage which give information and review about book. The page reviews about "Fantastic Mr. Fox" book.

# HTML
Request method GET
Status code is 200 OK means successfully get the URL from the browser
# JSON 
Request method GET, OPTIONS
Status code is 200 OK means successfully get the URL from the browser

# What is the Content-Type of the two responses?
- The content-type of HTML page is text/html; charset=utf-8
- The content-type of JSON page is application/json


# Can you see the JSON well formatted - if not, look for a browser extension that helps you view the JSON data.
At first, the JSON page is not formatted. In order to make it more readable, an extension for Google Chrome is installed. The extension is "JSON Formatter"

# Compare the information returned in both responses - does the JSON have the same information as presented in the HTML page? Is there anything missing?
HTML page is designed neatly and beautifully with visual effect such as photo of the book 
JSON page is 
# Web Application Exercise
2nd function give you detail about the book
write the function
# you have json file already, you can keep it as a seperate file or you can have it inside javascript
tell the difference btw these two method
# When you are hard-coding the json in javascript, there are 2 things need to be taken care of
have to "" if you have seperate file
if you hard-code you need to remove "" from the array, and you need to have the comma after the square bracket
Use back tick `` not back quote ''