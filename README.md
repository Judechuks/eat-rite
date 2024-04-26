#### SETTING UP DOTENV 
** STEPS: **

##### 1. settings.py:

In your project’s settings.py file, you’ll find a variable named SECRET_KEY. It’s usually set to a random string.

It is important to set the DEBUG=FALSE while running our Django project in production.

It’s important to keep this key secret and not share it publicly or expose it in your code repositories.

##### 2. Generating a Secret Key:
You can generate a new secret key using the following function.
<blockquote>django.core.management.utils.get_random_secret_key</blockquote>

By: 
Opening Python shell in your project directory and running the following commands:

`python3 manage.py shell

from django.core.management.utils import get_random_secret_key
print(get_random_secret_key())
`
Copy the output (i.e the generated secret key) and replace the existing SECRET_KEY in your settings.py file.

#### Python Environment Variables 
In Python, environment files, often named as .env files, are used to store configuration settings and sensitive information for a project. These files are commonly used with frameworks like Django and Flask, as well as other applications.

** 1) Create an Environment File:**
Create a file in your project directory and name it .env. This file should contain key-value pairs in the format KEY=VALUE, where each line represents a different variable.

** The .env file should be in the same level with the manage.py **

** 2) Adding Environment variables: **
Copy paste the SECRET_KEY & DEBUG values from settings.py to .env file as KEY=VALUE pair as shown below.

<blockquote>
  SECRET_KEY='the_secret_key_generated_from_python_shell'
  DEBUG=False
</blockquote>

**NOTE: these 2 will be added to the .env file without comma and white spaces**

** 3) python dot-env : **
Now install python-dotenv module in your virtual environment.

`pip install python-dotenv`

Now add the below codes in settings.py file . Open settings.py
You can paste it after `from pathlib import path` (at the top level of your settings.py file)

`from dotenv import load_dotenv
load_dotenv()`


In this case I am not making DEBUG = os.environ.get(‘DEBUG’) because we already added DEBUG=FALSE in .env file and it initially makes it True.

[link to article]('https://medium.com/django-unleashed/securing-django-applications-best-practices-for-managing-secret-keys-and-environment-variables-f10f5a53490b')

In this project, I used Replit, So I had to use the Secret Tool in replit to create my secret key. 